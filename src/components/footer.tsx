import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-auto flex h-38.25 w-full items-center justify-between bg-[#00B2CD] px-4 py-4 text-white md:h-87.5 md:w-full md:max-w-348 md:px-20 md:py-8">
      <div className="flex h-full flex-col justify-between">
        <div className="font-space text-[12px] leading-4 md:text-[20px] md:leading-7">
          <p className="font-bold">Contact:</p>
          <p>dr. Nova Sterling</p>
          <a href="mailto:n.sterling@hhs.nl" className="underline">
            n.sterling@hhs.nl
          </a>
        </div>

        <Image
          src="/images/hhs logo.svg"
          alt="De Haagse Hogeschool logo"
          width={230}
          height={80}
          className="w-40 md:w-57.5"
        />
      </div>

      <div className="flex items-end gap-2 self-end md:gap-4">
        <a href="#" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded bg-white md:h-12 md:w-12">
          <Image src="/icons/LogoIN.svg" alt="LinkedIn" width={20} height={20} className="h-5 w-5 md:h-7 md:w-7" />
        </a>

        <a href="#" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded bg-white md:h-12 md:w-12">
          <Image src="/icons/LogoInsta.svg" alt="Instagram" width={20} height={20} className="h-5 w-5 md:h-7 md:w-7" />
        </a>

        <a href="#" aria-label="Twitter" className="flex h-8 w-8 items-center justify-center rounded bg-white md:h-12 md:w-12">
          <Image src="/icons/LogoTwitter.svg" alt="Twitter" width={20} height={20} className="h-5 w-5 md:h-7 md:w-7" />
        </a>
      </div>
    </footer>
  );
}