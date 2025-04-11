CMS.init({
  config: {
    backend: {
      name: "github",
      repo: "myronschram/cure-engine-site",
      branch: "main",
      auth_scope: "repo",
      client_id: "Ov23lil0jspiuuNxXNo6",
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
          { label: "Author", name: "author", widget: "string" },
          { label: "Date", name: "date", widget: "datetime" },
          { label: "Tags", name: "tags", widget: "list" },
          { label: "Body", name: "body", widget: "markdown" }
        ]
      }
    ]
  }
});
