import { Route, Routes } from 'react-router-dom';
import './App.css';
import Accueil from './composants/pages/accueil/accueil';
import SearchBar from './composants/searchBar/searchBar';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Accueil />}/>
      </Routes>
      <SearchBar/>
    </div>
    
  );
}

export default App;
