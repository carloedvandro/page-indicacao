import heroMundoRede from "@/assets/hero-mundo-rede.png.asset.json";

/**
 * Fundo da seção Hero.
 *
 * Arte oficial: mapa-múndi em pontos com ondas de conexão luminosas sobre
 * degradê roxo/lilás claro, cidade ao fundo. Mantém os textos legíveis com
 * um leve véu claro à esquerda.
 */
export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Base lilás — garante o tom correto enquanto a arte carrega */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(120deg, #F3ECFC 0%, #E4D4F8 45%, #C9A9EF 100%)",
        }}
      />
      {/* Arte oficial — preenche toda a area do hero */}
      <div className="absolute inset-0 overflow-hidden">
        <img src={heroMundoRede.url} alt="" className="h-full w-full object-cover object-top" />
      </div>
      {/* Véu suave à esquerda para garantir leitura dos textos */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(243,236,252,0.72) 0%, rgba(243,236,252,0.35) 34%, rgba(243,236,252,0) 58%)",
        }}
      />
    </div>
  );
}
