import './App.css';
import Cards from './Components/Cards';
import CardsHeader from './Components/CardsHeader';
import NavBar from './Components/NavBar';
import SearchHeader from './Components/SearchHeader';

function App() {
  return (
    <div className="App">
     <NavBar />
     <SearchHeader />
     <CardsHeader />
    </div>
  );
}

export default App;
