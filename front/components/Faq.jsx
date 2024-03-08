import Link from "next/link"

const Faq = () => {
    return (
        <div className="w-full h-screen flex justify-between items-center gap-32 px-12 scroll-smooth snap-center bg-white">
            <div className="text-justify flex flex-col justify-between items-center gap-6 w-[70%]">
                <h1 className="text-black text-5xl font-bold">FAQs</h1>
                <h6>Si vous aurez d'autre questions n'hésitez pas de nous contacter!</h6>
                <Link href="mailto:iliasreg18@gmail.com"><button className="px-4 py-2 bg-white text-black border-black border-2 rounded-lg black-hover">Contact</button></Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-8 ">
                <div className="text-justify flex flex-col justify-center items-start gap-4 bg-white p-8 rounded-xl shadow-lg shadow-stone-500 ">
                    <h3 className="font-semibold text-md">Quels sont les avantages de s'inscrire sur votre site de gestion de librairie ?</h3>
                    <p className="font-thin text-sm">L'inscription sur BiblioGest vous permet de gérer facilement votre inventaire de livres, de suivre les ventes, de recevoir des rapports détaillés sur les performances de votre librairie, et d'interagir avec vos clients de manière efficace.</p>
                </div>
                <div className="text-justify flex flex-col justify-center items-start gap-4 bg-white p-8 rounded-xl shadow-lg shadow-stone-500 ">
                    <h3 className="font-semibold text-md">Est-ce que votre site de gestion de librairie propose des outils pour suivre les ventes et les revenus ?</h3>
                    <p className="font-thin text-sm">Oui, BiblioGest offre des outils complets de suivi des ventes et des revenus. Vous pouvez consulter des rapports détaillés sur les ventes par période, par titre de livre ou par catégorie, ce qui vous permet de mieux comprendre les tendances de vente et d'optimiser votre stock en conséquence.</p>
                </div>
                <div className="text-justify flex flex-col justify-center items-start gap-4 bg-white p-8 rounded-xl shadow-lg shadow-stone-500 ">
                    <h3 className="font-semibold text-md">Est-ce que votre plateforme propose des fonctionnalités pour interagir avec les clients et promouvoir les événements de la librairie ?</h3>
                    <p className="font-thin text-sm">Oui, BiblioGest comprend des fonctionnalités de communication avec les clients, telles que l'envoi de newsletters, la publication d'annonces sur les événements à venir, et la gestion des programmes de fidélité pour fidéliser vos clients et promouvoir votre librairie.</p>
                </div>
            </div>
        </div>
    )
}

export default Faq