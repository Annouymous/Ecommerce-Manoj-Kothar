import Eli from "@/public/elements/5190435.jpg";
import Image from "next/image";
import { Merienda } from "next/font/google";

const MeriendaFont = Merienda({
  weight: ["900"],
  style: ["normal"],
  display: "block",
  variable: "--merienda",
  subsets: ["latin"],
});
export default function NotFound() {
  return (
    <div
      className={`${MeriendaFont.className} flex h-screen w-full flex-row items-center justify-between bg-[#afafaf]`}
    >
      <div className="mx-10 flex grow flex-col items-start gap-8">
        <h1 className="text-center text-6xl text-gray-800">404</h1>
        <p className="text-center text-7xl text-gray-500">Page Not Found</p>
        <p className="text-center text-xl text-gray-500">
          Sorry, the page you're looking for doesn't exist.
        </p>

        <a
          href="/"
          className="bg-gray-800 px-8 py-4 text-white hover:bg-gray-900"
        >
          Back to Home
        </a>
      </div>
      <Image className="flex h-full w-auto" src={Eli} alt="Eli"></Image>
    </div>
  );
}
