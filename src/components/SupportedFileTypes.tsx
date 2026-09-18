import { product } from "@/config/product";

const fileTypes = Object.entries(product.supportedFileTypes);

const SupportedFileTypes = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Supported Image Types
        </h2>

        <div className="mx-auto max-w-2xl">
          {fileTypes.map(([title, types]) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <h3 className="mb-3 text-lg font-semibold">{title}</h3>

              <div className="flex flex-wrap justify-center gap-2">
                {types.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedFileTypes;

