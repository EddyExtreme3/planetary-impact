type UspsProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function usps({
  title,
  description,
  imageUrl,
}: UspsProps) {
  return (
    <article
      className="relative h-40 rounded-lg overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full flex-col justify-between p-4">
        <div>
          <h2 className="mb-2 text-sm font-Nunito Sans text-cyan-400">
            {title}
          </h2>

          <p className="text-xs leading-relaxed font-Space Grotesk text-white">
            {description}
          </p>
        </div>

        <button className="w-33 h-9.25 rounded-sm bg-planetary-blue text-white">
          Lees meer
        </button>
      </div>
    </article>
  );
}