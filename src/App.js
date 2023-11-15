import Navigation from "./components/Navigation/Navigation";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
