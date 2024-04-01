import KIMCHE from "../../public/KIMCHE.png"

export const Footer = () => {
  return (
    <section className="overflow-hidden row-span-2 col-span-6 rounded-lg border-2 border-green-300 bg-gradient-to-t from-green-600 to-green-800">
      <main className="flex">
        <div className="flex-1 h-1/2 text-left p-3">
          <p className="text-white">Desarrollado con ❤ por: <b className="italic text-pretty">Arce Facundo</b>💻</p>
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
