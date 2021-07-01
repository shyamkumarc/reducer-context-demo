import { createContext , useState, useReducer} from "react";
import Comp1 from "./components/comp1";
import Comp2 from "./components/comp2";
import Comp3 from "./components/comp3";

       export const myContext = createContext();


   

       

function App() {
  // const [value,setValue] = useState("hello");
  const reducer = (state,action)=>{
    //action = { type:'<what is the action>' , value: <what date is passed>}
      switch (action.type) {
        case "INSR_COMP3":
                return {...state , comp3sInput:{value: action.value } }
          break;
      
        default:
          break;
      }
  }

  const [state, dispatch] = useReducer(reducer, {comp3sInput:{value:""} , comp3sInput:{value:""}})
  return (
    <myContext.Provider value={{state, dispatch}}>
hello from App
      <Comp1/>
      <Comp2/>
    </myContext.Provider>
  );
}

export default App;
