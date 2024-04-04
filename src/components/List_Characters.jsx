import PORTAL from "../../public/Portal.png"

import {Spinner, Chip} from "@nextui-org/react";
import {Card, CardFooter, Image} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, useDisclosure} from "@nextui-org/react";

import { useLazyQuery } from "@apollo/client"
import { Query } from "../api/main_query"
import { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { mainContext } from "../hooks/main.hooks";

export const List_Characters = () => {

  const {mainInfo} = useContext(mainContext)
  const {name, status, gender, species} = mainInfo.filters

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [getCharacters, result] = useLazyQuery(Query.AllCharacters)

  const [idTimer, setIdTimer] = useState(false)
  const [character, setCharacter] = useState({})
  const [hasMore, setHasMore] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [infoQuery, setInfoQuery] = useState({
    characters : [],
    page: 1
  })
  

  useEffect(()=>{
    if(result.data){
      const info = result?.data.characters.info
      const list = result.data.characters.results
      if(!list[0]){
        setNotFound(true)
        return 
      }
      if((info.next > infoQuery.page || info.next === null) || (info.next !== null && infoQuery.page === null)){
        if(info.next === null){
          setHasMore(false)
        }else{
          if(!hasMore){
            setHasMore(true)
          }
        }
        setInfoQuery({page: info.next, characters : infoQuery.characters.concat(list)})
      }
    }else{
      if(result.variables.page == 1 && infoQuery[0]){
        setInfoQuery({page: 1, characters:[]})
      }
    }
  },[result])

  useEffect(()=>{

    setInfoQuery({page: 1, characters:[]})

    if(idTimer){
      clearTimeout(idTimer)
    }
    
    const timer = setTimeout(()=>{
      getCharacters({variables:{
        page:1,
        name:name,
        status:status,
        gender:gender,
        species:species
      }})

    }, 800)

    setIdTimer(timer)

  },[mainInfo])

  const nextPage = () => {

    if(infoQuery.page == null){
      setHasMore(false)
    }else{
      getCharacters({variables:{
        page:infoQuery.page,
        name:name,
        status:status,
        gender:gender,
        species:species
      }})
    }
  }

  return (
    <section className="
      row-span-10 col-span-5 rounded-lg border-4 border-black/65 ring-4 ring-green-500
      bg-center bg-cover overflow-auto flex-col-reverse flex h-full
      "
      style={{
        "backgroundImage": `url(${PORTAL})`
      }}
      id="section_list_characters">
        {infoQuery.characters[0] ? (
          <>

          <InfiniteScroll
            dataLength={infoQuery.characters.length}
            next={()=> nextPage()}
            hasMore={hasMore}
            loader={
            <div className="flex items-center justify-center text-center w-full h-full flex-col-reverse">
              <div className="p-5 rounded-full bg-black/45">
                <Spinner size="lg" label="Loading..." color="success" labelColor="success"/>
              </div>
            </div>}
            scrollableTarget="section_list_characters"
            scrollThreshold={0.01}
          >

          </InfiniteScroll>
          <div className=" grid grid-cols-5 p-2 gap-2">
            {infoQuery.characters.map((pj, i) => {
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
        </>
        ): (
          <>
            <div className="flex items-center justify-center text-center w-full h-full flex-col-reverse">
              <div className="p-5 rounded-full bg-black/45">
                {notFound ?(
                  <>
                    <Spinner size="lg" label="Sin resultados" color="danger" labelColor="danger"/>
                  </>
                ) : (
                  <>
                    <Spinner size="lg" label="Loading..." color="warning" labelColor="warning"/>
                  </>
                )}
              </div>
            </div>
          </>
        )}
    </section>
  )
}
