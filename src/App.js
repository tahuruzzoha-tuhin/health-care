import logo from './logo.svg';
import Navbar from './NavBar/Navbar'
// import './App.css';
import MainPage from './MainPage/MainPage'
import ContactPage from './Contact-Page/ContactPage'
import AboutPage from './About-Page/AboutPage'
import ServicePage from './Services-Page/ServicePage'
import Login from './NavBar/Login/Login'
import Register from './NavBar/Register/Register'

import ProcessPage from './Process-Page/Process-Page'
import { BrowserRouter as Router, Switch, Route }
  from 'react-router-dom';
import NotFound from './Steps/Notfound/NotFound';
import AuthProvider from './contexts/AuthProvider';
import userEvent from '@testing-library/user-event';
import useAuth from './Hooks/useAuth';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Details from './Details/Details';




const App = () => {

  // const { user, logOut } = useAuth();
  return (
    <div className="container">

      <AuthProvider>
        <Router>
          <Navbar className="navBar" />


          <Switch>
            <Route exact path="/" component={MainPage}></Route>
            <Route exact path="/mainpage" component={MainPage}></Route>
            {/* <MainPage/> */}
            <Route exact path="/contact" component={ContactPage}></Route>
            {/* <ContactPage/> */}
            <Route exact path="/about" component={AboutPage}></Route>
            {/* <AboutPage/> */}

            <Route exact path="/services" component={ServicePage}></Route>
            {/* <ServicePage/> */}

            <Route exact path="/process" component={ProcessPage}></Route>

            {/* <Route exact path="/" component={MainPage}></Route> */}

            <Route exact path="/login" component={Login}></Route>

            <Route exact path="/register" component={Register}></Route>

            <PrivateRoute path="/details" >
              <Details></Details>
            </PrivateRoute>

            <Route path="*" component={NotFound}></Route>
            {/* <ServicePage/> */}
          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
