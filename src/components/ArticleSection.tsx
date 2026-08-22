const articles = [
  {
    title: "AI photo organizer",
    href: "/ai-photo-organizer/",
    description: "When local AI sorting is useful, where manual review is better, and how previews reduce photo filing mistakes.",
  },
  {
    title: "Organize photos with AI",
    href: "/organize-photos-with-ai/",
    description: "A practical workflow for camera photos, screenshots, exports, and temporary image files.",
  },
  {
    title: "Automatic photo organizer",
    href: "/automatic-photo-organizer/",
    description: "How to turn unclear image folders into reviewed categories that make sense when browsing later.",
  },
  {
    title: "Offline AI photo organizer",
    href: "/offline-ai-photo-organizer/",
    description: "What local processing protects, what it does not, and what to verify before using any AI photo organizer.",
  },
  {
    title: "Galoria vs cloud AI",
    href: "/photo-organizer-vs-cloud/",
    description: "Compare local AI suggestions with cloud image organizers and their upload tradeoffs.",
  },
  {
    title: "Install Galoria",
    href: "/docs/install/",
    description: "Installation expectations, first-folder guidance, and support links.",
  },
];

const ArticleSection = () => {
  return (
    <section className="border-t border-border py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Helpful photo organization guides
          </h2>

          <p className="mt-4 text-muted-foreground md:text-lg">
            Start with the page that matches your folder, image type, or buying question.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <a
              key={article.href}
              href={article.href}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            >
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {article.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;

