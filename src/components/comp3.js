import React,{useState,useContext} from 'react'
import { myContext } from '../App'



export default function Comp3() {
   
        const context = useContext(myContext);

    return (
        <div>
            hello form comp3

            <input value={context.state.comp3sInput.value} onChange={(e)=>context.dispatch({type:"INSR_COMP3",value: e.target.value})}/>
            <h1>Comp3 value is : {context.state.comp3sInput.value}</h1>
        </div>
    )
}
