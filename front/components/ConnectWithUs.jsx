import Image from "next/image"

const ConnectWithUs = () => {
    return (
        <div className="w-full h-screen flex justify-between items-center gap-4 p-8 scroll-smooth snap-center">
            <div className="flex flex-col gap-6 justify-center items-startw-[60%]">
                <div className="w-full flex flex-col justify-center items-start gap-2">
                    <h1 className="text-5xl text-black font-bold">Contactez nous !</h1>
                    <h5></h5>
                </div>
                <div className="flex flex-col justify-center items-start gap-2 mt-10">
                    <Image src="/icons/email.svg" alt="emailIcon" width={38} height={38} />
                    <h3 className="text-md text-black font-bold">Email</h3>
                    <p>Send us a message today!</p>
                    <p className="text-stone-800">iliasreg18@gmail.com</p>
                </div>
                <div className="flex flex-col justify-center items-start gap-2">
                    <Image src="/icons/email.svg" alt="emailIcon" width={38} height={38} />
                    <h3 className="text-md text-black font-bold">Email</h3>
                    <p>Send us a message today!</p>
                    <p className="text-stone-800">taiqsoufiane7@gmail.com</p>
                </div>
                <div className="flex flex-col justify-center items-start gap-2">
                    <Image src="/icons/email.svg" alt="emailIcon" width={38} height={38} />
                    <h3 className="text-md text-black font-bold">Email</h3>
                    <p>Send us a message today!</p>
                    <p className="text-stone-800">abc@cd@zw</p>
                </div>
            </div>

            <div className="mt-12 mr-14h-[70%] w-[60%] flex justify-center items-center">
                <Image src="/map.png" alt="map" width={800} height={800} className="object-contain" />
            </div>
        </div>
    )
}

export default ConnectWithUs