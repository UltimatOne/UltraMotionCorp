import BarreDeRecherche from '../composants/barreDeRecherche/BarreDeRecherche';
import Nav from '../composants/NavBar/Nav';
import './accueil.css';

function Accueil(){
    return (
     <div className="LandingPage">
        <Nav/>
        <BarreDeRecherche placeholder={'Rechercher'}/>
     </div>
 )};
 export default Accueil;