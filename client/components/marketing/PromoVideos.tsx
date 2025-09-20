import { promoVideos } from "@/content/videos";
import { Card, CardContent } from "@/components/ui/card";

export default function PromoVideos() {
  return (
    <section id="videos" className="container py-16 md:py-24">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Investor & DAO Videos</h2>
        <p className="mt-3 text-muted-foreground">Promotional updates, community calls, and investor briefings.</p>
      </div>
      {promoVideos.length === 0 ? (
        <Card className="bg-card/70 backdrop-blur">
          <CardContent className="p-6 text-center text-sm text-muted-foreground">
            No videos yet. Provide YouTube/Vimeo/IPFS URLs and I’ll add them.
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {promoVideos.map((v) => (
            <div key={v.id} className="group overflow-hidden rounded-xl border border-white/10 bg-black/30">
              <div className="aspect-video w-full overflow-hidden">
                <iframe
                  className="h-full w-full"
                  src={v.url}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="p-3 text-sm opacity-90">{v.title}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
