import Image from "next/image";
import Link from "next/link";

export default function Home() {

    function contentText(content: string) {
        return (
            <div className="flex flex-row mt-2 mb-2">
                <img src="/check-mark.png" alt="img" className="h-4 mr-2" />
                <p className="text-black text-xs">{content}</p>
            </div>
        )
    }
    return (
        <div >
            <div className="bg-red-800 rounded-br-[200px] h-[3280px]">
                <div className="flex flex-col h-[3240px] rounded-br-[220px] bg-white">
                    {/**Sustainable Tourism */}
                    <div className="bg-green-800 mb-4 py-24 flex flex-row px-48 h-[540px] relative">
                        <Image
                            src="/bg.png"
                            alt="bg"
                            layout="fill"
                            objectFit="cover"
                            className="z-0 flex"
                        />
                        <div className="flex flex-row mr-60 justify-center items-center absolute">
                            <div className="flex flex-col">
                                <p className="text-5xl text-white">Sustainable<br></br>Tourism</p>
                                <p className="text-md text-white mt-6 pr-64">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend gravida tortor vitae vestibulum.</p>
                            </div>
                            <img src="/Sustainability-image2.jpg" alt="img" className="h-80 rounded-full" />
                        </div>

                    </div>
                    {/** Sustainability Tourism Why */}
                    <div className="px-40 flex flex-row my-4 py-6">
                        <img src="/Sustainability-image1.jpg" alt="img" className="h-96 my-8" />
                        <div className="flex flex-col justify-center ml-6">
                            <h2 className="text-black font-normal text-5xl">Sustainability Tourism Why</h2>
                            <p className="text-black text-xs mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend gravida tortor vitae vestibulum. Etiam faucibus efficitur rutrum. Vivamus at gravida ante, sed pellentesque enim. Mauris congue tortor sapien, non tempus libero lobortis ullamcorper.<br></br><br></br>Morbi pharetra vulputate lectus sodales semper. Maecenas feugiat hendrerit euismod. Proin maximus pretium eros sit amet aliquam. Nunc eget ex eu diam commodo elementum. Nam vestibulum viverra risus in viverra. Sed vel tellus metus. Etiam elit mi, lobortis quis lacus nec, bibendum tincidunt diam. Integer tempor dapibus convallis. Mauris eu scelerisque lacus. Donec laoreet tincidunt nisl, non eleifend quam mattis eu. Nunc a imperdiet velit. Nullam faucibus semper augue ut volutpat.</p>
                        </div>
                    </div>
                    {/**tr-i scope */}
                    <div className="px-40 flex flex-row my-4 py-6 bg-green-100">
                        <div className="flex flex-col justify-center mx-6">
                            <h2 className="text-black text-xs mb-4 font-medium">Lorem ipsum dolor sit amet</h2>
                            <h2 className="text-black font-normal text-5xl mb-4">(TR-I) Scope</h2>
                            {contentText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend gravida tortor vitae vestibulum. Etiam faucibus efficitur rutrum. Vivamus at gravida ante, sed pellentesque enim. Mauris congue tortor sapien, non tempus libero lobortis ullamcorper. Morbi pharetra vulputate lectus sodales semper.")}
                            {contentText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend gravida tortor vitae vestibulum. Etiam faucibus efficitur rutrum.")}
                            {contentText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend gravida tortor vitae vestibulum. Etiam faucibus efficitur rutrum. Vivamus at gravida ante, sed pellentesque enim. Mauris congue tortor sapien, non tempus libero lobortis ullamcorper. Morbi pharetra vulputate lectus sodales semper.")}
                            {contentText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend gravida tortor vitae vestibulum. Etiam faucibus efficitur rutrum.")}
                            <div className="flex flex-row space-x-6 mt-4  items-center ">
                                <Link href={"/"} className='px-8 py-1 bg-red-700 rounded-md text-sm text-white flex flex-row'>
                                    Button
                                </Link>
                                <Link href={"/"} className='px-8 py-1 bg-red-700 rounded-md text-sm text-white flex flex-row'>
                                    Button
                                </Link>
                                <p className="text-black text-xs">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend gravida tortor vitae vestibulum. Etiam faucibus efficitur rutrum.
                                </p>
                            </div>
                        </div>
                        <img src="/Sustainability-image4.png" alt="img" className="h-96 my-8" />
                    </div>
                    {/**what is the purpose */}
                    <div className="px-40 flex flex-row my-4 py-6 bg-white">
                        <img src="/Sustainability-image6.jpg" alt="img" className="h-[640px] my-8 rounded-xl mr-4" />
                        <div className="flex flex-col justify-center mx-6">
                            <h2 className="text-red-600 text-xs mb-4 font-medium">Lorem ipsum dolor sit amet</h2>
                            <h2 className="text-black font-normal text-5xl mb-3">What is the purpose and Scope of Application?</h2>
                            {contentText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend gravida tortor vitae vestibulum. ")}
                            {contentText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend gravida tortor vitae vestibulum. Etiam faucibus efficitur rutrum. Vivamus at gravida ante, sed pellentesque enim. Mauris congue tortor sapien, non tempus libero lobortis ullamcorper.")}
                            {contentText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend gravida tortor vitae vestibulum. Etiam faucibus efficitur rutrum. Vivamus at gravida ante, sed pellentesque enim.")}
                            {contentText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend gravida tortor vitae vestibulum. Etiam faucibus efficitur rutrum. Vivamus at gravida ante, sed pellentesque enim.")}
                            {contentText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend gravida tortor vitae vestibulum. Etiam faucibus efficitur rutrum. Vivamus at gravida ante, sed pellentesque enim. Mauris congue tortor sapien, non tempus libero lobortis ullamcorper.")}
                            {contentText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend gravida tortor vitae vestibulum. Etiam faucibus efficitur rutrum. Vivamus at gravida ante, sed pellentesque enim.")}
                            {contentText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend gravida tortor vitae vestibulum. Etiam faucibus efficitur rutrum. Vivamus at gravida ante, sed pellentesque enim.")}
                            {contentText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend gravida tortor vitae vestibulum. Etiam faucibus efficitur rutrum. Vivamus at gravida ante, sed pellentesque enim. Mauris congue tortor sapien, non tempus libero lobortis ullamcorper.")}
                            {contentText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend gravida tortor vitae vestibulum. Etiam faucibus efficitur rutrum. Vivamus at gravida ante, sed pellentesque enim.")}
                        </div>
                    </div>
                    {/** applicaiton form */}
                    <div className="px-40 flex flex-row mt-8 pb-24 pt-4 bg-gray-100 rounded-br-[220px] justify-center">
                        <div className="flex flex-col justify-start mt-16 mx-6">
                            <h2 className="text-black font-normal text-4xl mb-4">Sustainable Tourism<br></br>Application Form</h2>
                            <form className="w-[580px] mr-8">
                                <div className="col-span-full mb-6 mt-2">
                                    <label htmlFor="asama" className="block text-xs font-bold text-black">
                                        Lütfen aşama seçiniz*
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="asama"
                                            name="asama"
                                            className="block w-full text-xs rounded-md border-0 py-1.5 px-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-gray-500"
                                        >
                                            <option className="text-xs">Aşama 1</option>
                                            <option className="text-xs">Aşama 2</option>
                                            <option className="text-xs">Aşama 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-span-full mb-6">
                                    <label htmlFor="firma-adi" className="block text-xs font-bold text-black">
                                        Firma Adı*
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="firma-adi"
                                            name="firma-adi"
                                            type="text"
                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-xs sm"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row mb-6 space-x-4">
                                    <div className="w-[300px]">
                                        <label htmlFor="bir-soru" className="block text-xs font-bold text-black">
                                            Bir Soru*
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="bir-soru"
                                                name="bir-soru"
                                                type="text"
                                                className="block w-full rounded-md border-0 py-1.5 px-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-xs sm"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-[300px]">
                                        <label htmlFor="last-name" className="block text-xs font-bold text-black">
                                            Ünvan*
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="unvan"
                                                name="unvan"
                                                type="text"
                                                className="block w-full rounded-md border-0 py-1.5 px-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-xs sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row mb-6 space-x-4">
                                    <div className="w-[300px]">
                                        <label htmlFor="e-posta" className="block text-xs font-bold text-black">
                                            E-posta*
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="e-posta"
                                                name="e-posta"
                                                type="text"
                                                className="block w-full rounded-md border-0 py-1.5 px-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-xs sm"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-[300px]">
                                        <label htmlFor="telefon" className="block text-xs font-bold text-black">
                                            Telefon*
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="telefon"
                                                name="telefon"
                                                type="text"
                                                className="block w-full rounded-md border-0 py-1.5 px-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-xs sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-full mb-6">
                                    <label htmlFor="adres" className="block text-xs font-bold text-black">
                                        Adres*
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="adres"
                                            name="adres"
                                            rows={4}
                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-xs sm"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                                <div className="col-span-full mb-2">
                                    <label htmlFor="mesajiniz" className="block text-xs font-bold text-black">
                                        Mesajınız*
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="mesajiniz"
                                            name="mesajiniz"
                                            rows={4}
                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-xs sm"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>

                                <div className="relative flex mb-2">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="kvkk"
                                            name="kvkk"
                                            type="checkbox"
                                            className="h-4 w-4 rounded-xl border-gray-300 text-gray-500 focus:ring-gray-500 "
                                        />
                                    </div>
                                    <div className="text-xs font-bold flex flex-row ml-2 items-center">
                                        <p className="text-black">Burayı Tıklayarak Kabul Etmiş Olursunuz. </p>
                                        <Link href={"/"} className="text-red-600 underline ml-1">KVKK Genel Aydınlatma Metni</Link>
                                    </div>
                                </div>
                            </form>
                            <div className="flex flex-row space-x-6 mt-0">
                                <Link href={"/"} className='px-16 py-1 bg-red-700 rounded-md font-semibold text-sm text-white flex flex-row'>
                                    SEND
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <img src="/Sustainability-image5.jpg" alt="img" className="h-[480px] mt-16 mb-8 rounded-xl" />
                            <img src="/Sustainability-image3.png" alt="img" className="h-40 object-contain ml-12 rounded-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
