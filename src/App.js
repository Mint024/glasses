import './App.css';
import Navbar from './navbar';
import Selectors from './homepage/selectors';
import About from './homepage/about.js'
import Suggestions from './homepage/suggestions.js'
import Footer from './homepage/footer.js'

function App() {

  return (
    <>
      <Navbar />
      <Selectors />
      <Suggestions />
      <About />
      <Footer />
    </>
  );
}

export default App;
