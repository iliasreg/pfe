import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="w-full h-[30%] p-4 flex flex-col justify-between items-start gap-4 scroll-smooth snap-center bg-stone-50">
        <div className="flex justify-between items-center w-full">
            <div className="flex flex-col justify-center items-start gap-2">
                <h3 className="text-black font-bold text-xl">Stay Connected with Us</h3>
                <p className="text-sm font-thin">Sign up for our newsletter to receive updates</p>
            </div>
            <div className="flex justify-center items-center gap-4">
                <input type="text" name="" placeholder="Enter your Email" className="bg-white text-black px-8 py-2 border-2 border-black" />
                <button className="px-4 py-2 bg-white text-black border-black border-2 black-hover">Subscribe</button>
            </div>
        </div>
        <div className="w-full py-8 flex justify-center gap-8 items-center text-center font-medium my-4 text-stone-700">
            <ul>
                <Link href=""><li>Home</li></Link>
                <Link href=""><li>Hero</li></Link>
                <Link href=""><li>Description</li></Link>
                <Link href=""><li>FAQ</li></Link>
            </ul>
            <ul>
                <Link href=""><li>Bibliotheque</li></Link>
                <Link href=""><li>Nouveauté</li></Link>
                <Link href=""><li>Forum</li></Link>
            </ul>
            <ul>
                <Link href=""><li>Contact</li></Link>
                <Link href=""><li>Terms et Services</li></Link>
            </ul>
        </div>
        <div className="w-full flex justify-between items-center px-8 border-t-[1px] border-black py-6">
            <ul className="flex justify-center items-center gap-4 text-sm">
                <a href=""><li>© 2024 BiblioGest. All rights reserved.</li></a>
                <a href=""><li>Privacy Policy</li></a>
                <a href=""><li>Terms of Service</li></a>
                <a href=""><li>Cookies Settings</li></a>
            </ul>
            <ul className="flex justify-center items-center gap-4">
                <a href=""><li><Image src="/icons/linkedinIcon.svg" alt="linkedIn" width={24} height={24}/></li></a>
                <a href=""><li><Image src="/icons/githubIcon.svg" alt="linkedIn" width={24} height={24}/></li></a>
                <a href=""><li><Image src="/icons/youtubeIcon.svg" alt="linkedIn" width={24} height={24}/></li></a>
            </ul>
        </div>
    </div>
  )
}

export default Footer