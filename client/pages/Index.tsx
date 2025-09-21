import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Radio, Coins, Landmark } from "lucide-react";
import PromoVideos from "@/components/marketing/PromoVideos";

export default function Index() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-[-10vh] h-[100vh] w-[160vh] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.55),rgba(16,185,129,0.18),transparent_70%)] blur-3xl" />
        <div className="absolute right-[-20vw] top-[10vh] h-[60vh] w-[60vh] rounded-full bg-[conic-gradient(from_180deg,rgba(16,185,129,0.4),transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-background/90" />
      </div>
      <section className="relative container min-h-[70vh] py-16 md:py-28 flex items-center">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <Radio className="size-3.5 text-primary" /> EMP-resilient connectivity for preppers
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
            BarterBase DAO
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-muted-foreground">
            A decentralized marketplace for buying, selling, and bartering: seeds, food-prep supplies, EMP device protection, and satellite comms. We connect local merchants to local buyers—and a global DAO for education and funding. Tokenize land and knowledge NFTs. Stay connected. Stay sovereign.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="px-8">
              <Link to="/buy-tokens">Buy Tokens – Phase One</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 bg-transparent">
              <a href="#features">Learn more</a>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 opacity-70">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>
      </section>

      <section id="features" className="container pb-8 md:pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-card/70 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Shield className="size-5 text-primary" />
                <h3 className="text-lg font-semibold">EMP Protection</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Harden devices and comms from EMP events and solar flares; keep your signals online.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/70 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Coins className="size-5 text-primary" />
                <h3 className="text-lg font-semibold">Prepper Marketplace</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Seeds, food-prep, gear—buy, sell, and barter with crypto and local-first delivery.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/70 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Landmark className="size-5 text-primary" />
                <h3 className="text-lg font-semibold">Tokenized Land</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Own fractions of off-grid land as NFTs, funding shelters and resilient hubs.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Local-first. Globally connected.</h2>
            <p className="mt-3 text-muted-foreground">
              Local merchants sell to their neighbors for fast delivery and strong communities—while tapping a global DAO for guidance and fundraising infrastructure.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Seeds & food preparation</li>
              <li>EMP device shielding</li>
              <li>Satellite phones & off-grid internet</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Button asChild>
                <Link to="/buy-tokens">Get BART</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/20">
                <a href="#videos">Watch videos</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-primary/10 blur-2xl" />
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                  <p className="text-2xl font-bold">Crypto</p>
                  <p className="mt-1 text-muted-foreground">Payments</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                  <p className="text-2xl font-bold">Barter</p>
                  <p className="mt-1 text-muted-foreground">P2P</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                  <p className="text-2xl font-bold">Land</p>
                  <p className="mt-1 text-muted-foreground">NFTs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PromoVideos />
    </div>
  );
}
