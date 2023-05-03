import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import DogList from './components/DogList';
import dogs from './components/dogs';
import DogDetails from './components/DogDetails';

function App() {
  return (
    <Switch>

      <Route exact path="/dogs">
        <DogList dogs={dogs}/>
      </Route>

      <Route exact path="/dogs/:name">
        <DogDetails dogs={dogs}/>
      </Route>

      <Redirect to="/dogs" />
    </Switch>
  );
}


export default App;
