
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './pages/Home';
import Detail from './pages/Detail';
import Iletisim from './pages/Iletisim';
import Card from './pages/Card';

function App() {
  return (
    <>
    <Router>
      <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/detail/:id"  component={Detail} />
     <Route path="/iletisim"  component={Iletisim} />
     <Route path="/card/:id" component={Card} />
     <Route path="/card" component={Card} />
     </Switch>
     </Router>
    </>
  );
}

export default App;
