// import axios from "axios";
// import { useForm } from 'react-hook-form';
// import {AuthContext, useAuthState} from "../context/AuthContext";
// import './LoginPage.css';
// import './RegisterPage';
// import {useState, useContext, useEffect} from "react";
// import { Link, useHistory } from 'react-router-dom';
//
// // loading: Rein video 15 dec 1:17:37
// // if (state === 0){
// //     return <h1>Loading...</h1> of een gifje bewegend
// //     else {
// //         return ()
// //         reeds geschreven functie
// //     }
// // }
//
// // const endpointLink = 'https://polar-lake-14365.herokuapp.com/api/auth/signin'; // eigen endpointlink toevoegen
//
// function LoginPage() {
//
//     const { login } = useContext(AuthContext);
//     const { isAuthenticated } = useAuthState();
//
//     const [loading, toggleLoading] = useState(false);
//     const [error, setError] = useState('');
//
//     const {handleSubmit, register, errors} = useForm();
//
//     const history = useHistory();
//
//     useEffect( () => {
//         if (isAuthenticated === true) {
//             history.push('/profile');
//         }
//         console.log(isAuthenticated);
//     }, [isAuthenticated]);
//
//     async function formSubmit(data) {
//         toggleLoading(true);
//         setError('');
//
//         try {
//             const response = await axios.post(endpointLink, {
//                 username: data.username,
//                 password: data.password
//             });
//             login(response.data);
//
//         } catch (e) {
//             console.error(e);
//             if (e.message.includes('400')) {
//                 setError('Inloggevens zijn onjuist');
//             } else {
//                 setError('Er is iets misgegaan bij het inloggen. Probeer het opnieuw')
//             }
//         }
//         toggleLoading(false);
//     }
//
//     // function keyPressCheck(e){
//     //     if (e.keyCode === 13 ){
//     //         handleSubmit(onsubmit);
//     //     }
//
//     return (
//         <>
//             <div className="login-container">
//                 {/*<Userphoto className="user"/>*/}
//                 <form className="login-form" onSubmit={handleSubmit(formSubmit)}>
//                     <h2>Login</h2>
//                     <label htmlFor="username-field">Gebruikersnaam*:</label>
//                     <input
//                         name="username"
//                         id="username-field"
//                         type="text"
//                         placeholder="gebruikersnaam"
//                         ref={register({required: true})}
//                     />
//                     {errors.username && <p>Gebruikersnaam is verplicht</p>}
//
//                     <label htmlFor="password-field">Wachtwoord*:</label>
//                     <input
//                         type="password"
//                         placeholder="min. 8 karakters"
//                         name="password"
//                         id="password-field"
//                         ref={register(
//                             {
//                                 required: {
//                                     value: true,
//                                     message: 'Dit veld mag niet leeg zijn',
//                                 },
//                                 minLength: {
//                                     value: 8,
//                                     message: 'Min. 8 karakters',
//                                 },
//                             }
//                         )}
//                     />
//                     {errors.password && errors.password.message}
//
//                     <button className="login-button"
//                             type="submit"
//                             disabled={loading}
//                     >
//                         Inloggen
//                     </button>
//                     {error && <p>{error}</p>}
//                     <p>Wachtwoord vergeten?</p>
//                     <p className="create-account" ><Link to="/register"> Registreer je hier!</Link></p>
//                 </form>
//             </div>
//         </>
//     );
// }
//
// export default LoginPage;
