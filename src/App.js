import NavBar from './navBar';
import Home from './home';
import Create from './create';
import  {BrowserRouter  as Router , Route , Switch } from 'react-router-dom';
import MovieDeatil from './movieDetail';
import NotFound from './notFound';

function App() {
  return (
    <Router>
         <div className="App">
           <NavBar />
           <div className="content">
            <Switch>
              <Route exact path="/"> <Home /> </Route>
              <Route  path="/create"> <Create /> </Route>
              <Route  path="/movies/:id"> <MovieDeatil /> </Route>
              <Route  path="*"> <NotFound ></NotFound> </Route>
            </Switch>
           </div>
         </div>
    </Router>
  );
}

export default App;
