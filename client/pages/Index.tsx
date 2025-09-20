import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Radio, Coins, Landmark } from "lucide-react";

export default function Index() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(64,255,151,0.10),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(64,255,151,0.06),transparent_50%)]" />
      <section className="container py-16 md:py-28">
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
                Hardware and protocols to harden communications and keep the network online when the grid fails.
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
                Buy, sell, and barter supplies with crypto payments and peer-to-peer settlement.
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
                Fractionalize physical land as NFTs to fund community shelters and comms hubs.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Built for the Prepper + Crypto community</h2>
            <p className="mt-3 text-muted-foreground">
              We accept crypto for everything—gear, services, and governance. Your holdings empower a marketplace that stays online when it matters most.
            </p>
            <div className="mt-6 flex gap-3">
              <Button asChild>
                <Link to="/buy-tokens">Get BBD</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/20">
                <a href="#features">Explore features</a>
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
    </div>
  );
}
