import './App.css';
import Home from './components/Pages/home/Home';
import About from './components/Pages/about/About';
import Registration from './components/Pages/registration/Registration';
import Footer from './components/footer/Footer';
import Header from '../src/components/Pages/Header';
import NoPage from '../src/components/Pages/NoPage';
import Test from './components/Pages/test/Test';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>

      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="registration" element={<Registration />} />
          <Route path="*" element={<NoPage />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
