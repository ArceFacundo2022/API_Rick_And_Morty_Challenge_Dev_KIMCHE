import {Input} from "@nextui-org/react";
import { SearchIcon } from "../assets/icons/SearchIcon"

export const Header_Search = () => {
  return (
    <section className="col-span-5 row-span-2 border-2 border-green-600 rounded-lg bg-gradient-to-t from-green-950 to-black">
        <p className="pt-1 text-white text-lg">API - RICK AND MORTY / CHALLENGE DEV KIMCHE</p>
        <input
          hidden={true}
          type="text"
          placeholder="🔍 search characters"
          className="rounded-lg border-2 border-green-500 bg-green-1000 w-1/2 text-white 
        placeholder:text-slate-400 focus:ring-1 focus:ring-green-200 py-[-4px] p-0"
        />
        <div className=" px-[25%] pt-4 w-full h-8 rounded-2xl flex justify-center items-center">

          <Input
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
