import "./App.css";
import Food from "./Food";
import Card from "./card";
import Gallery from "./gallery";
import Footer from "./footer";
import Navbar from "./navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Food />
      <Card />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
