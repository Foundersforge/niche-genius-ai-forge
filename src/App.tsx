
/**
 * App.tsx
 * 
 * This is the main application component that sets up:
 * 1. The React Query client for data fetching
 * 2. Routing for the different pages
 * 3. Main layout structure
 * 4. Toast notifications
 */

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { MainLayout } from "./components/layout/MainLayout";

// Import page components
import Dashboard from "./pages/Dashboard";
import Generator from "./pages/Generator";
import Competitors from "./pages/Competitors";
import NotFound from "./pages/NotFound";

// Create a new Query Client for data fetching management
const queryClient = new QueryClient();

const App = () => (
  // Setup Query Client Provider for the entire app
  <QueryClientProvider client={queryClient}>
    {/* Setup routing with browser router */}
    <BrowserRouter>
      {/* Apply the main layout to all routes */}
      <MainLayout>
        <Routes>
          {/* Define all application routes */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="/competitors" element={<Competitors />} />
          {/* Placeholder routes - these currently all point to Dashboard */}
          <Route path="/research" element={<Dashboard />} />
          <Route path="/products" element={<Dashboard />} />
          <Route path="/trends" element={<Dashboard />} />
          <Route path="/store" element={<Dashboard />} />
          <Route path="/settings" element={<Dashboard />} />
          {/* Catch-all route for 404 errors */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
      {/* Global toast notifications */}
      <Toaster />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
