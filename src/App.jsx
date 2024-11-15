import "./App.css";
import './responsivecustoma.css'
import "./output.css";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CoffeePage from "./pages/coffeesection/CoffeePage";
import MerchPage from "./pages/merchsection/MerchPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coffee" element={<CoffeePage />} />
      <Route path="/merch" element={<MerchPage />} />
    </Routes>

    </>
    
  );
}

export default App;
