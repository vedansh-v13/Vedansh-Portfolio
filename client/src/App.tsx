import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { HelmetProvider } from "react-helmet-async";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import OmnycommCaseStudy from "./pages/OmnycommCaseStudy";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects/omnycomm-ecommerce" component={OmnycommCaseStudy} />
      <Route path="/projects/:id" component={ProjectDetails} />
      <Route path="/case-studies/omnycomm" component={OmnycommCaseStudy} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
      </QueryClientProvider>
    </HelmetProvider>
  );
}
