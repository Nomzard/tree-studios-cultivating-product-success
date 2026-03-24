import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import PricingPage from "./pages/PricingPage";
import TeamPage from "./pages/TeamPage";
import FAQPage from "./pages/FAQPage";
import GuidesPage from "./pages/GuidesPage";
import GuidePage from "./pages/GuidePage";
import SignupPage from "./pages/SignupPage";
import IntegrationsPage from "./pages/IntegrationsPage";
import IntegrationPage from "./pages/IntegrationPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/about" element={<TeamPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/guides" element={<GuidesPage />} />
                <Route path="/guides/:slug" element={<GuidePage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/demo" element={<Navigate to="/signup" replace />} />
                <Route path="/integrations" element={<IntegrationsPage />} />
                <Route path="/integrations/:slug" element={<IntegrationPage />} />
                {/* Redirects from old Swedish URLs */}
                <Route path="/produkt" element={<Navigate to="/product" replace />} />
                <Route path="/priser" element={<Navigate to="/pricing" replace />} />
                <Route path="/team" element={<Navigate to="/about" replace />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);
export default App;
