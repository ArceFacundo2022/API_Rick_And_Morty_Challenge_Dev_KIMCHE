import { useContext, useState } from "react";
import PickleRick_IMG from "../../public/Icon_Rick.png"

//? ---------------------- [ NEXT UI Components] ----------------------------------
import {Select, SelectItem} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import { mainContext } from "../hooks/main.hooks";
//? -------------------------------------------------------------------------------

export const SideBar_Filter = () => {

  const {mainDispatch} = useContext(mainContext)

  const [idTimer, setIdTimer] = useState(false)
  const [formData, setFormData] = useState({
    species: "",
    gender: "",
    status: ""
  })

  const statusData = ["Alive", "unknown", "Dead"]
  const genderData = ["Male", "unknown", "Female", "Genderless"]

  const handleInputChange = (name) => {
    return ((e) => {
      console.log(e)
      const value = [...e][0]
      setFormData({...formData, [name] : e})
      mainDispatch({type:"Filters", name, value})
    })
  } 

  const sendSpecies = (e) =>{
    setFormData({...formData, species:e})

    if(idTimer){
      clearTimeout(idTimer)
    }

    const timer = setTimeout(()=>{
      mainDispatch({type:"Filters", name:"species", value: e}) 
    },1000)

    setIdTimer(timer)
  }
  
  const reset = () =>{
    setFormData({
      status: new Set(['']),
      gender: new Set(['']),
      species: ""
    })
    mainDispatch({type:"Reset"})
  }
  return (
    <section className="overflow-hidden h-full row-span-12 col-span-1 border-2 rounded-lg border-green-500 bg-gradient-to-t from-green-800 to-black">
      <main className="grid grid-rows-10 grid-cols-1">
        <div className="col-span-1 row-span-3">
          <p className="py-2 text-white border-b-2 border-b-green-500">FILTER</p>
          <div className="p-2">
            <div className="flex w-full max-w-xs flex-col gap-2">
              <p className=" text-white">STATUS</p>
              <Select
                aria-label="Select status"
                size="sm"
                placeholder="Select status"
                className="max-w-xs"
                onSelectionChange={handleInputChange("status")}
                selectedKeys={formData.status}
              >
                <SelectItem key={""} value={""}>
                  {"Sin filtros"}
                </SelectItem>
                {statusData.map((data) => (
                  <SelectItem key={data} value={data}>
                    {data}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
          <div className="p-2">
            <div className="flex w-full max-w-xs flex-col gap-2">
              <p className=" text-white">GENDER</p>
              <Select
                aria-label="Select Gender"
                size="sm"
                placeholder="Select gender"
                className="max-w-xs"
                onSelectionChange={handleInputChange("gender")}
                selectedKeys={formData.gender}
              >
                <SelectItem key={""} value={""}>
                  {"Sin filtros"}
                </SelectItem>
                {genderData.map((data) => (
                  <SelectItem key={data} value={data}>
                    {data}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
          <div className="p-2 border-b-2 border-b-green-500">
            <div className="flex w-full max-w-xs flex-col gap-2">
              <p className=" text-white">SPECIES</p>
              <Input
                aria-label="Input Species"
                size="sm"
                value={formData.species}
                onValueChange={sendSpecies}
                placeholder="write a species"
                className="max-w-xs"
              />
            </div>
          </div>
          <div className="pt-2">
            <Button size="sm" radius="full" className="py-[-8px] bg-gradient-to-tr from-green-500 to-green-1000 text-white shadow-lg border-2 border-black/95"
              onClick={reset}
            >
              Reset Filters
            </Button>
          </div>
        </div>
        <div className="col-span-1 row-span-2 flex align-bottom items-end">
          <img
            src={PickleRick_IMG}
            alt="Pepinillo rick icono"
          />
        </div>
      </main>
    </section>
  )
}
