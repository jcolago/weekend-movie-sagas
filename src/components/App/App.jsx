//Imports from react and router
import { HashRouter as Router, Route } from 'react-router-dom';
//Css file import
import './App.css';
//Component imports
import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';


function App() {
  // Renders the app
  return (
    <div className="App">
      <div className='header'>
      <Header/>
      </div>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
