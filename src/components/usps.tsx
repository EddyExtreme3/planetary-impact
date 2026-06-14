type UspsProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function Usps({ title, description, imageUrl }: UspsProps) {
  return (
    <article
      className="relative h-90 w-full overflow-hidden rounded-2xl bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 flex h-full flex-col justify-between p-8">
        <div>
          <h2 className="mb-6 font-nunito text-[24px] font-bold leading-7.25 text-planetary-blue">
            {title}
          </h2>

          <p className="max-w-140 font-space font-normal leading-5.5 text-white">
            {description}
          </p>
        </div>

        <button className="self-end h-9.25 w-33 rounded bg-planetary-blue font-space text-[16px] text-white">
          Lees meer
        </button>
      </div>
    </article>
  );
}