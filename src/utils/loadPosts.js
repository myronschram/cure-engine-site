import fm from "front-matter";

// Dynamically load blog metadata list from a manifest file
export async function loadPosts() {
  let filenames = [];

  try {
    const res = await fetch("/posts/manifest.json");
    filenames = await res.json();
  } catch (err) {
    console.error("Failed to load post manifest:", err);
    return [];
  }

  const posts = [];

  for (const filename of filenames) {
    try {
      const res = await fetch(`/posts/${filename}`);
      const rawContent = await res.text();
      const { attributes, body } = fm(rawContent);
      const slug = filename.replace(".md", "");
      posts.push({ ...attributes, content: body, slug });
    } catch (err) {
      console.error("Failed to fetch or parse:", filename, err);
    }
  }

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}
