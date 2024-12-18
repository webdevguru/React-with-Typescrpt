import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Home />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
