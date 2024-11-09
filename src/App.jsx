import "./App.css";
import './responsivecustoma.css'
import "./output.css";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { Corousel } from "./components/corousel";
import Branding from "./components/Branding";
import Recommded from "./components/Recommded";


function App() {
  return (
    <>
    <div>
      <Navbar />
    </div>
      <Main/>
      <Corousel />
      <Branding/>
      <Recommded/>
    </>
  );
}

export default App;
