import KIMCHE from "../../public/KIMCHE.png"
import {Chip} from "@nextui-org/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <section className="overflow-hidden row-span-2 col-span-6 rounded-lg border-2 border-green-300 bg-gradient-to-t from-green-600 to-green-800">
      <main className="flex">
        <div className="flex-1 h-1/2 text-left p-3">
          <p className="text-white">Desarrollado con ❤ por: <b className="italic text-pretty">Arce Facundo</b>💻</p>
          <div>
            <a href="https://www.linkedin.com/in/facundo-sebastian-arce-9699992b8/">
              <Chip
                variant="shadow"
                classNames={{
                  base: "bg-gradient-to-br from-indigo-700 to-blue-700 hover:from-indigo-500 hover:to-blue-500 border-small border-white/95 shadow-indigo-800/60 cursor-pointer",
                  content: "drop-shadow shadow-black text-white",
                }}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Chip>
            </a>
            <span className="px-0.5" />
            <a href="https://github.com/ArceFacundo2022" >
              <Chip
                variant="shadow"
                classNames={{
                  base: "bg-black border-small border-white/95 shadow-black/60 hover:bg-black/80 cursor-pointer",
                  content: "drop-shadow shadow-black text-white",
                }}
              >
                <FontAwesomeIcon icon={faGithub} />
              </Chip>
            </a>
          </div>
        </div>
        <div className="flex-1 h-1/2 p-3">
          <div className="flex text-center items-center align-middle justify-end">
            <p className="text-white pr-2">Proyecto realizado para el Challenge Dev de KIMCHE </p>
            <img src={KIMCHE} alt="Logo de KIMCHE" width={35} height={35} className="rounded-full"/>
          </div>
        </div>
      </main>
    </section>
  )
}
