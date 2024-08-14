import Link from "next/link"

export default function Example() {
    return (
       <div>
         <div className=" flex bg-gray-500 py-3 justify-center">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
                <Link href="/" className="text-white hover:text-gray-100 text-xs">
                    Institutional
                </Link>
                <Link href="/" className="text-white hover:text-gray-100 text-xs">
                    Sectors
                </Link>
                <Link href="/" className="text-white hover:text-gray-100 text-xs">
                    Services
                </Link>
                <Link href="/" className="text-white hover:text-gray-100 text-xs">
                    Sustainability
                </Link>
                <Link href="/" className="text-white hover:text-gray-100 text-xs">
                    Applications
                </Link>
                <Link href="/" className="text-white hover:text-gray-100 text-xs">
                    Regulations
                </Link>
                <Link href="/" className="text-white hover:text-gray-100 text-xs">
                    Gallery
                </Link>
                <Link href="/" className="text-white hover:text-gray-100 text-xs">
                    Contact
                </Link>
                <Link href="/" className="text-white hover:text-gray-100 text-xs">
                    News
                </Link>
                <Link href="/" className="text-white hover:text-gray-100 text-xs">
                    Global News
                </Link>
                <Link href="/" className="text-white hover:text-gray-100 text-xs">
                    News
                </Link>
                <Link href="/" className="text-white hover:text-gray-100 text-xs">
                    Global News
                </Link>
            </div>
        </div>
        <div className="relative">
        <img src="/banner_img.jpg" alt="Logo" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center text-5xl text-white bg-black bg-opacity-50">
            ACCREDITATION CERTIFICATES</div>
        </div>
       </div>
        
    )
}
