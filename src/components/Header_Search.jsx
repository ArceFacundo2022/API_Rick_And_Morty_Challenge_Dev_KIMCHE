import {Input} from "@nextui-org/react";
import { SearchIcon } from "../assets/icons/SearchIcon"
import { useContext, useEffect, useState } from "react";
import { mainContext } from "../hooks/main.hooks";

export const Header_Search = () => {

  const {mainDispatch, mainInfo} = useContext(mainContext)

  const [search, setSearch] = useState("")
  const [idTimer, setIdTimer] = useState(false)

  const sendSearch = (e) =>{
    setSearch(e)

    if(idTimer){
      clearTimeout(idTimer)
    }

    const timer = setTimeout(()=>{
        mainDispatch({type:"Filters", name: "name", value: e}) 
    },1000)

    setIdTimer(timer)

  }

  useEffect(()=>{
    if(search !== "" && mainInfo.filters.name === ""){
      setSearch("")
    }
  },[mainInfo])

  return (
    <section className="col-span-5 row-span-2 border-2 border-green-600 rounded-lg bg-gradient-to-t from-green-950 to-black">
        <p className="pt-1 bg-clip-text text-transparent bg-gradient-to-r from-white/85 to-green-300 text-xl font-bold">API - RICK AND MORTY / CHALLENGE DEV KIMCHE</p>

        <div className=" px-[25%] pt-4 w-full h-8 rounded-2xl flex justify-center items-center">

          <Input
            value={search}
            onValueChange={sendSearch}
            isClearable
            radius="lg"
            size="sm"
            classNames={{
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              clearButton: "dark:text-white",
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focused=true]:bg-default-200/50",
                "dark:group-data-[focused=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
            placeholder="search characters..."
            startContent={
              <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
    </section>
  )
}
