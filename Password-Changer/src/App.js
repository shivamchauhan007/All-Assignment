import "./App.css";
import { useCallback, useEffect, useRef, useState } from "react";
function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const inputcopy = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "~!@#$%^&*?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, char, setPassword]);

 
  // const inputcopypassword =(()=>{
  //     inputcopy.current?.select()
  //     navigator.clipboard.writeText(password)
  // })

  const inputcopypassword = useCallback(()=>{
    inputcopy.current?.select()
    inputcopy.current?.setSelectionRange(0,12)
    navigator.clipboard.writeText(password)
  },[password])
  // passwordGenerator()
  useEffect(()=>{
    passwordGenerator()
  },[length, number, char, passwordGenerator])
  return (
    <>
      <div className="width App">
        <div>
          <h1 className="App ">Password Generator</h1>
          <input
            className="input-password"
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={inputcopy}
          />
          <button className="button" onClick={inputcopypassword}>Copy</button>
        </div>
        <div className="second">
          <div>
            <input
            type="range"
            min={6}
            max={40}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label className="range">  Length : {length}</label>
          </div>
          <div className="checkbox" >
            <input
            type="checkbox"
            defaultChecked={number}
            onChange={()=>{
              setNumber((prev) => !prev)
            }}
            />
            <label className="range" >  Number</label>
          </div>
          <div className="checkbox" >
            <input
            type="checkbox"
            defaultChecked={char}
            onChange={()=>{
              setChar((prev) => !prev);
            }}
            />
            <label className="range" >  Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
