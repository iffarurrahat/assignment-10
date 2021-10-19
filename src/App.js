import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ClickOneServices from './ClickOneServices/ClickOneServices';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Doctors from './components/Doctors/Doctors';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Services from './components/Services/Services';
import Footer from './components/Shared/Footer/Footer';
import AuthProvider from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/aboutUs">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route exact path="/booking/:id">
              <ClickOneServices></ClickOneServices>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
