import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, MapPin, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import treeStudiosLogo from "@/assets/tree-studios-logo.svg";

const navItems = [
  { label: "Product", path: "/product" },
  { label: "Integrations", path: "/integrations" },
  { label: "Pricing", path: "/pricing" },
  { label: "Guides", path: "/guides" },
  { label: "FAQ", path: "/faq" },
  { label: "About", path: "/about" },
];

const footerLinks = [
  { label: "Product", path: "/product" },
  { label: "Integrations", path: "/integrations" },
  { label: "Pricing", path: "/pricing" },
  { label: "Guides", path: "/guides" },
  { label: "FAQ", path: "/faq" },
  { label: "About", path: "/about" },
  { label: "Sign Up Free", path: "/signup" },
];

const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.25, ease: "easeOut" as const },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = location.pathname === "/";
  const isTransparent = isHome && !scrolled && !mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 safe-top ${
          isTransparent
            ? "bg-transparent"
            : "bg-background/80 backdrop-blur-md border-b border-border"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-3 md:py-4 px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={treeStudiosLogo}
              alt="Tree Studios"
              className={`h-8 md:h-9 w-auto transition-all group-hover:scale-105 ${
                isTransparent ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isTransparent
                    ? location.pathname === item.path
                      ? "text-sand"
                      : "text-primary-foreground/70 hover:text-primary-foreground"
                    : location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/demo"
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all active:scale-95 ${
                isTransparent
                  ? "bg-sand text-forest hover:opacity-90"
                  : "bg-primary text-primary-foreground hover:opacity-90"
              }`}
            >
              Book a Demo
            </Link>
          </nav>

          <button
            className={`md:hidden p-2 -mr-2 active:scale-90 transition-transform ${
              isTransparent ? "text-primary-foreground" : "text-foreground"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden overflow-hidden bg-background border-t border-border"
            >
              <nav className="flex flex-col p-6 gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`text-base font-medium py-1 active:opacity-70 transition-opacity ${
                      location.pathname === item.path
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/demo"
                  onClick={() => setMobileOpen(false)}
                  className="bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-medium text-center mt-2 active:scale-95 transition-transform"
                >
                  Book a Demo
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} {...pageTransition}>
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 md:px-6 py-10 md:py-12">
          {/* Sweden / Europe trust badge */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 pb-8 border-b border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
              <span>Designed & built in Sweden</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-primary flex-shrink-0" />
              <span>All infrastructure hosted in Europe</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-3">
                <img src={treeStudiosLogo} alt="Tree Studios" className="h-7 w-auto" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We help product organizations make the connection between
                strategy and real impact visible — for everyone.
              </p>
            </div>
            <div className="flex gap-12">
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Pages
                </h4>
                <nav className="flex flex-col gap-2" aria-label="Footer navigation">
                  {footerLinks.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Contact
                </h4>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <span>hello@treestudios.se</span>
                  <span>Stockholm, Sweden</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
            © 2026 Tree Studios. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
