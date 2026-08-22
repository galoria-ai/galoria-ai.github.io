const scenarios = [
  {
    title: "Screenshots cleanup",
    description:
      "Use Galoria when a screenshot or image folder mixes captures, exports, memes, and graphics that need different destinations.",
  },
  {
    title: "Pictures reset",
    description:
      "Use it to turn a crowded Pictures folder into a smaller set of reviewed items, with the rest routed into permanent folders.",
  },
  {
    title: "Project archive",
    description:
      "Use it when a project image folder needs a predictable structure before you hand it off, back it up, or revisit it later.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Common ways people use Galoria
        </h2>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {scenarios.map((scenario) => (
            <div key={scenario.title} className="rounded-xl border border-border bg-card p-6">
              <p className="font-semibold">{scenario.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {scenario.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

