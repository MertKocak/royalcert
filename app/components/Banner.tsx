import Link from "next/link"

export default function Example() {
    return (
        <div className="relative mt-1">
            <img src="/banner_img.jpg" alt="Logo" className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center text-5xl text-white bg-black bg-opacity-50">
                ACCREDITATION CERTIFICATES</div>
        </div>
    )
}
