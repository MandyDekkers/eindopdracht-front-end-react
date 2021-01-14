import React, { createContext, useState } from 'react';

export const UserContext = createContext({user: null});

function UserContextProvider( { children }){
     const [currentUser, setCurrentUser] = useState(false);

//     function (){
//         set();
//     }
//
    const data = {
        currentUser,
        setCurrentUser
    }

    return(
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;

