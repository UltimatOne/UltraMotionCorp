import { Route, Routes } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import Footer from './composants/footer/footer';
import Formulaire from './composants/formulaire/formulaire';
import Accueil from './pages/accueil';
=======
import Nav from './components/NavBar/Nav';
>>>>>>> feat/Navbar



function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Routes>
      <Route exact path="/" element={<Accueil />}/>
      <Route path="/formulaire-utilisateur" element={<Formulaire props="Utilisateur" />}/>
      <Route path="/formulaire-prestataire" element={<Formulaire props="Prestataire"/>}/>
      </Routes>
      <Footer></Footer>
=======
     {/* navbar */}
     <Nav/>


>>>>>>> feat/Navbar
    </div>

  );
}

export default App;
