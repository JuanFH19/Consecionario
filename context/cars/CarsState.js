import React,{useReducer} from "react";
import CarsContext from "./CarsContext";
import CarsReducer from "./CarsReducer";

const CarsState = props=>{
    const initialState={
        cars:{}
    }
    const [state, dispach]= useReducer(CarsReducer,initialState)
    return(
        <CarsContext.Provider
            value={{
                cars:state.pedido
            }}
        >
            {props.children}
        </CarsContext.Provider>    
    )
}

export default CarsState