import Button from '../../button/button';
import './accueil.css';


function Accueil(){
    return (
     <div>
         <p>projet UMC</p>
         <Button onClick={console.log('blabla lol')} props="voir panier"/>
     </div>
 )};
 export default Accueil;