import './App.css';
import Header from './Header';
import Home from './Home'
import Footer from './Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SearchPage from './SearchPage'

function App() {
  return (
    //BEM name convention related by css
    <div className="app">

      <Router>
        
        <Header/>

        <Switch>
          <Route path="/search">
            <SearchPage/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>

        </Switch>

        <Footer/>

      </Router>
      {/* Home */}
          {/* Header */}

          {/* Banner */}
            {/* Search */}

          {/* Cards */}

          {/* Footer */}
        
      {/* SearchPage */}
          {/* Header */}
          {/* ... */}
    </div>
  );
}

export default App;

// height: 80vh;
//   background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url('');
//   background-size: cover;
//   background-position: center;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;