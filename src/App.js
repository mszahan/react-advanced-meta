import './App.css';
import { Routes, Route } from 'react-router-dom';
import FormPage from './components/forms/FormPage'
import ContextBlog from './components/contextApi/contextBlog';
import HookPage from './components/hooks/HookPage';
import Nav from './components/Nav';
import HomePage from './components/HomePage';


function App() {
  return (
    <div className='main-body'>

      <Nav/>

      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/forms' element={<FormPage/>} />
        <Route path='/blog' element={<ContextBlog/>} />
        <Route path='/hooks' element={<HookPage/>} />
      </Routes>
      


      
    </div>
  );
}

export default App;
