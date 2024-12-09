import Image from "next/image";

export default function Hero() {
  return (

    <div className='w-screen  '>
      <div className="bg-[#ffffff] relative  top-[60px] left-[90px] h-[704px] " >
        <div className="w-[1280px] absolute  h-[584px]  bg-[#2A254B] top-[60px] left-[90px] flex">

          <div className="up absolute  w-[513px] h-[187px] top-[60px]  left-[80px] ">
            <h2 className="up w-[513px] h-[90px] text-[32px] leading=[44.8px] text-white mb-[41px]" >The furniture brand for the future, with timeless designs</h2>
            <button className="w-[180px] h-[56px] px-[32px] py-[16px] gap-[10px] bg-[#F9F9F9] bg-opacity-15  text-[16px] text-[#FFFFFF] leading-[24px] ">View collection</button>
          </div>

          <Image src={'/Right Image.png'} width={520} height={584} alt="chair" className=" absolute left-[760px]" />


          <div className="last absolute w-[602px]  h-[81px] top-[443px] left-[80px] leading-[27px] text-[18px] text-white">A new era in eco friendly furniture with Avelon, the French luxury retail brand
            with nice fonts, tasteful colors and a beautiful way to display things digitally
            using modern web technologies.</div>
        </div>
      </div>

      <div className="w-screen height-[355px] ">
        <div className="w-[366px]  h-[34px] text-[24px] leading-[33.6px] mx-auto mb-[51px] mt-[60px]"><h3>What makes our brand different</h3></div>
        <div className="flex pl-[86px] pr-[110px]  pt-[60px]  pb-[86px]  ">

          <div className="w-[270px] h-[124px] mr-[59px] ">
            <Image src={'/Delivery.png'} alt='pic' width={24} height={24} className='mb-2' />
            <h4 className='text-[20px] leading-[28px] text-[#2A254B] w-[199px] h-[28px]'>Next day as standard</h4>
            <p className='text-[16px] leading-[24px] text-[#2A254B] w-[270px] h-[48px] '>Order before 3pm and get your order
              the next day as standard</p>

          </div>
          < div className="w-[266px] h-[124px] mr-[58px] ">
            <Image src={'/Checkmark--outline.png'} alt='pic' width={24} height={24} className='mb-2' />
            <h4 className='text-[20px] leading-[28px] text-[#2A254B] w-[205px] h-[28px]'>Made by true artisans</h4>
            <p className='text-[16px] leading-[24px] text-[#2A254B] w-[266px] h-[48px] '>Handmade crafted goods made with
              real passion and craftmanship</p></div>

          <div className="w-[266px] h-[124px] mr-[91px] ">
            <Image src={'/Purchase.png'} alt='pic' width={24} height={24} className='mb-2' />
            <h4 className='text-[20px] leading-[28px] text-[#2A254B] w-[196px] h-[28px]'>Unbeatable prices</h4>
            <p className='text-[16px] leading-[24px] text-[#2A254B] w-[235px] h-[48px] '>For our materials and quality you won't find better prices anywhere</p></div>


          <div className="w-[265px] h-[124px] ">
            <Image src={'/Sprout.png'} alt='pic' width={24} height={24} className='mb-2' />
            <h4 className='text-[20px] leading-[28px] text-[#2A254B] w-[196px] h-[28px]'>Recycled packaging</h4>
            <p className='text-[16px] leading-[24px] text-[#2A254B] w-[265px] h-[48px] '>We use 100% recycled packaging to ensure our footprint is manageable</p></div>

        </div>
        <div  id="ceramics" className="w-screen h-[761px] bg-white">
          <div  className=" w-[217px] h-[39px] ml-[80px] mt-[80px] mb-[33px] "><p className="text-[32px] leading-[39.39px]  text-[#2A254B] "> New ceramics</p></div>

          <div className="flex px-[80px] mb-[35px]">
            <div className="w-[305px] h-[462px] mr-[20px]">
              <Image src={'/Photo.png'} alt='pic' width={305} height={375} className='mb-6' />
              <h4 className="text-[20px] leading-[28px] text-[#2A254B] mb-[8px]">The Dandy chair</h4>
              <p className="text-[18px] leading-[27px] text-[#2A254B]">£250</p>
            </div>

            <div className="w-[305px] h-[462px] mr-[20px]">
              <Image src={'/Photo (1).png'} alt='pic' width={305} height={375} className='mb-6' />
              <h4 className="text-[20px] leading-[28px] text-[#2A254B] mb-[8px]">Rustic Vase Set</h4>
              <p className="text-[18px] leading-[27px] text-[#2A254B]">£155</p>
            </div>

            <div className="w-[305px] h-[462px] mr-[20px]">
              <Image src={'/Photo (2).png'} alt='pic' width={305} height={375} className='mb-6' />
              <h4 className="text-[20px] leading-[28px] text-[#2A254B] mb-[8px]">The Silky Vase</h4>
              <p className="text-[18px] leading-[27px] text-[#2A254B]">£125</p>
            </div>

            <div className="w-[305px] h-[462px] mr-[20px]">
              <Image src={'/Photo (3).png'} alt='pic' width={305} height={375} className='mb-6' />
              <h4 className="text-[20px] leading-[28px] text-[#2A254B] mb-[8px]">The Lucy Lamp</h4>
              <p className="text-[18px] leading-[27px] text-[#2A254B]">£399</p>
            </div>




          </div>
          <div className="w-[170px] h-[24px] mx-auto">
            <button className="  px-4 py-8 gap-[10px] bg-[#F9F9F9] text-[16px] leading-[24px]  text-[#2A254B] ">View collection</button>
          </div>
        </div>
      </div>

      <div className="w-screen h-[761px] bg-white">
        <div className=" w-[330px] h-[45px] ml-[80px] mt-[80px] mb-[33px] "><h2 className="text-[32px] leading-[39.39px]  text-[#2A254B] ">Our popular products</h2></div>

        <div className="flex px-[80px] mb-[35px]">

          <div className="w-[630px]  h-[375px] mr-[20px]">
            <Image src={'/Large.png'} alt='pic' width={630} height={375} className='mb-6 ' />
            <h4 className="text-[20px] leading-[28px] text-[#2A254B] mb-[8px]">The Poplar suede sofa</h4>
            <p className="text-[18px] leading-[27px] text-[#2A254B]">£980</p>
          </div>

          <div className="w-[305px] h-[462px] mr-[20px]">
            <Image src={'/Photo.png'} alt='pic' width={305} height={375} className='mb-6' />
            <h4 className="text-[20px] leading-[28px] text-[#2A254B] mb-[8px]">The Dandy chair</h4>
            <p className="text-[18px] leading-[27px] text-[#2A254B]">£250</p>
          </div>

          <div className="w-[305px] h-[462px] mr-[20px]">
            <Image src={'/Photo (4).png'} alt='pic' width={305} height={375} className='mb-6' />
            <h4 className="text-[20px] leading-[28px] text-[#2A254B] mb-[8px]">The Dandy chair</h4>
            <p className="text-[18px] leading-[27px] text-[#2A254B]">£250</p>
          </div>


        </div>
        <div className="w-[170px] h-[24px] mx-auto">
          <button className="  px-4 py-8 gap-[10px] bg-[#F9F9F9] text-[16px] leading-[24px]  text-[#2A254B] ">View collection</button>
        </div>
      </div>


      <div className="w-screen h-[481px] bg-[#F9F9F9] mx-auto">
        

        <div className="w-[571px] h-[114px] mt-[120px] ml-[444px] mr-[425px] mb-[72px]  mx-auto">
          <div className=" w-[571px] h-[50px] text-4xl leading-[50.4px] text-center  text-[#2A254B] mb-4"><h1>Join the club and get the benefits</h1></div>
          <div className=" w-[470px] h-[48px] text-[16px]leading-[24px] justify-center  text-center text-[#2A254B]">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</div>
        </div>
        <div className="w-[472px] h-[56px] mx-auto ">
          <input type="email" className=" border-[1px]  border-gray-300 bg-[#F9F9F9] bg-opacity-15   w-[354px] h-[56px]  left-[730px] px-[2px] top-[94px] text-[16px] leading-[21.6px] text-white" placeholder="your@email.com" />
          <button className=" w-[118px] h-[56px] text-[16px] leading-6  bg-[#2A254B]  text-white py-4 px-8 gap-[10px] mb-[119px]" >Sign up</button>
        </div>


        
        

      </div>

      <div className="flex w-screen h-[568px] ">
        <div className="w-[720px] h-[630px] mt-[72px] ml-[84px] mb-[54px] bg-[#FFFFFF]">
          <div className="w-[536px] h-[225px] mb-[180px] ">
            <p className="w-[514px] h-[68px]  text-[24px]  leading-[33.6px] font-semibold text-[#2A254B]">From a studio in London to a global brand with
              over 400 outlets</p>
            <div className="w-[536px] h-[132px] text-[16px]  leading-[21.6px] text-[#505977]">
              When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.<br /><br />Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
            </div>

          </div>
          <div className="w-[150px] h-[48px] mb-[54px]">
          <button className="  px-4 py-8 gap-[10px] bg-[#F9F9F9] text-[16px] leading-[24px]  text-[#2A254B] ">Get in touch </button>
        </div>

        </div>

        <div className="w-[720px] h-[630px] bg-[#FFFFFF]">
          <Image src={'/Image.png'} alt='' width={720} height={700}/>
       
        </div>
        
    </div>

    </div >)
}