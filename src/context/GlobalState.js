
import React, {createContext,useReducer} from "react";
import AppReducer from './AppReducer'


const InitialState={
    transactions:[
          
        ]
}
//create Context

export const GlobalContext=createContext(InitialState)

//create Provider component
export const GlobalProvider=({children})=>{
    const[state,dispatch]=useReducer(AppReducer,InitialState);


    //action
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }

    //ADD
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }



    return(
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
        
    )

}

