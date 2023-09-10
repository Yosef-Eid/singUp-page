import {React, useEffect, useState } from "react";

import './App.css'
import SingUp from "./component/sing-up/sing-up-page/SingUp.js";
import Account from "./component/sing-up/account-page/Account.js";


function App() {


  let [runAccountComponent, setRunAccountComponent] = useState('')
  let getDataFromChild = data => setRunAccountComponent(data)
  

  let [value, setValue] = useState('')
  let nameValue = get => setValue(get) 
  

return(
  <>
  
  
  {runAccountComponent ? <Account value={value}/>:<SingUp getDataFromChild={getDataFromChild} nameValue={nameValue} />}
  </>
  )
}

export default App;