import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
