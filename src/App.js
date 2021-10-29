
import './App.css';
import NavBar from './components/navbar/navbar'
import ItemListContainer from './components/itemListContainer/itemListContainer'

function App() {
  return (
    <div className="App"> 
      <NavBar/>
      <ItemListContainer action="!"/>
    </div>
    
  );
}

export default App;
