import { Switch, Route } from 'react-router-dom';
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import HomeView from './views/HomeView';



const App = () => (
  <Container>
    <AppBar />
    
    <Switch>
      <Route path="/" exact>
        <HomeView/>
      </Route>

    </Switch>

  </Container>
);

export default App;
