import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";


const HomePage = lazy(() => import('./views/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./views/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage/MovieDetailsPage'));



const App = () => (
  <Container>
    <AppBar />
    
    <Suspense fallback={<h1>LOADING...</h1>}>
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
    </Suspense>

  </Container>
);

export default App;
