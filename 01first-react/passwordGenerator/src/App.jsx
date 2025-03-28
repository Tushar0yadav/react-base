// import { useCallback, useState } from "react";
import { Input } from "postcss";
import "./App.css";

function App() {
  
//    const [length  setLength] = useState(8)
//    const [numberAllowed setNumberAllowed] =  useState(false);
//    const [charAllowed setCharAllowed] =  useState(false);
//     const [Password setPassword] = useState() 

// const passwordGenerator = useCallback(()=>{ 
//   let  pass = ""
//   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 
//   if(numberAllowed ) str =+ "0123456789"
//   if(charAllowed ) str =+ "!@#$%^&*-_+=[]{}~'"

//   for (let i = 0; i < length; i++) {
  
//     let  char = Math.floor (Math.random() * str.length + 1)    
//      pass = str.charAt(char)
//   }
// setPassword(pass)
  
//   }, [length, numberAllowed, charAllowed, setPassword] )

  return (
    <>
<div className="w-full max-w-md mx-auto shadow-md rounded-lg  py-4 my-8 text-orange-500 bg-gray-700
">  
<div className="flex shadow rounded-lg overflow-hidden md-4">
<input
type="text"
value={password}
/>
</div>
  </div>  
    </>
  );
}

export default App;
