import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {

    //sosyal medya linkleri için fonksiyon
    function socialMedia(logo: string) {
        return (
            <Link href={"/"}>
                <div className='border rounded-[4px] border-gray-300 align-middle justify-center items-center h-[24px] w-[24px] mr-3 mt-6 p-1'>
                    <Image src={logo}
                        alt={logo}
                        width={18}
                        height={18}
                        className='' />
                </div>
            </Link>
        );
    }

    //footer linkleri için fonksiyon
    function footerLink(name: string) {
        return (
            <Link className='text-xs text-gray-500 font-semibold mt-[10px] w-36 ' href={"/"}>
                {name}
            </Link>
        );
    }

    //iletişim bilgileri için fonksiyon
    function contactInfo(name: string, image: string) {
        return (
            <div className='flex flex-row items-start mb-4'>
                <Image src={image}
                    alt={image}
                    width={16}
                    height={16}
                    className='mr-3' />
                <p className='text-xs text-gray-500 font-semibold'>
                    {name}
                </p>
            </div>
        );
    }

    return (
        <footer className="flex flex-row items-center justify-center mx-44">
            <div className="my-16 mr-8 h-40">
                <Image
                    src="/logo.jpg"
                    alt="logo"
                    width={60}
                    height={60}
                    className="rounded-sm"
                />
                <div className='flex flex-row'>
                    {socialMedia("/instagram.png")}
                    {socialMedia("/facebook.png")}
                    {socialMedia("/twitter.png")}
                    {socialMedia("/youtube.png")}
                    {socialMedia("/linkedin.png")}
                </div>
                <div className='mt-[22px] flex flex-row items-center'>
                    <Image
                        src="/world.png"
                        alt="logo"
                        width={18}
                        height={18}
                        className="mr-2"
                    />
                    <p className='text-xs text-red-600 font-semibold w-60'>Powered by RoyalCert International</p>
                </div>
            </div>
            <div className='items-start flex flex-row my-16 ml-4 h-40'>
                <div className='flex flex-col mr-6'>
                    <p className='text-red-600 text-xs font-semibold '>Links</p>
                    {footerLink("About Us")}
                    {footerLink("Accreditation")}
                    {footerLink("Energy")}
                    {footerLink("Project Management")}
                    {footerLink("Tax and Consultancy")}
                </div>
                <div className='flex flex-col mr-6  mt-4'>
                    {footerLink("Regulations")}
                    {footerLink("Offices")}
                    {footerLink("Privacy and KVKK")}
                    {footerLink("Corporate identity")}
                    {footerLink("Application")}
                </div>
            </div>

            <div className='flex flex-col ml-36 my-16 h-40'>
                <p className='text-red-600 text-xs font-semibold mb-3'>Contacts</p>
                {contactInfo("info@royalcert.com", "/mail-gray.png")}
                {contactInfo("+90 216 688 09 10", "/telephone.png")}
                {contactInfo("İçerenköy Mahallesi Karaman Çiftliği Yolu Caddesi Kar Plaza Kat:13, 34752 Ataşehir", "/pin.png")}
            </div>
        </footer>
    );
};

export default Footer;
