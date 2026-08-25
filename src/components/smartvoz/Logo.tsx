import logoOficial from "@/assets/smartvoz-logo.png.asset.json";

type LogoProps = {
  className?: string;
};

/** Marca oficial SMARTVOZ. */
export function Logo({ className = "" }: LogoProps) {
  return (
    <img
      src={logoOficial.url}
      alt="SmartVoz"
      className={`h-9 w-auto shrink-0 select-none object-contain sm:h-11 ${className}`}
    />
  );
}
