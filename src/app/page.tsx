import Usps from "@/components/usps";
import Footer from "@/components/footer";
import RecentNews from "@/components/recentnews";
import Logo from "@/components/Logo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <header className="w-full max-w-348 pt-4">
        <Logo />
      </header>

      <div className="mt-16 w-full max-w-348">
        <Image
          src="/images/hero.jpg"
          alt="Hero Image"
          width={1392}
          height={464}
          priority
          className="h-116 w-full object-cover"
        />
      </div>

      <section className="my-12 max-w-200 px-6 text-center text-header-color">
        <h2 className="text-5xl font-extrabold">
          &ldquo;Maak werk van Mars&rdquo;
        </h2>

        <h3 className="mt-3 text-xl">
          Mars is de toekomst. Planetary Impact helpt u met het zoeken naar een
          geschikte plek voor uw kolonie.
        </h3>
      </section>

      <section className="mx-auto grid w-full max-w-348 grid-cols-1 gap-6 px-6 py-10 md:grid-cols-2 md:px-20">
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
      <Footer />
    </div>
  );
}