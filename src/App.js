import './App.css';
import Home from './components/Pages/home/Home';
import About from './components/Pages/about/About';
import Contact from './components/Pages/contact/Contact';
import Footer from './components/footer/Footer';
import Header from '../src/components/Pages/Header';
import NoPage from '../src/components/Pages/NoPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>

      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
