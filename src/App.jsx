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
import Getintouch from "./components/Getintouch";
import Footer from "./components/Footer";
import Coffee from "./pages/coffeesection/Coffee";



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
      <Getintouch />
      <Footer/>
      {/* <Coffee /> */}
    </>
  );
}

export default App;
