import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './composants/footer/footer';
import FormulaireClient from './composants/formulaires/formulaireClient';
import FormulaireEntreprise from './composants/formulaires/formulaireEntreprise';
import Accueil from './pages/accueil';
import ServiceDetail from './pages/service_detail/service_detail';
import serviceDetail from './pages/service_detail/service_detail';
import SignUpHome from './pages/signup/signupHome';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Accueil />}/>
      <Route path='/home-signup' element={<SignUpHome/>} />
      <Route path="/formulaire-client" element={<FormulaireClient props="Utilisateur" />}/>
      <Route path="/formulaire-entreprise" element={<FormulaireEntreprise props="Prestataire"/>}/>
      <Route path="/service-detail" element={<ServiceDetail/>} />
      </Routes>
      <Footer></Footer>
    </div>

  );
}

export default App;
