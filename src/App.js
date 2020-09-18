import React from 'react';
import {BrowserRouter as Router, Route, Redirect,Switch} from 'react-router-dom';
import {Compare} from './Components/compare/compare.component';
import './App.css';

import Navbar from './Components/Navigation/Navbar/Navbar.component';
import {Table} from './Table';
import CompareTable from './Components/table/compareTable.component';
import Practise from './Components/practise/practise.component';
import ApartmentComparision from './Components/apartment-comparision/apartmentComparision.component';
import NestedGrid from './Components/formrow';
//Mui Components
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Components/practise/theme';
function App() {
  const cool = true;
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Router>
        <Switch>
          <Route path="/" exact>
              <Table />
          </Route>
          <Route path="/compare" exact>
              <Compare />
          </Route>
          <Route path="/compareTable" exact>
              <CompareTable />
          </Route>
          <Route path="/practise" exact>
            <ThemeProvider theme= {theme}>
              <Practise cool={cool}/>
              </ThemeProvider>
          </Route>
          <Route path="/compareApartment" exact>
            <ApartmentComparision />
          </Route>
          <Route path="/formrow" exact>
            <NestedGrid />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
