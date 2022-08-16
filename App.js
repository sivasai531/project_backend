import './App.css';
import PaymentComponent from './components/PaymentComponent';
import NavbarComponent from './components/NavbarComponent';
import './styles.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ResultComponent from './components/ResultComponent';

function App() {
  return (
    <Router>
    <div className="App">
      <NavbarComponent />
      <Switch>
        <Route path='/'>
          <PaymentComponent />
        </Route>

        <Route path='/result'>
          <ResultComponent />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
