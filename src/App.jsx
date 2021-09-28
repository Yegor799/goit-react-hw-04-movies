import { Switch, Route } from 'react-router-dom';
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import HomePage from './views/HomePage/HomePage';
import MoviesPage from './views/MoviesPage/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';



const App = () => (
  <Container>
    <AppBar />
    
    <Switch>
      <Route path="/" exact>
        <HomePage/>
      </Route>

      <Route path="/movies" exact>
        <MoviesPage/>
      </Route>

      <Route path="/movies/:movieId">
        <MovieDetailsPage/>
      </Route>

    </Switch>

  </Container>
);

export default App;
