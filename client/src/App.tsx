import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { HelmetProvider } from "react-helmet-async";
import SmoothScroll from "@/components/SmoothScroll";
import Home from "@/pages/Home";

// Lazy load non-homepage routes for optimal initial bundle size and FCP/LCP
const NotFound = lazy(() => import("@/pages/not-found"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const OmnycommCaseStudy = lazy(() => import("./pages/OmnycommCaseStudy"));
const TataCapitalWealthCaseStudy = lazy(() => import("./pages/TataCapitalWealthCaseStudy"));
const MeeroLinkCaseStudy = lazy(() => import("./pages/MeeroLinkCaseStudy"));
const VerizonUCaaSCaseStudy = lazy(() => import("./pages/VerizonUCaaSCaseStudy"));

function PageLoadingFallback() {
  return (
    <div className="min-h-screen bg-[#181719] flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-blush/20 border-t-blush rounded-full animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoadingFallback />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects/omnycomm-ecommerce" component={OmnycommCaseStudy} />
        <Route path="/projects/tata-capital-wealth" component={TataCapitalWealthCaseStudy} />
        <Route path="/projects/meerolink" component={MeeroLinkCaseStudy} />
        <Route path="/projects/verizon-ucaas" component={VerizonUCaaSCaseStudy} />
        <Route path="/projects/verizon-uccaas" component={VerizonUCaaSCaseStudy} />
        <Route path="/projects/:id" component={ProjectDetails} />
        <Route path="/case-studies/omnycomm" component={OmnycommCaseStudy} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <SmoothScroll>
          <Router />
          <Toaster />
        </SmoothScroll>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
