import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './composants/footer/footer';
import Formulaire from './composants/formulaire/formulaire';
import Nav from './composants/NavBar/Nav';
import Accueil from './pages/accueil';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Accueil />}/>
      <Route exact path="/navbar" element={<Nav />}/>
      <Route path="/formulaire-utilisateur" element={<Formulaire props="Utilisateur" />}/>
      <Route path="/formulaire-prestataire" element={<Formulaire props="Prestataire"/>}/>
      </Routes>
      <Footer></Footer>
    </div>

  );
}

export default App;
