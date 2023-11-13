import './App.css';
import DesertItem from './components/desertItem';
import UncontrolledForm from './components/forms/uncontrolledForm';
import ControlledForm from './components/forms/controlledForm';
import LemonForm from './components/forms/lemonForm'

function App() {
  return (
    <div className='main-body'>
      <h1>Hola</h1>
      <DesertItem/>
      <UncontrolledForm/>
      <ControlledForm/>
      <LemonForm/>
    </div>
  );
}

export default App;
