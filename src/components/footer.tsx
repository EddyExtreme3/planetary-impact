import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-auto flex h-87.5 max-w-348 items-center justify-between bg-[#00B2CD] px-20 py-8 text-white">
      <div className="flex h-full flex-col justify-between">
        <div>
          <p className="font-bold">Contact:</p>
          <p>dr. Nova Sterling</p>
          <a
            href="mailto:n.sterling@hhs.nl"
            className="underline"
          >
            n.sterling@hhs.nl
          </a>
        </div>

        <Image
          src="/images/hhs logo.svg"
          alt="De Haagse Hogeschool logo"
          width={230}
          height={80}
        />
      </div>

      <div className="flex items-end gap-4 self-end">
  <a
    href="#"
    aria-label="LinkedIn"
    className="flex h-12 w-12 items-center justify-center rounded bg-white"
  >
    <Image
      src="/icons/LogoIN.svg"
      alt="LinkedIn"
      width={28}
      height={28}
    />
  </a>

  <a
    href="#"
    aria-label="Twitter"
    className="flex h-12 w-12 items-center justify-center rounded bg-white"
  >
    <Image
      src="/icons/LogoTwitter.svg"
      alt="Twitter"
      width={28}
      height={28}
    />
  </a>

  <a
    href="#"
    aria-label="Instagram"
    className="flex h-12 w-12 items-center justify-center rounded bg-white"
  >
    <Image
      src="/icons/LogoInsta.svg"
      alt="Instagram"
      width={28}
      height={28}
    />
  </a>
</div>
    </footer>
  );
}