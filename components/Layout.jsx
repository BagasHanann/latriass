import  Navbar  from "../components/Navbar";
import  Footer  from "../components/Footer";

export default function Layout({children}) {
    return (
        <div className="bg-gradient-to-b from-green-500 to-green-600 min-h-screen text-white">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}