import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Index } from "./pages/Index";
import { Collections } from "./pages/Collections";
import { HomeButton } from "./components/HomeButton";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HomeButton />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/products" element={<Collections />} />
        <Route path="/gallery" element={<Collections />} />
      </Routes>
    </BrowserRouter>
  );
}
