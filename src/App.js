import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateEmployeeComponet from './components/CreateEmployeeComponet';
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container ">
          <Switch >
            <Route path="/" exact component={ListEmployeeComponent} />
            <Route path="/employees" component={ListEmployeeComponent} />
            <Route path="/add-employee" component={CreateEmployeeComponet} />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
