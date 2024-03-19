import './App.css';
import Navbar from './comps/Navbar';
import Sec1 from './comps/Sec1';
import Sec2 from './comps/Sec2';
import { Routes, Route } from 'react-router-dom';
import Sec3 from './comps/Sec3';
import Project from './comps/Project';
import Contact from './comps/Contact';
import Resume from './comps/Resume';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element={<Sec1/>}/>
          <Route path='/about' element={<Sec2/>}/>
          <Route path='/skills' element={<Sec3/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/resume' element={<Resume/>}/>
        </Routes>
    </div>
  );
}

export default App;
