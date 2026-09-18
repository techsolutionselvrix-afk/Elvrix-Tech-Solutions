import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetail';
import { applyIndiaTheme, msUntilNextIndiaThemeSwitch } from './theme/indiaTheme';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    applyIndiaTheme();
    let timeoutId;

    const schedule = () => {
      timeoutId = window.setTimeout(() => {
        applyIndiaTheme();
        schedule();
      }, msUntilNextIndiaThemeSwitch());
    };

    schedule();

    const onVisibility = () => {
      if (document.visibilityState === 'visible') applyIndiaTheme();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      window.clearTimeout(timeoutId);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <Router basename="/Elvrix-Tech-Solutions">
      <div className="page-container">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path='/blog/:id' element={<BlogDetails/>}/>
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
