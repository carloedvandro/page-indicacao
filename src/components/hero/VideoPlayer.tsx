import { smartvoz, youtubeId } from "@/lib/smartvoz";
import { VideoThumbnail } from "./VideoThumbnail";

/**
 * Player do vídeo institucional.
 *
 * Inicialmente exibe apenas a thumbnail personalizada + botão Play. O iframe
 * do YouTube só é carregado APÓS o clique do usuário — nunca no carregamento
 * da página.
 *
 * O estado `tocando` é controlado pelo pai (VideoHeroSection) para que o
 * botão "ASSISTA AO VÍDEO" da coluna esquerda também possa disparar a reprodução.
 */
export function VideoPlayer({ tocando, onPlay }: { tocando: boolean; onPlay: () => void }) {
  const id = youtubeId(smartvoz.youtubeVideo);

  return (
    <div
      id="video"
      className="relative aspect-video w-full overflow-hidden rounded-[1.25rem] shadow-[0_24px_60px_-24px_rgba(8,3,16,0.7)] sm:rounded-[1.5rem]"
      style={{ backgroundColor: "#0D0717" }}
    >
      {tocando && id ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1&modestbranding=1&showinfo=0&iv_load_policy=3&cc_load_policy=0&hl=pt-BR&cc_lang_pref=pt-BR&color=white&fs=1`}
          title="Assista ao vídeo SmartVoz"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <VideoThumbnail onPlay={onPlay} />
      )}
    </div>
  );
}
