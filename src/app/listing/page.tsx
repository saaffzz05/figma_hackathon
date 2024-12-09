

import react from 'react';
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';
export default function Listing() {
    return (
        <div id='list' >
            <Header />
            <div className="main">
                <Image className=" w-full" src={'/Frame 143.png'} alt='' width={1525} height={209} />
                <div className="sel  w-full bg-white h-[64px] px-6 flex justify-between">
                    <div className="lest  w-[557px] gap-3 flex h-[64px] mr-52">
                        <div className="innerDivs w-[137px]  h-[48px] py-3 px-6 flex gap-2  ">
                            <p className=" w-[65px]  h-[24px] text-[16px] leading-[24px] text-[#2A254B]">Category</p>
                            <Image src={'/Caret--down.png'} width={16} height={16} alt="chair" />
                        </div>

                        <div className="innerDivs w-[162px]  h-[48px] py-3 px-6 flex gap-2  ">
                            <p className=" w-[90px]  h-[24px] text-[16px] leading-[24px] text-[#2A254B]">Product type</p>
                            <Image src={'/Caret--down.png'} width={16} height={16} alt="chair" />
                        </div>

                        <div className="innerDivs w-[137px]  h-[48px] py-3 px-6 flex gap-2  ">
                            <p className=" w-[65px]  h-[24px] text-[16px] leading-[24px] text-[#2A254B]">Price</p>
                            <Image src={'/Caret--down.png'} width={16} height={16} alt="chair" />
                        </div>

                        <div className="innerDivs w-[137px]  h-[48px] py-3 px-6 flex gap-2  ">
                            <p className=" w-[65px]  h-[24px] text-[16px] leading-[24px] text-[#2A254B]">Brand</p>
                            <Image src={'/Caret--down.png'} width={16} height={16} alt="chair" />
                        </div>

                    </div>
                    <div className="right  w-[557px] gap-3 flex h-[64px]  ">
                        <div className="g  w-[67px] text-[14px] leading-[21px]  text-center mt-4 h-[21px]">Sorting by:</div>
                        <div className="  w-[154px]  h-[48px] py-3 px-6 flex justify-items-end ">
                            <p className="   h-[24px]  mr-6 text-[16px] leading-[24px] text-[#2A254B]">Date add</p>
                            <Image src={'/Caret--down.png'} width={16} height={16} alt="chair" />
                        </div>
                    </div>
                </div>


                <div className="flex px-[80px] mt-[33px] mb-[35px]">
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
               
                <div className="flex px-[80px] mt-[33px] mb-[35px]">
                    <div className="w-[305px] h-[462px] mr-[20px]">
                        <Image src={'/Parent.png'} alt='pic' width={305} height={375} className='mb-6' />
                        <h4 className="text-[20px] leading-[28px] text-[#2A254B] mb-[8px]">The Dandy chair</h4>
                        <p className="text-[18px] leading-[27px] text-[#2A254B]">£250</p>
                    </div>

                    <div className="w-[305px] h-[462px] mr-[20px]">
                        <Image src={'/Parent (1).png'} alt='pic' width={305} height={375} className='mb-6' />
                        <h4 className="text-[20px] leading-[28px] text-[#2A254B] mb-[8px]">Rustic Vase Set</h4>
                        <p className="text-[18px] leading-[27px] text-[#2A254B]">£155</p>
                    </div>

                    <div className="w-[305px] h-[462px] mr-[20px]">
                        <Image src={'/Parent (2).png'} alt='pic' width={305} height={375} className='mb-6' />
                        <h4 className="text-[20px] leading-[28px] text-[#2A254B] mb-[8px]">The Silky Vase</h4>
                        <p className="text-[18px] leading-[27px] text-[#2A254B]">£125</p>
                    </div>

                    <div className="w-[305px] h-[462px] mr-[20px]">
                        <Image src={'/Parent (3).png'} alt='pic' width={305} height={375} className='mb-6' />
                        <h4 className="text-[20px] leading-[28px] text-[#2A254B] mb-[8px]">The Lucy Lamp</h4>
                        <p className="text-[18px] leading-[27px] text-[#2A254B]">£125</p>
                    </div>
                </div>
                

                <div className="flex px-[80px] mt-[33px] mb-[35px]">
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

<Footer/>
        </div>

    )
}