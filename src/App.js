import logo from './logo.svg';
import './App.css';
import Home from './components/Pages/home/Home';
import About from './components/Pages/about/About';
import Header from './components/header/Header';
import Contact from './components/Pages/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
