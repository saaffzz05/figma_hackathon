import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div>
        <nav className=' w-screen h-[132px] bg-[#ffffff] overflow-x-hidden  fixed top-0 left-0 z-50 '>
            <div className="  flex justify-between first items-center px-[28px] py-5">
                <Image src={"/Search.png"} alt="Logo" width={16} height={16} className="top-[26px]   "  />
                <h1 className=" width-[65px] height-[30px]  leading-[29.5px] text-[24px] text-[#22202E]  ">Avion</h1>
                <div className="flex gap-4 ">
                <Link href="/shoping_basket"><Image src={"/Shopping--cart.png"} alt="Logo" width={16} height={16} className="top-[26px] left-[1364px] " /></Link>
                <Image src={"/User--avatar.png"} alt="Logo" width={16} height={16} className="top-[26px] left-[1396px] " />
                </div>
            </div>
            <div className=" border-[1px]  width-[1368px]  rotate-0 bg-[#000000] bg-opacity-10 second mx-[28px] "></div>
            <div className=" width-[675px] height-[22px]  left-[382px]   third">
                <ul className='text-[16px] leading-[21.6px] flex text-[#726E8D] gap-11 justify-center py-[20px]'>
                <Link href="/listing">Plant pots</Link>
                <Link href="#ceramics">Ceramics</Link>
                <li>Tables</li>
                <li>Chairs</li>
                <li>Crockery</li>
                <li>Tableware</li>
                <li>Cutlery</li></ul>
            </div>
        </nav>
    </div>
  );
}