import { WebButton } from '@/components/ui/webButton'
import { FOOTER_DATA } from '@/constants/footer'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import React from 'react'

function Footer() {
  return (
    <footer className='p-5 max-w-[1220px] grid grid-cols-2 md:grid-cols-4 gap-3 mx-auto'>
       <div className='flex flex-col gap-3 md:gap-6'>
         <h1 className='font-bold font-nunito sm:text-sm md:text-lg md:text-xl lg:text-2xl'>Cour<span className='text-yellow'>saas</span></h1>
         <p className='text-xs opacity-80 font-nunito font-light max-sm:leading-3 md:text-sm lg:text-base'>{FOOTER_DATA.brand.description} </p>
       </div>
        {FOOTER_DATA.navigation.map((item, index)=>(
          <div className='flex flex-col gap-3 md:gap-4' key={index}>
         <h1 className='font-bold font-nunito sm:text-sm md:text-lg md:text-xl lg:text-2xl'>{item.title}</h1>
               {item.links.map((link,i)=>(
                  <p className='text-xs opacity-80 font-nunito font-light max-sm:leading-3 md:text-sm lg:text-base' key={i}>{link.label}</p>
               ))}
          </div> 
        ))}

        <div className='flex flex-col gap-3 md:gap-6'>
           <h1 className='font-bold font-nunito sm:text-sm md:text-lg  lg:text-2xl'>{FOOTER_DATA.appDownload.title}</h1>
           <button  className='flex justify-center gap-2 border-2 items-center rounded-md h-12 px-0 bg-white'> 
             <div className='flex items-center gap-2 '>
              <IoLogoGooglePlaystore className='size-9' />
             <div className='flex flex-col '>
               <p className='font-nunito font-light text-xs md:text-sm'>
                GET IT ON
               </p>
               <h1 className=' font-nunito text-sm'>Google Play</h1>
             </div>
             </div>
           </button>
        </div>
      
    </footer>
  )
}

export default Footer