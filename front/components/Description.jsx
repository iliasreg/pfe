import Image from "next/image"
import Link from "next/link"

const Description = () => {
    return (
        <div className='w-full h-screen bg-stone-50 flex flex-col justify-center items-center gap-6 px-12 py-16 scroll-smooth snap-center'>
            <div className="w-full flex justify-around">
                <h1 className="text-5xl font-extrabold">Bibliothèque</h1>
                <p className="text-justify w-[650px]">Bienvenue à notre bibliothèque ! Fondée il y a plusieurs décennies, notre bibliothèque a pour mission de fournir un accès gratuit à la connaissance et à la culture pour tous. Nous croyons fermement que la lecture et l'apprentissage sont des éléments essentiels pour le développement personnel et la réussite dans la vie. C'est pourquoi nous nous engageons à offrir une vaste collection de livres, de magazines, de journaux et de ressources numériques pour satisfaire les besoins de tous nos visiteurs. Rejoignez-nous dès aujourd'hui et découvrez tout ce que notre bibliothèque a à offrir !</p>
            </div>
            <div className="flex justify-between items-center gap-4">
                <div className="shadow-lg shadow-stone-500 w-[33%] text-justify flex flex-col justify-center items-start gap-4 bg-white p-8 rounded-xl">
                    <svg className="w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.5777 3.38197L17.5777 4.43152C19.7294 5.56066 20.8052 6.12523 21.4026 7.13974C22 8.15425 22 9.41667 22 11.9415V12.0585C22 14.5833 22 15.8458 21.4026 16.8603C20.8052 17.8748 19.7294 18.4393 17.5777 19.5685L15.5777 20.618C13.8221 21.5393 12.9443 22 12 22C11.0557 22 10.1779 21.5393 8.42229 20.618L6.42229 19.5685C4.27063 18.4393 3.19479 17.8748 2.5974 16.8603C2 15.8458 2 14.5833 2 12.0585V11.9415C2 9.41667 2 8.15425 2.5974 7.13974C3.19479 6.12523 4.27063 5.56066 6.42229 4.43152L8.42229 3.38197C10.1779 2.46066 11.0557 2 12 2C12.9443 2 13.8221 2.46066 15.5777 3.38197Z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path opacity="0.5" d="M21 7.5L12 12M12 12L3 7.5M12 12V21.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                    <h3 className="font-bold text-lg text-stone-800">Empruntez avec Simplicité !</h3>
                    <p className="font-thin text-sm">Découvrez notre politique de prêt conçue pour rendre l'accès à notre collection aussi facile que plaisant. Apprenez tout sur la durée des emprunts, les renouvellements, les frais éventuels, et assurez-vous de tirer le meilleur parti de votre expérience de prêt à la bibliothèque. Nous simplifions le processus pour que vous puissiez vous concentrer sur la découverte de nouveaux mondes à travers nos livres. Explorez notre politique de prêt dès maintenant.</p>
                    <div className="flex gap-8 justify-center items-center">
                        <button className="bg-black text-white px-6 py-2">S'inscrire</button>
                    </div>
                </div>
                <div className="shadow-lg shadow-stone-500 w-[33%] text-justify flex flex-col justify-center items-start gap-4  bg-white p-8 rounded-xl">
                    <svg className="w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.5777 3.38197L17.5777 4.43152C19.7294 5.56066 20.8052 6.12523 21.4026 7.13974C22 8.15425 22 9.41667 22 11.9415V12.0585C22 14.5833 22 15.8458 21.4026 16.8603C20.8052 17.8748 19.7294 18.4393 17.5777 19.5685L15.5777 20.618C13.8221 21.5393 12.9443 22 12 22C11.0557 22 10.1779 21.5393 8.42229 20.618L6.42229 19.5685C4.27063 18.4393 3.19479 17.8748 2.5974 16.8603C2 15.8458 2 14.5833 2 12.0585V11.9415C2 9.41667 2 8.15425 2.5974 7.13974C3.19479 6.12523 4.27063 5.56066 6.42229 4.43152L8.42229 3.38197C10.1779 2.46066 11.0557 2 12 2C12.9443 2 13.8221 2.46066 15.5777 3.38197Z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path opacity="0.5" d="M21 7.5L12 12M12 12L3 7.5M12 12V21.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                    <h3 className="font-bold text-lg text-stone-800">Explorez notre Catalogue en Ligne !</h3>
                    <p className="font-thin text-sm">Plongez dans notre vaste collection littéraire sans quitter le confort de chez vous grâce à notre Catalogue en Ligne intuitif. Que vous soyez à la recherche de classiques intemporels, de nouveautés passionnantes ou de ressources spécialisées, notre catalogue en ligne est votre passerelle vers un univers de connaissances.</p>
                    <div className="flex gap-8 justify-center items-center">
                        <Link href="/books"><button className="black-hover border-black px-12 border-2 text-black py-2">En Savoir Plus</button></Link>
                        <button className="bg-black text-white px-6 py-2">S'inscrire</button>
                    </div>
                </div>
                <div className="shadow-lg shadow-stone-500 w-[33%] text-justify flex flex-col justify-center items-start gap-4  bg-white p-8 rounded-xl">
                    <svg className="w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.5777 3.38197L17.5777 4.43152C19.7294 5.56066 20.8052 6.12523 21.4026 7.13974C22 8.15425 22 9.41667 22 11.9415V12.0585C22 14.5833 22 15.8458 21.4026 16.8603C20.8052 17.8748 19.7294 18.4393 17.5777 19.5685L15.5777 20.618C13.8221 21.5393 12.9443 22 12 22C11.0557 22 10.1779 21.5393 8.42229 20.618L6.42229 19.5685C4.27063 18.4393 3.19479 17.8748 2.5974 16.8603C2 15.8458 2 14.5833 2 12.0585V11.9415C2 9.41667 2 8.15425 2.5974 7.13974C3.19479 6.12523 4.27063 5.56066 6.42229 4.43152L8.42229 3.38197C10.1779 2.46066 11.0557 2 12 2C12.9443 2 13.8221 2.46066 15.5777 3.38197Z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path opacity="0.5" d="M21 7.5L12 12M12 12L3 7.5M12 12V21.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                    <h3 className="font-bold text-lg text-stone-800">Explorez notre programme culturel !</h3>
                    <p className="font-thin text-sm">Découvrez une palette d'événements captivants, d'ateliers inspirants et d'activités culturelles. De la littérature aux arts, plongez-vous dans un monde d'apprentissage et de divertissement. Consultez notre calendrier régulièrement pour rester à l'affût des dernières expériences culturelles et promotion offertes par votre bibliothèque.</p>
                    <div className="flex gap-8 justify-center items-center">
                        <button className="bg-black text-white px-6 py-2">S'inscrire</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description