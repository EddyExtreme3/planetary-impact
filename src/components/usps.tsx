type UspsProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function Usps({ title, description, imageUrl }: UspsProps) {
  return (
    <article
      className="relative h-51.75 w-full max-w-85.75  md:max-w-185.75 md:h-90 md:w-full overflow-hidden rounded-2xl bg-cover bg-center items-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 flex h-full flex-col justify-between md:p-8 p-4">
        <div>
          <h2 className=" w-76.25 h-6.75 md:h-10.25 md:w-108  font-nunito md:text-[24px] text-[20px] font-bold leading-7.25 text-planetary-blue">
            {title}
          </h2>

          <p className="w-77.75 h-27 md:w-142.75 md:h-32.5 font-space text-[14px] font-normal leading-3.5 tracking-[0%] text-white md:text-[20px] md:leading-5">
            {description}
          </p>
        </div>

        <button className="self-end w-23.75 h-6 md:h-9.25 md:w-33 rounded-sm bg-planetary-blue font-space font-normal md:text-[18px] text-[12px] text-white">
          Lees meer
        </button>
      </div>
    </article>
  );
}
