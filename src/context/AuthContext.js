// import React, {createContext, useContext, useEffect, useState} from 'react';
//
// const AuthContext = createContext({});
//
// function AuthContextProvider( { children }){
//      const [authState, setAuthState] = useState({
//          status: 'pending',
//          error: null,
//          user: null,
//      })
//
//     useEffect(() => {
//         //haal uit de localstorage de jwt token
//         //als die er niet is kunnen we verder
//         //als die token er wel is, betekent dat dat de applicatie herstart is
//         // gebruikersdata ophalen
//
//         setTimeout( () => {
//             //er is geen token, dus weg beginnen met een schone lei
//             setAuthState({
//                 ...authState,
//                 status: 'done',
//             })
//         }, 2000)
//     }, []);
//
//     function login(data) {
//         console.log(data);
//         localStorage.setItem('token', data.accessToken);
//
//         setAuthState({
//             ...authState,
//             user: {
//                 username: data.username,
//                 email: data.email,
//                 roles: data.roles,
//             }
//         })
//         // in de context:
//         // de token willen we in de local storage zetten
//         // de user informatie willen we in de context zetten
//         // als dat allemaal gebeurd is willen we doorgelinkt worden naar de profielpagina
//         // dit doen we in het component zelf dat deze functie aanroept
//     }
//
//     function logout() {
//     //Maak local storage leeg
//         localStorage.clear();
//     //Haal de user uit de context-state
//         setAuthState({
//             ...authState,
//             user: null,
//         })
//     }
//
//     const providerData = {
//         ...authState,
//         login,
//         logout,
//     }
//
//     return(
//         <AuthContext.Provider value={providerData}>
//             {authState.status === 'done' && children}
//             {authState.status === 'pending' && <p>Loading...</p>}
//         </AuthContext.Provider>
//     );
// }
//
//     function useAuthState() {
//         const authState = useContext(AuthContext);
//         //iemand is geautoriseerd wanneer de status === done
//         // en als er een gebruiker in de authState staat
//         const isDone = authState.status === 'done';
//         const isAuthenticated = authState.user !== null && isDone;
//
//         console.log('Ik ben authenticated:', isAuthenticated);
//
//         return {
//             ...authState,
//             isAuthenticated: isAuthenticated,
//         }
//     }
//
// export {
//     AuthContext,
//     useAuthState,
//     AuthContextProvider,
// };
//
