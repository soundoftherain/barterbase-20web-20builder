import { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Coins, Shield, Wallet } from "lucide-react";

const TOKENS_PER_ETH = 10000; // BART per 1 ETH

export default function BuyTokens() {
  const [currency, setCurrency] = useState("ETH");
  const [ethAmount, setEthAmount] = useState(0.1);

  const tokens = useMemo(
    () => (ethAmount > 0 ? ethAmount * TOKENS_PER_ETH : 0),
    [ethAmount],
  );

  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(64,255,151,0.10),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(64,255,151,0.06),transparent_50%)]" />
      <div className="container py-16">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Phase One Token Sale
          </h1>
          <p className="mt-4 text-muted-foreground">
            Acquire BART (BarterBase DAO) tokens. Designed to power a
            prepper-first marketplace, land tokenization, and EMP-resilient
            infrastructure.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Ticker: BART · Total Supply: 50,000,000 BART
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card className="bg-card/70 backdrop-blur">
            <CardHeader>
              <CardTitle>Purchase</CardTitle>
              <CardDescription>
                Price: 1 ETH = {TOKENS_PER_ETH.toLocaleString("en-US")} BART
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="grid gap-2">
                <Label htmlFor="amount">Amount (ETH)</Label>
                <Input
                  id="amount"
                  type="number"
                  min={0}
                  value={ethAmount}
                  onChange={(e) =>
                    setEthAmount(parseFloat(e.target.value || "0"))
                  }
                />
              </div>
              <div className="grid gap-1 text-sm">
                <Label>Pay with</Label>
                <div className="rounded-md border bg-black/20 px-3 py-2 text-muted-foreground">
                  ETH (Phase One fixed)
                </div>
              </div>
              <div className="rounded-md border p-3 text-sm text-muted-foreground">
                Estimated BART:{" "}
                <span className="font-semibold text-foreground">
                  {tokens.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                </span>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">
                    <Wallet className="mr-2 size-4" /> Continue
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Complete Purchase</DialogTitle>
                    <DialogDescription>
                      You selected {currency} payment. We will guide you to
                      connect a wallet and sign a purchase agreement. No
                      custodial services.
                    </DialogDescription>
                  </DialogHeader>
                  <ol className="list-decimal space-y-2 pl-5 text-sm">
                    <li>Connect a supported wallet (e.g., MetaMask).</li>
                    <li>Confirm payment of {ethAmount} ETH.</li>
                    <li>Receive BART to your wallet after confirmation.</li>
                  </ol>
                  <div className="mt-4 text-xs text-muted-foreground">
                    Subject to jurisdictional restrictions. This UI does not
                    execute transactions—integrate your preferred on-chain sale
                    contract or provider.
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          <Card className="bg-card/70 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="size-5 text-primary" /> Why BART?
              </CardTitle>
              <CardDescription>
                Utility-first, prepper-focused network
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Coins className="mt-0.5 size-4 text-primary" />
                <p>
                  Backs a decentralized marketplace for buying, selling, and
                  bartering supplies with crypto.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="mt-0.5 size-4 text-primary" />
                <p>
                  Supports EMP-resilient communication gear and connectivity for
                  the community.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="mt-0.5 size-4 text-primary" />
                <p>
                  Enables tokenization of physical land as NFTs with governance
                  controls.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
