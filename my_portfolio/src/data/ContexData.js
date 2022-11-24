import React, { useState } from "react";


export const DataContext = React.createContext();

const DataContextProvider = ({ children }) => {

  const [data, setData] = useState('salomewvre');
  let m = 'hello world'

  function chiq() {
    setData('hello')
  }

  return (
    <DataContext.Provider value={{ data,setData, m, chiq }}>
      {children}
    </DataContext.Provider>
  )
}
export default DataContextProvider;