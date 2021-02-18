import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';

const AuthContext = createContext({});

function AuthContextProvider( { children }){
     const [authState, setAuthState] = useState({
         status: 'pending',
         error: null,
         user: null,
     })

    useEffect(() => {
        const token = localStorage.getItem('token');

        async function getUserInfo() {
            try {
                // We kunnen de gebruikersdata ophalen omdat we onszelf authenticeren met de token
                const response = await axios.get(`http://localhost:8080/api/auth/user`, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log(response);
                // met het resultaat vullen we de context
                setAuthState({
                    ...authState,
                    user: {
                        id: response.id,
                        username: response.username,
                        email: response.email,
                    },
                    status: 'done',
                });

            } catch (e) {
                // Gaat er toch iets mis? Dan zetten we de error in de context
                setAuthState({
                    ...authState,
                    user: null,
                    error: e,
                    status: 'done'
                });
            }
        }
        // als we GEEM userinformatie meer in de applicatie hebben, maar er staat WEL een token in
        // local storage, gaan we handmatig de gebuikersdata ophalen door de getUserInfo functie van hierboven aan te roepen
        if (authState.user === null && token) {
            getUserInfo();
        } else {
            // Als er geen ingelogde gebruiker hoeft te zijn, zetten we de context naar de basis state
            setAuthState({
                ...authState,
                error: null,
                user: null,
                status: 'done'
            });
        }
    }, []);

    // useEffect(() => {
    //     //haal uit de localstorage de jwt token
    //     const token = localStorage.getItem('token');
    //     //als die er niet is kunnen we verder
    //     //als die token er wel is, betekent dat dat de applicatie herstart is
    //     // gebruikersdata ophalen
    //
    //     setTimeout( () => {
    //         //er is geen token, dus weg beginnen met een schone lei
    //         setAuthState({
    //             ...authState,
    //             status: 'done',
    //         })
    //     }, 2000)
    // }, []);

    function login(data) {
        console.log(data);
        localStorage.setItem('token', data.accessToken);

        setAuthState({
            ...authState,
            user: {
                username: data.username,
                email: data.email,
                roles: data.roles,
                id: data.id,
                isAdmin: data.roles.includes("ROLE_ADMIN")
            }
        })
        // in de context:
        // de token willen we in de local storage zetten
        // de user informatie willen we in de context zetten
        // als dat allemaal gebeurd is willen we doorgelinkt worden naar de profielpagina
        // dit doen we in het component zelf dat deze functie aanroept
    }

    function logout() {
    //Maak local storage leeg
        localStorage.clear();
    //Haal de user uit de context-state
        setAuthState({
            ...authState,
            user: null,
        })
    }

    const providerData = {
        ...authState,
        login,
        logout,
    }

    return(
        <AuthContext.Provider value={providerData}>
            {authState.status === 'done' && children}
            {authState.status === 'pending' && <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

    function useAuthState() {
        const authState = useContext(AuthContext);
        //iemand is geautoriseerd wanneer de status === done
        // en als er een gebruiker in de authState staat
        const isDone = authState.status === 'done';
        const isAuthenticated = authState.user !== null && isDone;
        const isAdmin = authState.user !== null && authState.user.isAdmin;
        console.log('Ik ben authenticated:', isAuthenticated);

        return {
            ...authState,
            isAuthenticated: isAuthenticated,
            isAdmin: isAdmin
        }
    }

export {
    AuthContext,
    useAuthState,
    AuthContextProvider,
};

