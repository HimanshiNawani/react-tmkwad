import React, { useState } from 'react';
function Todo() {
let [arr, setArr] = useState ([]);
let [text, setText] = useState ('');
let add = ( ) => {
  set(text! = ''){
    setArr {[...arr, text]};
    setText('');
  }
};
console.log('rerender hua');
return(
  <div>
    <input type = "text"
    placeholder = "Add some text"
    value = {text}
    onChange = {(e) => {
      setText(e.target.value);
}}

/>
<button onClick = {add}>Add</button>
<div>
  Todos:
{arr.map((ele) => )
<p> {ele} </p>
))}

</div>
  </div>

  
};
}
export default Todo;