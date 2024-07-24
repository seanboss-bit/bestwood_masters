import About from "./components/About";
import CEO from "./components/CEO";
import Contact from "./components/Contact";
import History from "./components/History";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import Story from "./components/Story";

function App() {
  return (
    <>
      <Navbar />
      <Showcase />
      <Story />
      <Map />
      <About />
      <CEO />
      <History />
      <Contact />
    </>
  );
}

export default App;
