import React from 'react'
import Link from 'next/link'


type Props = {}

export default function contact({ }: Props) {

    function LogoCard(image: string) {
        return (
            <div className="bg-white mx-2 w-40 px-6 py-5 rounded-xl">
                <img src={image} alt="img" className="h-28 w-full object-contain" />
            </div>
        )
    }

    function DocCard(title: string, image: string) {
        return (
            <div className="bg-white mx-4 w-56 py-4 px-4 items-start rounded-xl">
                <img src={image} alt="img" className="h-14 w-14 object-contain" />
                <div className='flex flex-row  mt-6 justify-between'>
                    <p className='text-black  mt-2 text-sm font-semibold w-3' >{title}</p>
                    <div className='bg-red-700 rounded-full h-8 w-8 mt-4 content-center'>
                        <img src="/downloads.png" alt="img" className="h-4 w-4 ml-2" />
                    </div>
                </div>

            </div>
        )
    }

    function Content(content: string) {
        return (
            <div className="flex flex-row mb-2">
                <img src="/check.png" alt="img" className="h-4 w-4 object-contain mr-2" />
                <p className="text-black text-xs">{content}</p>
            </div>
        )
    }

    return (
        <div className='bg-red-800 rounded-br-[200px] h-[4500px]'>
            <div className='flex flex-col '>
                {/** ilk kısım */}
                <div className='relative'>
                    <img src="/accreditation-img1.jpg" alt="img" className="object-cover w-full h-[560px]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-800 to-transparent content-end">
                        <div className='text-white flex flex-col text-start'>
                            <p className='text-2xl ml-28 mb-16'>Accreditation; competence, authority or reliability<br></br>It is a process that includes certification.</p>
                            <div className='items-center justify-center text-center mt-6'>
                            </div>
                        </div>
                    </div>
                </div>
                {/**ikinci kısım */}
                <div className='flex flex-col bg-black pb-28'>
                    <div className="px-40 flex flex-row mt-12">
                        <img src="/accreditation-img2.jpg" alt="img" className="h-96  rounded-3xl" />
                        <div className="flex flex-col justify-center ml-16 mr-12">
                            <p className="text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend gravida tortor vitae vestibulum. Etiam faucibus efficitur rutrum. Vivamus at gravida ante, sed pellentesque enim. Mauris congue tortor sapien, non tempus libero lobortis ullamcorper.<br></br><br></br>Morbi pharetra vulputate lectus sodales semper. Maecenas feugiat hendrerit euismod. Proin maximus pretium eros sit amet aliquam. Nunc eget ex eu diam commodo elementum. Nam vestibulum viverra risus in viverra. Sed vel tellus metus. Etiam elit mi, lobortis quis lacus nec, bibendum tincidunt diam. Integer tempor dapibus convallis. Mauris eu scelerisque lacus. Donec laoreet tincidunt nisl, non eleifend quam mattis eu. Nunc a imperdiet velit. Nullam faucibus semper augue ut volutpat.</p>
                        </div>
                    </div>
                    <div className="px-40 flex flex-row mt-12">
                        <div className="flex flex-col justify-center mr-20">
                            <p className="text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend gravida tortor vitae vestibulum. Etiam faucibus efficitur rutrum. Vivamus at gravida ante, sed pellentesque enim. Mauris congue tortor sapien, non tempus libero lobortis ullamcorper.<br></br><br></br>Morbi pharetra vulputate lectus sodales semper. Maecenas feugiat hendrerit euismod. Proin maximus pretium eros sit amet aliquam. Nunc eget ex eu diam commodo elementum. Nam vestibulum viverra risus in viverra. Sed vel tellus metus. Etiam elit mi, lobortis quis lacus nec, bibendum tincidunt diam. Integer tempor dapibus convallis. Mauris eu scelerisque lacus. Donec laoreet tincidunt nisl, non eleifend quam mattis eu. Nunc a imperdiet velit. Nullam faucibus semper augue ut volutpat.</p>
                        </div>
                        <img src="/accreditation-img3.jpg" alt="img" className="h-96 rounded-3xl" />
                    </div>
                </div>
                {/**üçüncü kısım */}
                <div className='bg-gray-100 pt-12 pb-24'>
                    <p className='text-black text-2xl mb-10 font-semibold text-center'>All Our Authorizations and<br></br>Accreditations</p>
                    <div className='flex flex-col items-center'>
                        <div className='flex flex-row'>
                            {LogoCard("/accreditation-img4.jpg")}
                            {LogoCard("/accreditation-img5.jpg")}
                            {LogoCard("/accreditation-img6.jpg")}
                            {LogoCard("/accreditation-img7.jpg")}
                        </div>
                        <div className='flex flex-row mt-4'>
                            {LogoCard("/accreditation-img8.jpg")}
                            {LogoCard("/accreditation-img9.jpg")}
                            {LogoCard("/accreditation-img10.jpg")}
                            {LogoCard("/accreditation-img11.jpg")}
                        </div>
                    </div>
                </div>
                {/**dördüncü kısım */}
                <div className='bg-white py-12 justify-center'>
                    <div className="px-40 flex flex-row">
                        <div className="flex flex-col justify-center ml-24 mr-12">
                            <p className="text-gray-800 text-xs mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="text-black font-bold text-2xl mb-1">by (UAF)</p>
                            <p className="text-black font-semibold text-xs mb-4">Lorem ipsum dolor sit amet, consectetur.</p>
                            {Content("Morbi pharetra vulputate lectus sodales semper.")}
                            {Content("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")}
                            {Content("Morbi pharetra vulputate lectus sodales semper.")}
                            {Content("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")}
                            {Content("Morbi pharetra vulputate lectus sodales semper.")}
                            {Content("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")}
                        </div>
                        <img src="/accreditation-img13.jpg" alt="img" className="h-96 ml-24 rounded-3xl" />
                    </div>
                </div>
                {/** beşinci kısım */}
                <div className='bg-red-700 py-28 items-center'>
                    <div className=" px-40 flex flex-row">
                        <div className="flex flex-col justify-center mr-20">
                            <p className="text-white text-sm mr-40 ml-20">Morbi pharetra vulputate lectus sodales semper. Maecenas feugiat hendrerit euismod. Proin maximus pretium eros sit amet aliquam. Nunc eget ex eu diam commodo elementum. Nam vestibulum viverra risus in viverra. Sed vel tellus metus. Etiam elit mi, lobortis quis lacus nec, bibendum tincidunt diam. Integer tempor dapibus convallis. Mauris eu scelerisque lacus. Donec laoreet tincidunt nisl, non eleifend quam mattis eu. Nunc a imperdiet velit. Nullam faucibus semper augue ut volutpat.</p>
                        </div>
                        <div className='relative h-full w-full mr-20'>
                            <img src="/accreditation-img12.png" alt="img" className="h-full w-full object-contain mr-20" />
                            <div className="absolute inset-0 bg-black opacity-50 rounded-full"></div>
                        </div>
                    </div>
                </div>
                {/** altıncı kısım */}
                <div className='bg-white py-16'>
                    <div className="px-40 flex flex-row">
                        <div className="flex flex-col justify-center ml-16 mr-12">
                            <p className="text-black font-semibold text-2xl mb-1">Goals in Accreditation</p>
                            <img src="/accreditation-img14.jpg" alt="img" className="h-96 mt-6 rounded-3xl" />
                        </div>
                        <div className='flex flex-col ml-8'>
                            {Content("Morbi pharetra vulputate lectus sodales semper.")}
                            {Content("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")}
                            {Content("Morbi pharetra vulputate lectus sodales semper.")}
                            {Content("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")}
                            <div className='bg-red-600 rounded-2xl mt-4 w-[500px]'>
                                <p className='text-white text-xs py-8 px-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend gravida tortor vitae vestibulum. Etiam faucibus efficitur rutrum. Vivamus at gravida ante, sed pellentesque enim. Mauris congue tortor sapien, non tempus libero lobortis ullamcorper. Morbi pharetra vulputate lectus sodales semper. Maecenas feugiat hendrerit euismod. Proin maximus pretium eros sit amet aliquam. Nunc eget ex eu diam commodo elementum. Nam vestibulum viverra risus in viverra. Sed vel tellus metus. Etiam elit mi, lobortis quis lacus nec, bibendum tincidunt diam. Integer tempor dapibus convallis. Mauris eu scelerisque lacus. Donec laoreet tincidunt nisl, non eleifend quam mattis eu. Nunc a imperdiet velit. Nullam faucibus semper augue ut volutpat.</p>
                            </div>
                            <img src="/accreditation-img15.jpg" alt="img" className="h-32 w-60 mt-6 rounded-3xl" />
                        </div>

                    </div>
                </div>
                {/** yedinci kısım */}
                <div className='bg-gray-100 py-16 rounded-br-[220px] h-[780px]'>
                    <div className="px-40 flex flex-row">
                        <div className="flex flex-col items-center ml-16 mr-12">
                            <p className="text-black font-semibold text-2xl mb-1">Documentation</p>
                            <img src="/accreditation-img16.jpg" alt="img" className="h-96 mt-6 rounded-3xl" />
                            <div className='flex flex-row mt-8'>
                                {DocCard("LOREM IPSUM", "/doc1.jpg")}
                                {DocCard("LOREM IPSUM", "/doc2.jpg")}
                                {DocCard("LOREM IPSUM", "/doc3.jpg")}
                                {DocCard("LOREM IPSUM", "/doc4.jpg")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}