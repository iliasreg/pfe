import Image from "next/image"
import Link from "next/link"

const handleLike = () => {
  //TODO: need authentication to handle liking books
  console.log("liked book")
}

const BookCard = ({id, title, thumbnailUrl, authors}) => {
  
  return (
    <div className="relative bg-white w-[230px] h-[330px] flex flex-col justify-start items-center gap-2 rounded-xl shadow-xl shadow-stone-400 p-4 overflow-scroll">
        {/* // TODO: add heart icon with z-index */}
        <Image src="/icons/heartIcon.svg" alt="heartIcon" width={20} height={20} className="absolute top-2 left-2 cursor-pointer" onClick={handleLike}/>
        <Image src={thumbnailUrl} alt="coverImage" width={170} height={220} className="object-contain h-[75%]" />
        <h1 className="font-bold text-[1rem] text-center h-[15%] text-nowrap flex items-center">{title}</h1>
        <h3 className="font-semibold text-sm text-stone-700">{authors[0]}</h3>
        <Link href={`/books/${id}`}><button className="bg-black text-white px-4 py-[.25rem] rounded-lg">Voir plus</button></Link>
    </div>
  )
}

export default BookCard