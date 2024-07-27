import React from 'react'
import { FaCalendarCheck, FaRegHeart, FaThumbsUp } from 'react-icons/fa'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

const Why = () => {
  return (
    <section className='mt-20 lg:mb-20'>
        <div className='container w-full h-[600px] mx-auto'>
            <div className='gap-5 lg:items-center lg:flex'>
              <div className='flex flex-col w-full gap-5 lg:w-1/2 mb-7 lg:mb-0'>
                <div className=''>
                  <h3 className='text-xl uppercase text-[#fbd0da] mb-3'>Why Connes</h3>
                  <p className='md:text-5xl text-[#ac0f46] text-4xl mb-10'>Fresh and Delicious Every Day</p>
                </div>
                <div className='flex flex-col gap-7'>
                  <div className='flex gap-5'>
                    <div className='p-3 bg-[#f6e4e8] text-[#f7c2ce] hover:text-[#d41343] flex items-center w-[40px] h-[40px] rounded-xl justify-center'>
                      <FaCalendarCheck className='' size={20}/>
                    </div>
                    <div>
                      <h3 className='uppercase text-[#d41343] text-xl'>Open Everyday</h3>
                      <p className={`${montserrat.className} text-[#494949]`}>Duis ac maximus mauris. Donec quis erat odio. Aliquam ac risus lacinia</p>
                    </div>
                  </div>
                  <div className='flex gap-5'>
                    <div className='p-3 bg-[#f6e4e8] text-[#f7c2ce] hover:text-[#d41343] flex items-center w-[40px] h-[40px] rounded-xl justify-center'>
                      <FaRegHeart className='' size={20}/>
                    </div>
                    <div>
                      <h3 className='uppercase text-[#d41343] text-xl'>Made with Love</h3>
                      <p className={`${montserrat.className} text-[#494949]`}>Duis ac maximus mauris. Donec quis erat odio. Aliquam ac risus lacinia</p>
                    </div>
                  </div>
                  <div className='flex gap-5'>
                    <div className='p-3 bg-[#f6e4e8] text-[#f7c2ce] hover:text-[#d41343] flex items-center w-[40px] h-[40px] rounded-xl justify-center'>
                      <FaThumbsUp className='' size={20}/>
                    </div>
                    <div>
                      <h3 className='uppercase text-[#d41343] text-xl'>Excellent Reviews</h3>
                      <p className={`${montserrat.className} text-[#494949]`}>Duis ac maximus mauris. Donec quis erat odio. Aliquam ac risus lacinia</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2 bg-[#fdfbfb] lg:flex justify-center p-4 rounded-lg h-full hidden'>
                <img src="/assets/popsicles.png" alt="popsicles" width={300} height={300} />
              </div>
            </div>
        </div>
    </section>
  )
}

export default Why