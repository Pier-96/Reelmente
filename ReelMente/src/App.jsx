import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneratorView from "./views/GeneratorView";
import SlidesView from "./views/SlidesView";
import AllSlidesView from "./views/AllSlidesView";
import TestView from "./views/TestView";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GeneratorView />} />
        <Route path="/slides" element={<SlidesView />} />
        <Route path="/slides/grid" element={<AllSlidesView />} />
        <Route path="/test" element={<TestView />} />
      </Routes>
    </BrowserRouter>
  );
}
