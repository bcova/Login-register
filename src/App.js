// import { getUser } from "../back-end/db/users";
import { userLogin } from "./apiAdapter";
import React, { useState } from "react";
function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(null)
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const result = await userLogin(username, password);
      const token =result.token
      
      if(result.error){
        setError(result)
      }else if(token){ 
        setError(null)
        const username = result.user.username
        localStorage.setItem("username",username);
        localStorage.setItem("token", token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
        <input  onChange={({ target }) => setUsername(target.value)}
                  value={username}
                  id="username" placeholder="UserName"></input>
        <input  value={password}
                  id="password"
                  name="password"
                  type="password"
                  onChange={({ target }) => setPassword(target.value)}
                  required placeholder="Password"></input>
        <button onClick={handleSubmit}>Click here my dude!</button>
    </div>
  );
}

export default App;
