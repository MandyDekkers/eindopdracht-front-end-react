import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ReservationPage from "./pages/ReservationPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/Admin/AdminPage";
import PersonalInfo from "./pages/Personalinfo";
import {useAuthState} from "./context/AuthContext";
import PrivateRoute from "./components/privateroute/PrivateRoute";
import LessonsPage from "./pages/Admin/LessonsPage";
import MembersPage from "./pages/Admin/MembersPage";
import Footer from "./components/footer/Footer";


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
                    <Route path="/login">
                        <LoginPage />
                    </Route>

                    <Route path="/register">
                        <RegisterPage />
                    </Route>

                    <Route path="/profile" >
                        <ProfilePage />
                    </Route>

                    <Route path="/profile" >
                        <ProfilePage />
                    </Route>

                    <Route path="/personalinfo">
                        <PersonalInfo />
                    </Route>

                    <Route path="/reservation">
                        <ReservationPage />
                    </Route>

                    <Route path="/contact">
                        <ContactPage />
                    </Route>

                    <Route path="/members">
                        <MembersPage />
                    </Route>

                    <Route path="/lessons">
                        <LessonsPage />
                    </Route>

                    <Route path="/admin">
                        <AdminPage />
                    </Route>

                    {/*<PrivateRoute path="/profile" >*/}
                    {/*    <ProfilePage />*/}
                    {/*</PrivateRoute>*/}

                    {/*<PrivateRoute path="/profile" >*/}
                    {/*    <ProfilePage />*/}
                    {/*</PrivateRoute>*/}

                    {/*<PrivateRoute path="/personalinfo">*/}
                    {/*    <PersonalInfo />*/}
                    {/*</PrivateRoute>*/}

                    {/*<PrivateRoute path="/reservation">*/}
                    {/*    <ReservationPage />*/}
                    {/*</PrivateRoute>*/}

                    {/*<PrivateRoute path="/contact">*/}
                    {/*    <ContactPage />*/}
                    {/*</PrivateRoute>*/}

                    {/*<PrivateRoute path="/admin">*/}
                    {/*    <AdminPage />*/}
                    {/*</PrivateRoute>*/}

                </Switch>
               <Footer />
      </Router>
  );
}

export default App;
