import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';


function App() {

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
