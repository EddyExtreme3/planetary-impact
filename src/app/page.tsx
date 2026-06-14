import Usps from "@/components/usps";
import Footer from "@/components/footer";
import RecentNews from "@/components/recentnews";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
     <div className="self-start px-6 pt-4">
      <h1 className="text-planetary-blue text-4xl font-Nunito Sans leading-[0.8] tracking-tight font-bold">Planetary Impact</h1>
        <p className="text-planetary-blue text-4xl font-Nunito Sans leading-[0.8] tracking-tight font-regular"> HUB </p>
    </div>
      <div>
        <Image src="/images/hero.jpg" alt="Hero Image" width={1392} height={464} />
      </div>
      <div>
        <h2 className="text-header-color font-extrabold" >&ldquo;Maak werk van Mars&rdquo;</h2>
        <h3 className="text-header-color" >Mars is de toekomst. Planetary Impact helpt u met het zoeken naar een geschikte plek voor uw kolonie.</h3>
      </div>
      <div>
        <Usps
          title="Pioneer Nederzettingsplanning"
          description="Wij verkopen je niet alleen grond - we helpen je bij het plannen van je complete Martiaanse boerderij. Onze gecertificeerde exogeologen en atmosferische ingenieurs bieden uitgebreide locatieanalyse, inclusief bodemsamenstelling rapporten."
          imageUrl="/images/nederzettingsplanning.jpg"
        />
        <Usps
          title="Juridische eigendomsverzekering"
          description="ls het enige Mars vastgoedkantoor met juridische erkenning op beide planeten, garanderen wij dat je eigendomsrechten beschermd zijn onder zowel de internationale wetgeving van de Aarde als het opkomende Martiaanse Koloniale Handvest."
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
      </div>
      <RecentNews />
      <Footer />
    </div>
  );
}
