import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router";
import Navbar from "./components/Navbar.js";
import Slider from "./components/Slider.js";
import About from "./components/About.js";
import ProductList from "./components/ProductList.js";
import ProductDetails from "./components/ProductDetails.js";

function App() {
  // new page == new route (بأختصار كده)
  return (
    <div className="App bg-light">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <><Slider />
          <ProductList /></>
        } />
        <Route path="/About" element={<About />} />
        <Route path="/ProductDetails/:APInum/:ProductId" element={<ProductDetails />}/>
      </Routes>
    </div>
  );
} 

export default App;
