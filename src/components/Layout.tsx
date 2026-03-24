import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, MapPin, Shield, Sun, Moon, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import treeStudiosLogo from "@/assets/tree-studios-logo.svg";

const navItems = [
{ label: "Home", path: "/" },
{ label: "Product", path: "/product" },
{ label: "Integrations", path: "/integrations" },
{ label: "Guides", path: "/guides" },
{ label: "FAQ", path: "/faq" },
{ label: "About", path: "/about" }];


const footerLinks = [
{ label: "Product", path: "/product" },
{ label: "Integrations", path: "/integrations" },
{ label: "Guides", path: "/guides" },
{ label: "FAQ", path: "/faq" },
{ label: "About", path: "/about" },
{ label: "Sign Up Free", path: "/signup" }];


const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.25, ease: "easeOut" as const }
};

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const cycleTheme = () => {
    if (theme === "system") setTheme("light");
    else if (theme === "light") setTheme("dark");
    else setTheme("system");
  };
  const Icon = theme === "system" ? Monitor : theme === "light" ? Sun : Moon;
  const label = theme === "system" ? "System" : theme === "light" ? "Light" : "Dark";

  return (
    <button
      onClick={cycleTheme}
      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
      aria-label={`Theme: ${label}. Click to change.`}
      title={`Theme: ${label}`}
    >
      <Icon className="h-3.5 w-3.5" />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
};

const Layout = ({ children }: {children: React.ReactNode;}) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isTransparent = false;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 safe-top">
        
        <div className="container mx-auto flex items-center justify-between py-3 md:py-4 px-4 md:px-6">
          {/* Logo — free floating left */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={treeStudiosLogo}
              alt="Tree Studios"
              className={`h-12 md:h-14 w-auto transition-all duration-500 group-hover:scale-105 ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            />
          </Link>

          {/* Nav pill — free floating right */}
          <nav className="hidden md:flex items-center gap-1 bg-background/70 backdrop-blur-md rounded-full px-2 py-1.5 border border-border/50 shadow-sm">
            {navItems.map((item) =>
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
              location.pathname === item.path ?
              "bg-primary text-primary-foreground" :
              "text-muted-foreground hover:text-foreground hover:bg-muted"}`
              }>
                {item.label}
              </Link>
            )}
            <Link
              to="/signup"
              className="px-5 py-2 rounded-full text-sm font-medium transition-all active:scale-95 bg-primary text-primary-foreground hover:opacity-90 ml-1">
              Login
            </Link>
          </nav>

          <button
            className="md:hidden p-2 -mr-2 active:scale-90 transition-transform text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen &&
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-background border-t border-border">
            
              <nav className="flex flex-col p-6 gap-4">
                {navItems.map((item) =>
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`text-base font-medium py-1 active:opacity-70 transition-opacity ${
                location.pathname === item.path ?
                "text-primary" :
                "text-muted-foreground"}`
                }>
                
                    {item.label}
                  </Link>
              )}
                <Link
                to="/signup"
                onClick={() => setMobileOpen(false)}
                className="bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-medium text-center mt-2 active:scale-95 transition-transform">
                
                  Sign Up Free
                </Link>
              </nav>
            </motion.div>
          }
        </AnimatePresence>
      </header>

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} {...pageTransition}>
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/80">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex-col items-center justify-center gap-4 sm:gap-8 mb-10 pb-8 border-b border-border flex sm:flex-row">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span>Designed & built in Sweden</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Shield className="h-3.5 w-3.5 text-primary" />
                <span>All infrastructure hosted in Europe</span>
              </div>
              <span className="text-xs text-muted-foreground">
                © 2026 Tree Studios
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://buymeacoffee.com/fredrikgoth"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FFDD00] hover:bg-[#FFDD00]/85 text-[#000000] font-semibold px-6 py-2.5 rounded-full text-sm transition-all active:scale-95 shadow-sm hover:shadow-md"
              >
                ☕ Buy me a coffee
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </footer>
    </div>);

};

export default Layout;