"use client";

import Image from "next/image"
import Link from "next/link";
import { useState, useEffect } from "react"

const Showcase = () => {

    const [mostLikedBook, setMostLikedBook] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:8000/getmostliked")
            .then((res) => res.json())
            .then((data) => {
                setMostLikedBook(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <div className="flex items-center justify-center"><Image src="/loadingCircle.svg" alt="Loading..." width={32} height={32}/></div>
    if (!mostLikedBook) return <p>No profile data</p>

    return (
        <div>
            {/* <marquee behavior="" direction="right"><h1 className="font-thin text-lg">Checkout our latest news</h1></marquee> */}
            <div className=" w-full h-[500px] flex justify-center items-center gap-6 flex-wrap bg-white overflow-scroll">
                <Image src={mostLikedBook?.thumbnailUrl} alt="coverImage" width={280} height={300} className="bg-green-300 object-contain" />
                <div className="w-[40%] text-center flex flex-col gap-4 justify-center items-center overflow-scroll">
                    <h1 className="font-bold text-4xl ">{mostLikedBook?.title}</h1>
                    <h3 className="font-semibold text-lg text-yellow-500">{mostLikedBook?.authors.map(author => { return <span className="mx-2">{author}</span>})}</h3>
                    <p className="text-md font-thin">{mostLikedBook?.shortDescription}</p>
                    <p className="font-bold text-lg text-yellow-500"><span className="text-black">Pages:</span> {mostLikedBook?.pageCount}</p>
                    <Link href={`/books/${mostLikedBook?.id}`}><button className="bg-black px-8 py-[.35rem] rounded-lg text-white font-bold text-sm">View</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Showcase