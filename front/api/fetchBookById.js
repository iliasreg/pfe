export const fetchBookById = async (id) => {
    let API_URI = process.env.API_URI;
    const res = await fetch("http://localhost:8000/getbook/"+id);
    if(!res) throw new Error("Couldn't fetch books with id" + id + "from API");
    return res.json();
}