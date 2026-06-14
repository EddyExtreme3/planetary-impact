import Image from "next/image";
export default function recentnews() {
 return (
    <section className="mx-auto flex w-full max-w-348 flex-col gap-6 bg-[#CA433C] px-6 py-6 text-white md:h-76 md:flex-row md:items-center md:justify-between md:px-20">
      <div className="max-w-140">
        <h2 className="mb-8 text-3xl font-bold underline">
          Recent nieuws
        </h2>

        <p className="font-Space">
          SpaceX richt zich op 2026 voor Eerste Onbemande Mars Missie.
          Deze ontwikkeling vertegenwoordigt een grote sprong voorwaarts
          voor Mars kolonisatie infrastructuur, waarbij industrie-experts
          significante stijgingen voorspellen in Martiaanse vastgoedwaarden
          nu de Rode Planeet steeds toegankelijker wordt.
        </p>
      </div>

      <p className="text-xl text-gray-800 md:self-start md:pt-4">
        EVENT
      </p>

      <Image
        src="/images/news.jpg"
        alt="Mars planeet"
        width={256}
        height={256}
        className="h-64 w-64 object-cover"
      />
    </section>
  );
}