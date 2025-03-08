import "./App.css";
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";
import About from "./section/about";
import Banner from "./section/banner";
import Brand from "./section/brand";
import Service from "./section/service";
import Work from "./section/work";

function App() {
  return (
    <div >
      <Navbar />
      <Banner />
      <About />
      <div className="pt-16">
        <Service />
      </div>
      <Work />
      <Brand />
      <Footer />
    </div>
  );
}

export default App;
