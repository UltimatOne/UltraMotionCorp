import React, {useState} from 'react'
import './searchBar.css';



const SearchBar = () => {

 const [searchInput, setSearchInput] = useState("");

 // Je crée une base fictive pour test
 const prestation= [

  { entreprise: "JobiJoba", ville: "Valenciennes" },
  { entreprise: "Comique", ville: "Lille" },
  { entreprise: "Bricoleux", ville: "Douai" },
  { entreprise: "plombier", ville: "Lille" },

];

const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

if (searchInput.length > 0) {
    prestation.filter((ville) => {
    return ville.entreprise.match(searchInput);
});
}

return <div className='card'>
    <h1>ULTRA MOTION CORP</h1>
    <h2>Trouvez votre Prestataire de services</h2>

<input
   type="search"
   placeholder="Rechercher"
   onChange={handleChange}
   value={searchInput} />



{prestation.map((ville, index) => {

<div>
  <tr>
    <td>{ville.entreprise}</td>
    <td>{ville.entreprise}</td>
  </tr>
</div>

})}


</div>

};

export default SearchBar;

