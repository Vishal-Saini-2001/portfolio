import './App.css';
import Navbar from './comps/Navbar';
import Sec1 from './comps/Sec1';
import Sec2 from './comps/Sec2';
import Sec3 from './comps/Sec3';
import Project from './comps/Project';
import Contact from './comps/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Sec1/>
        <Sec2/>
        <Sec3/>
        <Project/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
