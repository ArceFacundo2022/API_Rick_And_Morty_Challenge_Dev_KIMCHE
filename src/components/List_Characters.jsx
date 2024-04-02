import PORTAL from "../../public/Portal.png"

import {Spinner, Chip} from "@nextui-org/react";
import {Card, CardFooter, Image} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, useDisclosure} from "@nextui-org/react";

import { useQuery } from "@apollo/client"
import { Query } from "../api/main_query"
import { useState } from "react";

export const List_Characters = () => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const [character, setCharacter] = useState({})

  const {data, error, loading} = useQuery(Query.AllCharacters())

  if(error) return <section className="row-span-10 col-span-5 rounded-lg border-4 border-black/65 ring-4 ring-green-500 text-red-700 text-2xl">ERROR</section>
  return (
    <section className="
    row-span-10 col-span-5 rounded-lg border-4 border-black/65 ring-4 ring-green-500
    bg-center bg-cover overflow-auto
    "
    style={{"background-image": `url(${PORTAL})`}}>
        {loading 
        ? 
        ( 
          <div className="flex items-center justify-center text-center w-full h-full">
            <div className="p-5 rounded-full bg-black/45">
              <Spinner size="lg" label="Loading..." color="warning" labelColor="warning"/>
            </div>
          </div>
        )
        :
        (<>
          <div className=" grid grid-cols-5 p-2 gap-2">
            {data.characters.results.map((pj, i) => {
              return (
                <a key={i} onClick={() => {
                  setCharacter(pj)
                  onOpen()
                }} className="hover:cursor-pointer">
                  <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-4 border-black/0"
                  >
                    <Image
                      alt="Character of Rick And Morty"
                      className="object-cover transition-transform duration-1000 transform hover:scale-110"
                      height={200}
                      src={pj.image}
                      width={200}
                    />
                    <CardFooter className="text-center bg-black/45 border-black/65 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                      <p className="text-white">{pj.name}</p>
                    </CardFooter>
                  </Card>
                </a>
              )
            })}
          </div>
            <Modal 
              backdrop="opaque" 
              isOpen={isOpen} 
              onOpenChange={onOpenChange}
              size="lg"
              radius="lg"
              classNames={{
                body: "py-6",
                backdrop: "bg-green-900/50 backdrop-opacity-40",
                base: "border-2 border-black bg-gradient-to-t from-green-1100 to-black text-[#a8b0d3]",
                closeButton: "hover:bg-white/5 active:bg-white/10",
              }}
            >
              <ModalContent>
                {() => {
                  let tono = "default"
                  switch(character.status){
                    case "Alive":
                      tono = "success"
                      break
                    case "unknown":
                      tono = "default"
                      break
                    case "Dead":
                      tono = "danger"
                      break
                  }
                  return(
                  <>
                    <ModalHeader className="grid grid-cols-2 gap-1">
                      <div className="">
                        <Image
                          alt="Character of Rick And Morty"
                          className="scale-110"
                          height={200}
                          src={character.image}
                          width={200}
                        />
                        <div className="overflow-hidden py-1 absolute before:rounded-xl rounded-large top-2 w-[calc(25%_-_8px)] z-10">
                          <Chip className={`text-white text-pretty bg-black`} color={`${tono}`} variant="dot">{`${character.status}`}</Chip>
                        </div>
                      </div>
                      <div>
                        <span className="text-2xl bg-clip-text text-transparent bg-white pb-2">{`${character.name}`}</span>
                        <div className="rounded-lg bg-gradient-to-br from-slate-300/50 to-slate-600/50 p-2">
                          {character.gender && (<p className="text-green-500 text-md">Gender: <span className="text-white text-pretty text-lg">{`${character.gender}`}</span></p>)}
                          {character.species && (<p className="text-green-500 text-md">Species: <span className="text-white text-pretty text-lg">{`${character.species}`}</span></p>)}
                          {character.type && (<p className="text-green-500 text-md">Type: <span className="text-white text-pretty text-lg">{`${character.type}`}</span></p>)}
                          {character.origin.name && (<p className="text-green-500 text-md">Origin: <span className="text-white text-pretty text-lg">{`${character.origin.name}`}</span></p>)}
                          {character.location.name && (<p className="text-green-500 text-md">Location: <span className="text-white text-pretty text-lg">{`${character.location.name}`}</span></p>)}
                        </div>
                      </div>
                    </ModalHeader>
                  </>
                )}}
              </ModalContent>
            </Modal>
        </>)}
    </section>
  )
}
