import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home/Home';


import Products from './Pages/Home/Products/Products';
import Register from './Pages/Register/Register';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './Pages/Login/Login';
import Review from './Pages/Home/Review/Review';
import Navigation from './Pages/Home/Navigation/Navigation';
import AuthProvider from './Context/AuthProvider';
import Purchase from './Pages/Purchase/Purchase';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import Order from './Pages/Orders/Order/Order';


function App() {
  return (
<AuthProvider>
<Router>
    <Navigation></Navigation>
    <Switch>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/products">
        <Products></Products>
      </Route>

      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/register">
        <Register></Register>
      </Route>
     
      <Route path="/review">
        <Review></Review>
      </Route>
      <PrivateRoute path="/dashboard">
        <Dashboard></Dashboard>
      </PrivateRoute>
      <PrivateRoute path="/purchase">
        <Purchase></Purchase>
      </PrivateRoute>
      <PrivateRoute path="/myorder">
        <Order></Order>
      </PrivateRoute>
      <PrivateRoute path="/review">
        <Review></Review>
      </PrivateRoute>
      <Route exact path="/">
        <Home></Home>
      </Route>
    </Switch>
  </Router>  
</AuthProvider>
  
    
  );
}

export default App;
