
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';


function App() {
  
  return (
    <div className="App">
     
    <BrowserRouter>
      <Home></Home>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
