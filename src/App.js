import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import TimeTable from './components/pages/TimeTable';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/Signup';
import './App.css';
import DocumentTitle from 'react-document-title';


  function App() {
    return (
      <>
      <DocumentTitle title="Danse Skole">
        <Router>
          <Navbar/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/timetable" component={TimeTable} />
              <Route path="/contact" component={Contact} />
              <Route path="/signup" component={SignUp} />
            </Switch>
        </Router>
      </DocumentTitle>
      </>
    );
  }

  export default App;
