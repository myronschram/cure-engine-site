CMS.init({
  config: {
    backend: {
      name: "github",
      repo: "YOUR_GITHUB_USERNAME/YOUR_REPO_NAME",
      branch: "main",
    },
    media_folder: "public/uploads",
    public_folder: "/uploads",
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        folder: "posts",
        create: true,
        slug: "{{slug}}",
        fields: [
          { label: "Title", name: "title", widget: "string" },
          { label: "Author", name: "author", widget: "string", default: "Myron Schram" },
          { label: "Date", name: "date", widget: "datetime" },
          { label: "Tags", name: "tags", widget: "list" },
          { label: "Body", name: "body", widget: "markdown" },
        ],
      },
    ],
  },
});
