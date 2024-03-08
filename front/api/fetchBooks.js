export const fetchBooks = async () => {
    let API_URI = process.env.API_URI;
    const res = await fetch("http://localhost:8000/getbooks");
    if(!res) throw new Error("Couldn't fetch books from API");
    return res.json();
}