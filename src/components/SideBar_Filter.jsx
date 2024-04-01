import { useState } from "react";
import PickleRick_IMG from "../../public/Icon_Rick.png"

//? ---------------------- [ NEXT UI Components] ----------------------------------
import {Select, SelectItem} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
//? -------------------------------------------------------------------------------

export const SideBar_Filter = () => {

  const [formData, setFormData] = useState({
    status : "",
    gender: "",
    species: "",
  })

  const ejemData = ["Alive", "Unknown", "Dead"]

  const handleInputChange = (name) => {
    return ((e) => {
      setFormData({
        ...formData,
        [name]: e,
      });
    })
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
                size="sm"
                placeholder="Select status"
                selectedKeys={formData.status}
                className="max-w-xs"
                onSelectionChange={handleInputChange("status")}
              >
                {ejemData.map((data) => (
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
                size="sm"
                placeholder="Select gender"
                selectedKeys={formData.gender}
                className="max-w-xs"
                onSelectionChange={handleInputChange("gender")}
              >
                {ejemData.map((data) => (
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
              <Select
                size="sm"
                placeholder="Select species"
                selectedKeys={formData.species}
                className="max-w-xs"
                onSelectionChange={handleInputChange("species")}
              >
                {ejemData.map((data) => (
                  <SelectItem key={data} value={data}>
                    {data}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
          <div className="pt-2">
            <Button size="sm" radius="full" className="py-[-8px] bg-gradient-to-tr from-green-500 to-green-1000 text-white shadow-lg border-2 border-black/95">
              Reset Filters
            </Button>
          </div>
        </div>
        <div className="col-span-1 row-span-2 flex align-bottom items-end">
          <img
            src={PickleRick_IMG}
            alt="Pepinillo rick icono"
            className=""
          />
        </div>
      </main>
    </section>
  )
}
