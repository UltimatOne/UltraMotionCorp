import { Route, Routes } from 'react-router-dom';
import './App.css';
import Formulaire from './composants/formulaire/formulaire';
import Accueil from './composants/pages/accueil/accueil';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Accueil />}/>
      <Route path="/formulaire-utilisateur" element={<Formulaire props="Utilisateur" />}/>
      <Route path="/formulaire-prestataire" element={<Formulaire props="Prestataire"/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
