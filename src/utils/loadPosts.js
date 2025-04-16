
import fm from "front-matter";

export async function loadPosts() {
  console.log("🚀 loadPosts.js: Starting blog post loading process...");

  let filenames = [];

  try {
    const manifestResponse = await fetch("/posts/manifest.json");

    if (!manifestResponse.ok) {
      throw new Error(`Failed to fetch manifest.json: ${manifestResponse.status} ${manifestResponse.statusText}`);
    }

    filenames = await manifestResponse.json();

    if (!Array.isArray(filenames)) {
      throw new Error("Manifest JSON is not an array.");
    }

    if (filenames.length === 0) {
      console.warn("⚠️ Manifest is empty. No posts will be shown. IV");
    } else {
      console.log("📂 Manifest contents:", filenames);
    }
  } catch (err) {
    console.error("❌ Error loading manifest.json:", err);
    return [];
  }

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      try {
        console.log(`📄 Fetching: ${filename}`);
        const res = await fetch(`/posts/${filename}`);
        if (!res.ok) throw new Error(`Fetch error: ${res.status} ${res.statusText}`);

        const raw = await res.text();
        if (!raw.trim()) throw new Error("Empty file");

        const { attributes, body } = fm(raw);

        if (!attributes.title || !attributes.date) {
          console.warn(`⚠️ Skipping file missing title or date: ${filename}`);
          return null;
        }

        const post = {
          ...attributes,
          content: body,
          slug: filename.replace(/\.md$/, ""),
          date: new Date(attributes.date).toISOString(),
        };

        console.log(`✅ Loaded post: ${attributes.title} (${filename})`);
        return post;
      } catch (err) {
        console.error(`❌ Failed to load ${filename}:`, err);
        return null;
      }
    })
  );

  const validPosts = posts.filter(Boolean).sort((a, b) => new Date(b.date) - new Date(a.date));
  console.log(`🧾 Successfully loaded ${validPosts.length} posts:`, validPosts.map(p => p.slug));
  return validPosts;
}
