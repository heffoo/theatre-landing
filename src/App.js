import "./App.scss";
import { Header } from "./components/header/header";
import { MainBlock } from "./components/mainBlock/mainBlock";
import { AboutBlock } from "./components/AboutBlock/AboutBlock";
import { OurProjects } from "./components/OurProjects/OurProjects";
import { Partners } from "./components/partners/partners";
import { BeAPartner } from "./components/beAPartner/beAPartner";
import { Footer } from "./components/Footer/footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Aside } from "./components/aside/aside";
  AOS.init();
function App() {

  return (
    <div className="main-container">
      <div className="main-content">
        <Header key={123}/>
        <Aside />
        <div className="sizing">
          <MainBlock />
        </div>
      </div>
      <AboutBlock />
      <div className="hide992"><OurProjects /></div>
      
      <div className="info-sizing">
        <Partners />
        <BeAPartner />
        <Footer />
      </div>
    </div>
  );
}

export default App;
