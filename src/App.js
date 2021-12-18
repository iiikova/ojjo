import "./App.scss";
import Header from "./Components/Header/Header";
import OurSalon from "./Components/OurSalon/OurSalon";
import SecondScreen from "./Components/SecondScreen/SecondScreen";
import Blog from "./Components/Blog/Blog";
import Gallery from "./Components/Gallery/Gallery";
import Subscribe from "./Components/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <SecondScreen />
      <OurSalon />
      <Blog />
      <Gallery />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
