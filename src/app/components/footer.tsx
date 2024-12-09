import Image from "next/image";

export default function Footer() {
  return (<div>
<div className="w-screen  h-[380px]  relative bg-[#2A254B]">
    <div className="first  text-white ">
        <ul className=" text-white flex gap-[109px]">
            <div className=" w-[108px] h-[175px] top-[58px] absolute  left-[82px] gap-[12px]">
            <li className=" text-[16px] leading-[19.68px] w-[43px] h-[20px]">Menu <ul className=" text-[14px] leading-[18.9px] w-[108px] h-[19px]">
                <li>New arrivals</li>
                <li>Best sellers</li>
                <li>Recently viewed </li>
                <li>Popular this week</li>
                <li>All products</li>
                </ul></li>
            </div>
            
            <div className=" w-[84px] h-[206px] absolute top-[58px] left-[299px] gap-[12px]"><li className=" text-[16px] leading-[19.68px] w-[43px] h-[20px]">Categories<ul className=" text-[14px] leading-[18.9px] w-[108px] h-[19px]">
                <li>Crockery</li>
                <li>Furniture</li>
                <li>Homeware</li>
                <li>Plant pots</li>
                <li>Chairs</li>
                <li>Crockery</li>
                </ul></li></div>
            
                <div className="w-[105px] h-[175px] absolute top-[58px] left-[516px] gap-[12px]">
                <li className=" text-[16px] leading-[19.68px] w-[43px] h-[20px]">Our Company
            <ul className=" text-[14px] leading-[18.9px] w-[108px] h-[19px]">
                  <li>About us</li>
                <li>vacancies</li>
                <li>Contact us</li>
                <li>Privacy</li>
                <li>Returns policy</li>
                </ul>
            </li></div>   
           <div className="top-[58px] left-[730px] absolute"><p className=" text-[16px]  leading-[19.68px] w-[142px] h-[20px]">Join our mailing list</p>
            <input type="email" className=" border-[1px]  border-gray-300 bg-[#FFFFFF] bg-opacity-15   w-[509px] h-[56px]  left-[730px]  top-[94px] text-[16px] leading-[21.6px] text-white" placeholder="your@email.com"/>
            <button className=" w-[118px] h-[56px] text-[16px] leading-6 bg-[#FFFFFF] text-[#2A254B] py-4 px-8 gap-[10px]" >Sign up</button></div>
            
           

        </ul>
    </div>
    <div className=" border-[1px] absolute w-[1277px]  rotate-0 bg-[#4E4D93] top-[312px] left-[80px] justify-between second "></div>
    <div className="third flex   absolute top-[336px] left-[80px] ">
        <p className="w-[164px] h-[19px] text-white  text-[14px] leading-[18.9px]">Copyright 2022 Avion LTD</p>
        <div className='flex gap-6 bg-transparent relative left-[840px]  w-[264px] h-[24px]'>
            <Image src={'/Logo--linkedin.png'} alt='linkedin' width={24} height={24}/>
            <Image src={'/Logo--facebook.png'} alt='facebook' width={24} height={24}/>
            <Image src={'/Logo--Instagram.png'} alt='instagram' width={24} height={24}/>
            <Image src={'/Logo--skype.png'} alt='skype' width={24} height={24}/>
            <Image src={'/Logo--twitter.png'} alt='twitter' width={24} height={24}/>
            <Image src={'/Logo--Pinterest.png'} alt='pinterest' width={24} height={24}/>
        </div>
        
    </div>

</div>
  </div>
  )}