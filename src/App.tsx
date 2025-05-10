
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { MainLayout } from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Generator from "./pages/Generator";
import Competitors from "./pages/Competitors";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="/competitors" element={<Competitors />} />
          {/* Placeholder routes for future implementation */}
          <Route path="/research" element={<Dashboard />} />
          <Route path="/products" element={<Dashboard />} />
          <Route path="/trends" element={<Dashboard />} />
          <Route path="/store" element={<Dashboard />} />
          <Route path="/settings" element={<Dashboard />} />
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
      <Toaster />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
