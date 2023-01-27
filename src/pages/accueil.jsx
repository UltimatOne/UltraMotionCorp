import BarreDeRecherche from '../composants/barreDeRecherche/BarreDeRecherche';
import Comment from '../composants/HomePage/Comment/comment';
import Trouvez from '../composants/HomePage/Trouvez/trouvez';
import Nav from '../composants/NavBar/Nav';
import './accueil.css';

function Accueil(){
    return (
     <div className="LandingPage">
        <Nav/>
        <BarreDeRecherche placeholder={'Rechercher'}/>
        <Comment/>
        <Trouvez/>
     </div>
 )};
 export default Accueil;