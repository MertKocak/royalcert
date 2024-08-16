import Image from "next/image";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <div className="bg-red-800 rounded-br-[200px] h-[574px]">
        <div className="flex flex-row my-16 pb-24 justify-center rounded-br-[220px] bg-white">
          <Image
            src="/image1.jpg"
            alt="image"
            width={540}
            height={400}
            className="rounded-3xl"
          />
          <div className="flex flex-col justify-center ml-20">
            <h2 className="text-red-700 font-bold text-xl">Information About Our Accreditation</h2>
            <p className="text-gray-500 text-xs mt-3">To see details about our accreditation click on:</p>
            <div className="mt-4 flex flex-col text-gray-500 underline text-xs">
              <Link href={"/"}>UAF</Link>
              <Link href={"/"}>TURKAK</Link>
              <Link href={"/"}>GSTC</Link>
            </div>
            <p className="mt-4 text-gray-500 font-semibold text-xs">or you can send us an email at</p>
            <div className="flex flex-row mt-6 items-center">
              <div className="px-4 py-3 bg-zinc-200 rounded-3xl text-xs text-red-600 font-medium flex flex-row">
                <Image
                  src="/mail.png"
                  alt="mailIcon"
                  width={16}
                  height={32}
                  className="mr-2"
                />
                <Link href={"/"}>
                  info@royalcert.com
                </Link>
              </div>
              <p className="text-gray-500 text-xs ml-4">to request our accreditation documents.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
