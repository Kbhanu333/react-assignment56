import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbarfile from './Components/Navbarfile';
import Paths from './Routes/Paths';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbarfile/>
        <Paths />
      </BrowserRouter>
    </div>
  );
}

export default App;

