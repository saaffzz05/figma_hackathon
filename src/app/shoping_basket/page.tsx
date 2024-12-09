import react from 'react';
import Image from 'next/image';
import Header from '../components/header';

export default function Basket() {
    return (
        <div>
            <Header />
            <div className="w-[full] h-[749px] bg-[#F9F9F9] px-[188px] pt-[64px] ">
                <div className="shopping  w-[328px] h-[50px] mb-[48px]">
                    <h1 className="leading-[50.4px] text-[36px] text-[#2A254B] ">Your shopping cart</h1></div>
                <div className="mb-[20px]"><ul className="flex text-[14px] mb-[12px] leading-[19.6px] text-[#2A254B]">

                    <li className="mr-[595px]">Product</li>
                    <li className="mr-[317px]">Quantity</li>
                    <li>Total</li></ul>

                    <div className="subDiv  border-[1px]  width-[1064px]  rotate-0 bg-[#EBE8F4] mb-[20px] "></div>

                </div>

                <div className="hori flex mb-[20px] ">

                    <div className="vase2 w-[309px] h-[134px] flex gap-[21px] mr-[341px] ">

                        <Image src={'/Product- Image.png'} alt='Product' width={109} height={134} />

                        <div className="text my-3 w-[179px] h-[110px] mr-[21px]">
                            <h4 className="text text-[20px] w-[150px] h-[28px] leading-[28px] text-[#2A254B] mb-2">Graystone vase</h4>
                            <p className="text-[14px] w-[179px] h-[42px] leading-[21px] text-[#2A254B] mb-2">A timeless ceramic vase with
                                a tri color grey glaze.</p>
                            <p className="text-[16px] w-[29px] h-[24px] leading-[24px] text-[#2A254B] mb-2">£85</p>

                        </div>
                    </div>

                    <div className="num w-[122px] h-[46px] bg-[#F9F9F9] py-3 px-4 text-[#2A254B] text-[16px] leading-[21.6px] mr-[252px]">1</div>

                    <div className="num w-[33px] h-[27px] text-[18px] leading-[27px]  text-[#2A254B]">£85</div>
                </div>

                <div className="hori flex mb-[32px] ">

                    <div className="vase2 w-[309px] h-[134px] flex gap-[21px] mr-[341px] ">

                        <Image src={'/Product Image (1).png'} alt='Product' width={109} height={134} />

                        <div className="text my-3 w-[179px] h-[110px] mr-[21px]">
                            <h4 className="text text-[20px] w-[150px] h-[28px] leading-[28px] text-[#2A254B] mb-2">Basic white vase</h4>
                            <p className="text-[14px] w-[179px] h-[42px] leading-[21px] text-[#2A254B] mb-2">Beautiful and simple this is
                                one for the classics</p>
                            <p className="text-[16px] w-[29px] h-[24px] leading-[24px] text-[#2A254B] mb-2">£85</p>

                        </div>
                    </div>

                    <div className="num w-[122px] h-[46px] bg-[#F9F9F9] py-3 px-4 text-[#2A254B] text-[16px] leading-[21.6px] mr-[252px]">1</div>

                    <div className="num w-[33px] h-[27px] text-[18px] leading-[27px]  text-[#2A254B]">£125</div>
                </div>

                <div className="subDiv  border-[1px]  w-[1064px]  rotate-0 bg-[#EBE8F4] mb-[28px] "></div>

                <div className="flex flex-col items-end">
                    <div className="sub w-[282px] h-[67px] gap-[12px] mb-4">

                        <div className="flex gap-4 justify-end ">
                            <h4 className=" w-[80px] h-[28px] text-[20px] leading-[28px]  text-[#4E4D93]">Subtotal</h4>
                            <h3 className=" w-[33px] h-[27px] text-[18px] leading-[27px]  text-[#2A254B]">£210</h3>

                        </div>
                        <div className=" w-[282px] h-[21px] text-[14px] leading-[21px]  text-[#4E4D93] text-right">Taxes and shipping are calculated at checkout</div>
                    </div>

                    <button className=" w-[282px] h-[56px] py-4 px-8 gap-[10px] text-[16px] leading-[24px] bg-[#2A254B] text-[#FFFFFF] ">Go to check</button>
                </div>



            </div>



        </div>
    )
}