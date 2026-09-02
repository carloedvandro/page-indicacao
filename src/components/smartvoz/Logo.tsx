import logoOficial from "@/assets/smartvoz-logo-oficial.png.asset.json";

type LogoProps = {
  className?: string;
};

/** Marca oficial SMARTVOZ. */
export function Logo({ className = "" }: LogoProps) {
  return (
    <img
      src={logoOficial.url}
      alt="SmartVoz"
      className={`h-11 w-auto shrink-0 select-none object-contain sm:h-12 lg:h-11 ${className}`}
    />
  );
}
