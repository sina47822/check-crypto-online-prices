import { ComboboxCrypto } from '@/components/Home/Hero/ComboBoxCrypto'
import { ComboboxUnits } from '@/components/Home/Hero/ComboBoxunits'
import { Input } from '@/components/ui/input'
import React from 'react'

const Hero = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='flex justify-center items-center flex-col relative w-full h-[110vh] sm:h-screen'>
            <div className='flex align-center justify-center'>
                <div>
                    <input type='text' id='' className='text-center w-10 h-9 mx-2 rounded-md border-gray-300 border-[1px]'  value={''} ></input>
                </div>
                <div><ComboboxCrypto /></div>
                <div className='px-2 align-center justify-center'><span className='text-3xl'>=</span></div>
                <div>
                    <Input type="number" placeholder=".." />
                    <input type='text' id='' className='text-center w-10 h-9 mx-2 rounded-md border-gray-300 border-[1px]'  value={''} ></input>
                </div>
                <div><ComboboxUnits /></div>
            </div>
        </div>
    </div>
  )
}

export default Hero
