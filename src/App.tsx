import "./App.css";
import Navbar from "./components/layout/navbar";
import About from "./section/about";
import Banner from "./section/banner";
import Service from "./section/service";

function App() {
  return (
    <div >
      <Navbar />
      <Banner />
      <About />
      <div className="py-16">
        <Service />
      </div>
    </div>
  );
}

export default App;
