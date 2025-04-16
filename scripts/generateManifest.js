const fs = require("fs");
const path = require("path");

const postsDir = path.join(__dirname, "../public/posts");
const manifestPath = path.join(postsDir, "manifest.json");

function generateManifest() {
  if (!fs.existsSync(postsDir)) {
    console.error("❌ Posts directory does not exist:", postsDir);
    process.exit(1);
  }

  const files = fs.readdirSync(postsDir);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));

  try {
    fs.writeFileSync(manifestPath, JSON.stringify(markdownFiles, null, 2));
    console.log(`✅ manifest.json created with ${markdownFiles.length} posts`);
  } catch (err) {
    console.error("❌ Failed to write manifest.json:", err);
    process.exit(1);
  }
}

generateManifest();
