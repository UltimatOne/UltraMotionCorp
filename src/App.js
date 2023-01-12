import { Route, Routes } from 'react-router-dom';
import './App.css';
import Accueil from './composants/pages/accueil/accueil';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Accueil />}/>
      </Routes>
    </div>
    
  );
}

export default App;
