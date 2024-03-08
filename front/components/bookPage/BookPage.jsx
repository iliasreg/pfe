"use client;"

import Image from "next/image"
import { usePathname } from "next/navigation";
import { useState, useEffect } from 'react'

const BookPage = () => {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    const path = usePathname();
    const id = path.split("/")[2];

    useEffect(() => {
        fetch("http://localhost:8000/getbook/" + id)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <div className="flex items-center justify-center"><Image src="/loadingCircle.svg" alt="Loading..." width={32} height={32}/></div>
    if (!data) return <p>No profile data</p>

    return (
        <div className='w-full h-screen bg-stone-100 flex justify-center items-center gap-4 my-16'>
            <div className='h-[50%] w-[40%] flex flex-col justify-center gap-12 items-center'>
                <Image src={data.thumbnailUrl} alt="bookCover" width={320} height={400} className="shadow-xl shadow-stone-800 object-contain" />
                <div className="flex justify-center items-center gap-8 w-full px-8 pb-4 border-b-[1px] border-black">
                    <div className="flex flex-col justify-center items-center text-center">
                        <Image src="/icons/email.svg" alt="deliveryIcon" width={28} height={28} />
                        <p className="text-sm font-normal">Fast, free, no-contact delivery</p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center">
                        <Image src="/icons/email.svg" alt="deliveryIcon" width={28} height={28} />
                        <p className="text-sm font-normal">Fast personnal session</p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center">
                        <Image src="/icons/email.svg" alt="deliveryIcon" width={28} height={28} />
                        <p className="text-sm font-normal">Free and easy returns</p>
                    </div>
                </div>
            </div>
            <div className='h-[65%] w-[50%] flex flex-col justify-start items-start gap-2 p-4'>
                <h1 className="text-5xl font-bold">{data?.title}</h1>
                <h3 className="font-semibold text-lg text-yellow-500">{data?.authors.map(author => { return <span className="mx-2">{author}</span> })}</h3>
                <h3 className="text-lg font-thin text-stone-600">{data?.shortDescription}</h3>
                <p className="text-xl font-bold">Pages: {data?.pageCount}</p>
                <div className="flex justify-center items-center gap-2">
                    <Image src="/icons/heartIcon.svg" alt="heartIcon" width={28} height={28} />
                    <p className="text-red-600 text-lg font-bold">{data?.likeCount}</p>
                </div>
                <h3 className="text-3xl font-normal text-red-600">200.00 MAD</h3>
                <form method="post" className="flex flex-col justify-start items-start gap-4">
                    <div className="flex justify-center items-center gap-4">
                        <label className="font-semibold text-stone-600 text-lg">Quantity</label>
                        <input type="number" min={0} className="rounded-lg outline-none px-2 py-[.3rem] w-32 font-normal text-stone-600 border-[1px] border-stone-600" />
                    </div>
                    <button type="submit" className="rounded-lg bg-black text-white px-4 py-[.45rem] font-bold text-[1rem]">Add To Cart</button>
                </form>
            </div>
        </div>
    )
}

export default BookPage