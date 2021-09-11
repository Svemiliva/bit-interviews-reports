
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main/Main';
import { Search } from './components/Search/Search';



function App() {
  

  return (
    <div className="App">
     <Header />
     <Search />
     <Main />
    </div>
  );
}

export default App;
