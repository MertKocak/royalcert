import React from 'react'
import Link from 'next/link'

type Props = {}

export default function contact({ }: Props) {

    return (
        <div className='bg-red-800 rounded-br-[200px] h-[940px]'>
            <div className="px-40 flex flex-row pb-24 pt-4 bg-white rounded-br-[220px] justify-center h-[900px]">
                <div className="flex flex-col justify-start mt-16 mx-6">
                    <h2 className="text-black font-normal text-4xl mb-6">Sürdürülebilir Turizm<br></br>Başvuru Formu</h2>
                    <form className="w-[580px] mr-8">
                        <div className="col-span-full mb-6 mt-2">
                            <label htmlFor="asama" className="block text-xs font-bold text-black">
                                Lütfen aşama seçiniz*
                            </label>
                            <div className="mt-2">
                                <select
                                    aria-placeholder='Lütfen aşama seçiniz'
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
                                    placeholder='Firma Adı'
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
                                    Adınız Soyadınız*
                                </label>
                                <div className="mt-2">
                                    <input
                                        placeholder='Adınız Soyadınız'
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
                                        placeholder='Ünvan'
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
                                        placeholder='E-posta'
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
                                        placeholder='Telefon'
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
                                    placeholder='Adres'
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
                                    placeholder='Mesajınız'
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
                    <img src="/contact-image1.jpg" alt="img" className="h-[750px] mt-16 mb-8 rounded-xl" />
                </div>
            </div>
        </div>
    )
}