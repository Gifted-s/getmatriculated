import React, {createContext, useState} from "react"
// This holds the global state to be shared though out this application
const UserContext= createContext();
 const GlobalContext = (props) => {
   const [amount, setAmount]= useState(0);
    function exposeSetAmount(money){
      setAmount(money)
      console.log(money)
    }
    return (
        <div>
            <UserContext.Provider value={{exposeSetAmount, amount}}>
                {props.children}
            </UserContext.Provider>
        </div>
    )
}

export default GlobalContext;
export {UserContext}
