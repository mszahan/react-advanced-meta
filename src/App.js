import './App.css';
import { Routes, Route } from 'react-router-dom';
import FormPage from './components/forms/FormPage'
import DesertItem from './components/desertItem';
import ContextBlog from './components/contextApi/contextBlog';
import Nav from './components/Nav';


function App() {
  return (
    <div className='main-body'>

      <Nav/>
      
      <Routes>
        <Route path='/' element={<DesertItem/>} />
        <Route path='/forms' element={<FormPage/>} />
        <Route path='/blog' element={<ContextBlog/>} />
      </Routes>
      


      
    </div>
  );
}

export default App;
