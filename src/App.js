import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ReservationPage from "./pages/ReservationPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/Admin/AdminPage";
import PersonalInfo from "./pages/Personalinfo";
import PrivateRoute from "./components/privateroute/PrivateRoute";
import LessonsPage from "./pages/Admin/LessonsPage";
import MembersPage from "./pages/Admin/MembersPage";

function App() {

  return (
      <Router>
          <Switch>
              <Route exact path="/login">
                  <LoginPage />
              </Route>
              <Route path="/register">
                  <RegisterPage />
              </Route>
              <PrivateRoute path="/profile" >
                  <ProfilePage />
              </PrivateRoute>
              <PrivateRoute path="/personalinfo">
                  <PersonalInfo />
              </PrivateRoute>
              <PrivateRoute path="/reservation">
                  <ReservationPage />
              </PrivateRoute>
              <PrivateRoute path="/contact">
                  <ContactPage />
              </PrivateRoute>
              <PrivateRoute path="/admin">
                  <AdminPage />
              </PrivateRoute>
              <PrivateRoute path="/lessons">
                  <LessonsPage />
              </PrivateRoute>
              <PrivateRoute path="/members">
                  <MembersPage />
              </PrivateRoute>
          </Switch>
      </Router>
  );
}

export default App;
