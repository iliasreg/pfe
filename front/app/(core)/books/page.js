import Nav from "../../../components/books/Nav"
import Showcase from "../../../components/books/Showcase"
import Pagination from "../../../components/books/Pagination"
import Footer from "../../../components/Footer"


const BooksShowcase = async () => {

    return (
    <>
        <Nav />
        <Showcase />
        <Pagination/>
        <Footer />
    </>
  )
}

export default BooksShowcase