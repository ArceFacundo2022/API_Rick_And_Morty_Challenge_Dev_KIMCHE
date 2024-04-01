import { Footer } from "../components/Footer"
import { Header_Search } from "../components/Header_Search"
import { List_Characters } from "../components/List_Characters"
import { SideBar_Filter } from "../components/SideBar_Filter"

export const Main_Page = () => {
    return (
        <main className="dark bg-black px-20 h-screen w-screen">
            <div className="grid grid-cols-6 grid-rows-14 gap-2 text-center h-full">
                <SideBar_Filter/>
                <Header_Search/>
                <List_Characters/>
                <Footer/>
            </div>
        </main>
    )
}