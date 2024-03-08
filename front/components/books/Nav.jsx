import Link from "next/link"

const Nav = () => {
    return (
        <div className=" w-full h-[10%] flex flex-col justify-start items-center gap-4 flex-wrap my-8">
            <nav className="w-full h-12 flex justify-center items-center gap-8">
                <Link href="/"><p className="text-lg font-extrabold">BiblioGest</p></Link>
                <input type="text" className="w-[40%] outline-none rounded-lg px-4 h-8 border-2 border-stone-300" placeholder="Search for a book" />
            </nav>
        </div>
    )
}

export default Nav