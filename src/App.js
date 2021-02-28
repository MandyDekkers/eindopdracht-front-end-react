import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterPage from "./pages/member/RegisterPage";
import LoginPage from "./pages/member/LoginPage";
import ProfilePage from "./pages/member/ProfilePage";
import ReservationPage from "./pages/member/ReservationPage";
import ContactPage from "./pages/member/ContactPage";
import AdminPage from "./pages/admin/AdminPage";
import PersonalInfo from "./pages/member/Personalinfo";
import PrivateRoute from "./components/privateroute/PrivateRoute";
import LessonsPage from "./pages/admin/LessonsPage";
import MembersPage from "./pages/admin/MembersPage";

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
