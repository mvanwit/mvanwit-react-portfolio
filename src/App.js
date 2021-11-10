import './fonts.css';
import './App.css';
import Nav from './Nav.js';
import Header from './Header.js';
import About from './About.js';
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
