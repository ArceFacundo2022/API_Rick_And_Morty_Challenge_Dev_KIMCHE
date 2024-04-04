import { useReducer } from "react"
import { Main_Page } from "./pages/Main.View"
import { mainContext, mainReducer } from "./hooks/main.hooks"

function App() {

  const initData = {
    filters : {
      name:"",
      status: "",
      species: "",
      gender: ""
    }
  }

  const [mainInfo, mainDispatch] = useReducer(mainReducer, initData)

  return (
    <>
      <mainContext.Provider value={{mainInfo, mainDispatch}}>
        <Main_Page/>
      </mainContext.Provider>
    </>
  )
}

export default App
