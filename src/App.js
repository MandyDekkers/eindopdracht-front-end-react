import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Header from "./components/header/Header";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { useState, useEffect, useContext } from "react";
import ProfilePage from "./pages/ProfilePage";
import ReservationPage from "./pages/ReservationPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/footer/Footer";
import axios from 'axios';
import {get} from "react-hook-form";

function App() {

   // const [loggedIn, setLoggedIn] = useState(false);

    // loading: Rein video 15 dec 1:17:37
// if (state === 0){
//     return <h1>Loading...</h1> of een gifje bewegend
//     else {
//         return ()
//         reeds geschreven functie
//     }
// }


  return (

      <Router>
                <Switch>

                    <Route exact path="/">
                    <LoginPage />
                    </Route>

                    <Route path="/register">
                    <RegisterPage />
                    </Route>

                    <Route path="/home">
                    <HomePage  />
                    </Route>

                    <Route path="/profile">
                    <ProfilePage />
                    </Route>

                    <Route path="/reservation">
                    <ReservationPage />
                    </Route>

                    <Route path="/contact">
                    <ContactPage />
                    </Route>

                </Switch>

               {/*<Footer />*/}
      </Router>
  );
}

export default App;
