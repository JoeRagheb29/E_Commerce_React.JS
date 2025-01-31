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
    <BrowserRouter basename="/E_Commerce_React.JS">
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <><Slider />
          <ProductList /></>
        } />
        <Route path="/About" element={<About />} />
        <Route path="/ProductDetails/:ProductId" element={<ProductDetails />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
} 

export default App;
