import './App.css';
import DesertItem from './components/desertItem';
import UncontrolledForm from './components/forms/uncontrolledForm';
import ControlledForm from './components/forms/controlledForm';
import LemonForm from './components/forms/lemonForm'
import ContextBlog from './components/contextApi/contextBlog';

function App() {
  return (
    <div className='main-body'>
      <h1>Hola</h1>
      <DesertItem/>
      <UncontrolledForm/>
      <ControlledForm/>
      <LemonForm/>
      <ContextBlog/>
    </div>
  );
}

export default App;
