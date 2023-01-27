import "./service_detail.css"
import img1 from "../../medias/images/1.jpg"

export default function ServiceDetail(){
    
    const prestataire = {}
    
    return (
            <div className="service_detail">
                <div className="container-top">
                <img src={img1} alt="" />
                <div className="descriptif_prestataire">
                        <img src="" alt="" />
                        <p>Nom prestataire</p>
                        <p>Descriptif du prestataire:</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempore expedita quo neque quia eum enim aspernatur odio, ullam magni repellat assumenda aperiam soluta dolore nisi nemo qui modi recusandae!</p>
                        <button> AJOUTER AU PANIER</button>
                </div>
                </div>
                <div className="descriptif_service">
                    <h2>Exemple de titre prestation</h2>
                    <p>Descriptif du service:</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quos eveniet nobis ad, aut voluptas blanditiis adipisci, eligendi cum eius impedit exercitationem. Modi veniam sunt quidem facilis totam nihil. Praesentium.</p>
                </div>
            </div>
        )
}