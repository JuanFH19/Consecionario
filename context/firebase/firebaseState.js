import React, {useReducer} from "react";
import firebase from "../../firebase";
import firebaseReducer from "./firebaseReducer";
import FirebaseContext from "./firebaseContext";
import AppointmentForm from "../../src/component/AppointmentForm";

const FirebaseState = props =>{
    //Crear el state inial
    const initialState={
        AppointmentForm:{}
    }
    //useReducer con el dispatch 
    const [state, dispatch] = useReducer(firebaseReducer, initialState)
    return(
    <FirebaseContext.Provider
        value={{
            AppointmentForm:state.AppointmentForm,
            firebase,
        }}
    
    >
        {props.children}
    </FirebaseContext.Provider>
    )

}

export default FirebaseState
