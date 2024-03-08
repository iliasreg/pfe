"use client";

import Image from "next/image";
import BookCard from "../helpers/BookCard";
import { useState, useEffect } from "react";

const Pagination = () => {

    const [books, setBooks] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:8000/getbooks")
            .then((res) => res.json())
            .then((data) => {
                setBooks(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <div className="flex items-center justify-center"><Image src="/loadingCircle.svg" alt="Loading..." width={32} height={32}/></div>
    if (!books) return <p>No profile data</p>

    return (
        <div className="w-full h-screen bg-stone-50 flex justify-center items-center flex-wrap gap-4 my-16 py-8 overflow-scroll border-2 border-stone-400">
            {books?.slice(0, 15).map(book => {
                return <BookCard key={book.isbn} id={book.id} title={book.title} thumbnailUrl={book.thumbnailUrl} authors={book.authors} />
            })}
        </div>
    )
}

export default Pagination