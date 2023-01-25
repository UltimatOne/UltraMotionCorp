import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './composants/footer/footer';
import FormulaireClient from './composants/formulaires/formulaireClient';
import FormulaireEntreprise from './composants/formulaires/formulaireEntreprise';
import Accueil from './pages/accueil';
import SignUpHome from './pages/signup/signupHome';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Accueil />}/>
      <Route path='/home-signup' element={<SignUpHome/>} />
      <Route path="/formulaire-client" element={<FormulaireClient props="Utilisateur" />}/>
      <Route path="/formulaire-entreprise" element={<FormulaireEntreprise props="Prestataire"/>}/>
      </Routes>
      <Footer></Footer>
    </div>

  );
}

export default App;
