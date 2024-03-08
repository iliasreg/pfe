import Navbar from "./Navbar"
import Link from "next/link"

const Hero = () => {
  return (
    <>
    <div className="home w-full h-screen flex flex-col justify-start items-center">
    <Navbar />
    <div className="w-full h-screen flex justify-center items-center flex-col text-white gap-12 scroll-smooth snap-center">
        <h1 className="text-7xl font-bold stroke-white text-white text-center">Bienvenue dans notre bibliothèque</h1>
        <p className="text-xl font-bold">Découvrez une multitude de ressources pour enrichir votre savoir.</p>
        <div className="flex justify-center items-center gap-4">
            <button className="border-white px-12 border-2 text-white py-2 font-bold text-lg rounded-lg hover:bg-black hover:border-black">S'inscrire</button>
            <Link href="/books"><button className="bg-white text-black px-6 py-2 font-bold text-lg border-2 border-white rounded-lg">Explorer</button></Link>
        </div>
    </div>
    </div>
    </>
  )
}

export default Hero