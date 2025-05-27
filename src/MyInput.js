
import { useState } from "react";
function MyInput()
{
    const [MyInputValue,SetMyInputValue]=useState("");
  function handelInputChange(event){
   SetMyInputValue(event.target.value);
  }

    return(
       <div>
        <label>
            Your Name:
        </label>
        <input  value={MyInputValue} onChange={handelInputChange}/>

       </div>
    );
}
export default MyInput;