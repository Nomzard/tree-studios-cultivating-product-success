import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, TreePine } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Product", path: "/produkt" },
  { label: "Pricing", path: "/priser" },
  { label: "Team", path: "/team" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link to="/" className="flex items-center gap-2 group">
            <TreePine className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
            <span className="font-serif text-xl text-foreground">Tree Studios</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </nav>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <nav className="flex flex-col p-6 gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`text-base font-medium ${
                      location.pathname === item.path
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium text-center mt-2"
                >
                  Get Started
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-3">
                <TreePine className="h-6 w-6 text-primary" />
                <span className="font-serif text-lg text-foreground">Tree Studios</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We help product organizations make the connection between strategy and real impact visible.
              </p>
            </div>
            <div className="flex gap-12">
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Pages</h4>
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Contact</h4>
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
