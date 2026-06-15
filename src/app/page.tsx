import Usps from "@/components/usps";
import Footer from "@/components/footer";
import RecentNews from "@/components/recentnews";
import Logo from "@/components/Logo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center overflow-x-hidden gap-2 md:gap-6">
      <header className="w-full max-w-348 px-6 pt-4 md:px-0">
        <Logo />
      </header>

      <div className="mt-6 w-full max-w-348 md:mt-16">
        <Image
          src="/images/hero.jpg"
          alt="Hero Image"
          width={1392}
          height={464}
          priority
          className=" h-auto w-full object-cover md:h-116"
        />
      </div>

      <section className="my-8 max-w-200 px-6 text-center text-header-color md:my-12">
        <h2 className="text-3xl font-nunito font-bold md:font-nunito md:font-extrabold md:text-5xl">
          &ldquo;Maak werk van Mars&rdquo;
        </h2>

        <h3 className="mt-3 font-space font-normal text-base md:text-xl">
          Mars is de toekomst. Planetary Impact helpt u met het zoeken naar een
          geschikte plek voor uw kolonie.
        </h3>
      </section>

      <section className="grid w-full max-w-348 grid-cols-1 gap-6 px-6 py-8 md:grid-cols-2 md:px-12 md:py-10">
        <Usps
          title="Pioneer Nederzettingsplanning"
          description="Wij verkopen je niet alleen grond - we helpen je bij het plannen van je complete Martiaanse boerderij. Onze gecertificeerde exogeologen en atmosferische ingenieurs bieden uitgebreide locatieanalyse, inclusief bodemsamenstelling rapporten."
          imageUrl="/images/nederzettingsplanning.jpg"
        />

        <Usps
          title="Juridische eigendomsverzekering"
          description="Is het enige Mars vastgoedkantoor met juridische erkenning op beide planeten, garanderen wij dat je eigendomsrechten beschermd zijn onder zowel de internationale wetgeving van de Aarde als het opkomende Martiaanse Koloniale Handvest."
          imageUrl="/images/juridisch.jpg"
        />

        <Usps
          title="Infrastructuurontwikkeling"
          description="Waarom wachten tot je aankomt om te beginnen met bouwen? Onze robotische bouwploegen kunnen beginnen met het voorbereiden van je grond jaren voor je aankomst. Wij bieden funderingsleggen zodat je direct van het transport shuttle op je bewoonbare eigendom kunt stappen."
          imageUrl="/images/infrastructuur.jpg"
        />

        <Usps
          title="Flexibele Betaalplannen"
          description="Erkennend dat interplanetair vastgoed een significante investering is, bieden wij uitgebreide 50-jarige betaalplannen met opties om te betalen in Aarde valuta's, Mars Koloniale Credits, of belangrijke cryptocurrencies."
          imageUrl="/images/betaalplannen.jpg"
        />
      </section>

      <RecentNews />

      <div className="mt-8 w-full md:mt-26">
        <Footer />
      </div>
    </div>
  );
}