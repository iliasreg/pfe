import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex justify-between gap-2 items-center px-8 w-[75%] h-16 bg-white text-black m-10 rounded-xl">
      <Link href="/"><p className="text-lg font-extrabold">BiblioGest</p></Link>
      <ul className="flex justify-center gap-4">
        <Link href="/"><li>Acceuil</li></Link>
        <Link href="/books"><li>Bibliotheque</li></Link>
        <Link href=""><li>Recherche</li></Link>
        <Link href=""><li>Categorie</li></Link>
      </ul>
      <button className="text-white bg-black px-4 py-[.4rem] rounded-lg">S'inscrire</button>
    </nav>
  )
}

export default Navbar