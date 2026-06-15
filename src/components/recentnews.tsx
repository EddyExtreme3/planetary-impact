import Image from "next/image";

export default function RecentNews() {
  return (
    <section className="mx-auto grid w-full max-w-348 bg-[#CA433C] px-6 py-6 text-white md:h-76 md:grid-cols-[auto_1fr_256px] md:grid-rows-[auto_1fr] md:items-start md:gap-x-20 md:px-20">
      <h2 className="font-nunito text-[20px] font-bold underline md:col-start-1 md:row-start-1 md:text-3xl">
        Recent nieuws
      </h2>

      <p className="mt-4 font-space text-[16px] text-gray-800 md:col-start-2 md:row-start-1 md:mt-0 md:pt-2 md:text-[24px]">
        EVENT
      </p>

      <p className="mt-4 max-w-140 font-space text-[14px] leading-5 text-white md:col-start-1 md:row-start-2 md:mt-8 md:text-[20px] md:leading-7">
        SpaceX richt zich op 2026 voor Eerste Onbemande Mars Missie.
        Deze ontwikkeling vertegenwoordigt een grote sprong voorwaarts
        voor Mars kolonisatie infrastructuur, waarbij industrie-experts
        significante stijgingen voorspellen in Martiaanse vastgoedwaarden
        nu de Rode Planeet steeds toegankelijker wordt.
      </p>

      <Image
        src="/images/news.jpg"
        alt="Mars planeet"
        width={342.16}
        height={334}
        className="mt-8 object-cover md:col-start-3 md:row-start-1 md:row-span-2 md:mt-0"
      />
    </section>
  );
}