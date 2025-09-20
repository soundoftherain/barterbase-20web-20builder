import { Link, NavLink, useLocation } from "react-router-dom";
import { Shield, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <Shield className="size-6 text-primary" />
          </div>
          <span className="font-semibold tracking-tight">BarterBase DAO</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "text-sm hover:text-primary transition-colors",
                isActive && "text-primary",
              )
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/buy-tokens"
            className={({ isActive }) =>
              cn(
                "text-sm hover:text-primary transition-colors",
                isActive && "text-primary",
              )
            }
          >
            Buy Tokens
          </NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant={pathname === "/buy-tokens" ? "secondary" : "default"} size="sm" className="shadow-[0_0_40px_-12px_rgba(0,0,0,0.6)]">
            <Link to="/buy-tokens" className="inline-flex items-center">
              <Wallet className="mr-2 size-4" /> Phase One Sale
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
