import demoGif from "../assets/galoria-demo.gif";

const DemoSection = () => {
  return (
    <section id="demo" className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">
            See the review workflow before you buy
          </h2>

          <p className="mt-4 text-muted-foreground md:text-lg">
            Galoria does not hide image moves. Review the analyze, preview, and apply flow before using it on a large collection.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="overflow-hidden rounded-xl border border-primary/20 bg-card shadow-2xl">
            <img src={demoGif} alt="Galoria AI review workflow showing a photo library classified into proposed albums" width="944" height="480" loading="lazy" className="h-auto w-full bg-background" />
          </div>
        </div>

        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-muted-foreground/90">
          Watch Galoria classify an image collection, preview the proposed albums, and review the plan before applying it.
        </p>
      </div>
    </section>
  );
};

export default DemoSection;

