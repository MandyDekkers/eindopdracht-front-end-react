import React, { createContext, useState } from 'react';

export const UserContext = createContext({});
// // later meer informatie toevoegen aan defaultValuesobjectje
//
// function UserContextProvider( { children }){
//
//      const [user, setUser] = useState(false);
//
// //     function (){
// //         set();
// //     }
// //
//     const data = {
//         currentUser: user,
//         setUser
//     }
//
//     return(
//         <UserContext.Provider value={data}>
//             {children}
//         </UserContext.Provider>
//     );
// }
//
// export default UserContextProvider;

