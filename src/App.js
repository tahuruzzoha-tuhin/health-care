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



function App() {
  return (
    <div className="container">

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
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/process" component={Register}></Route>
          <Route path="*" component={NotFound}></Route>
          {/* <ServicePage/> */}
        </Switch>

      </Router>
    </div>
  );
}

export default App;
