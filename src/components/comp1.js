import React, { useContext } from 'react'
import { myContext } from '../App'



export default function Comp1() {
    const context = useContext(myContext)
    return (
        <div>
            hello form comp1
            <h1>comp1 value is : {context.state.comp3sInput.value}</h1>
        </div>
    )
}
