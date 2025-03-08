import { createContext } from "react";

export const AppContextProvider = (props)=>{

    return(
        <>
            <AppContext.Provider value={value}>
                {props.children}
            </AppContext.Provider>
        </>
    );

} 
