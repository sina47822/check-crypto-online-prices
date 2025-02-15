'use client';
import { ComboboxCrypto } from '@/components/Home/Hero/ComboBoxCrypto'
import { ComboboxUnits } from '@/components/Home/Hero/ComboBoxunits'
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'


// Import the conversion rates
import { conversionRates } from '@/constant/conversionRates'

const Hero = () => {
      // State for input values
      const [cryptoValue, setCryptoValue] = useState<number | string>('') // Crypto value (e.g., BTC)
      const [cryptoPrice, setCryptoPrice] = useState<number>(0) // Price of selected crypto (e.g., BTC)
      const [unit, setUnit] = useState<string>('USD') // Selected unit (e.g., USD)
      const [convertedValue, setConvertedValue] = useState<number>(0) // Converted value (in selected unit)

      // Handle conversion based on crypto price and selected unit
      useEffect(()=>{
        if (cryptoValue !== '') {
            const valueInCrypto = Number(cryptoValue) * cryptoPrice
            const converted = valueInCrypto * (conversionRates[unit] || 1)
            setConvertedValue(converted)
        }
      }, [cryptoValue,cryptoPrice, unit])

      // handle change in crypto selection
      const handleCryptoSelect = (crypto:string, price:number) => {
        setCryptoValue('')
        setCryptoPrice(price)
      }

      //handle change in unit selection
      const handleUnitSelect = (selectedUnit: string) => {
        setUnit(selectedUnit)
      }


      return (
    <div className='pt-16 pb-16'>
        <div className='flex justify-center items-center flex-col relative w-full h-[110vh] sm:h-screen'>
            <div className='flex align-center justify-center'>
                <div>
                    {/* First Input (crypto value) */}
                    <input type='text' value={cryptoValue} onChange={(e) => setCryptoValue(e.target.value)}
                    className='text-center w-[120px] h-[70px] mx-2 rounded-md border-gray-300 border-[1px]' placeholder='0.00'></input>
                    <ComboboxCrypto onSelect={handleCryptoSelect}/>
                </div>
                <div className='px-2 align-center justify-center flex flex-col md-flex-row'><span className='text-4xl'>=</span></div>
                <div>
                    {/* Second Input (converted value) */}  
                    <input type='text' value={convertedValue.toFixed(2)} // Show converted value with 2 decimal places
                    readOnly
                    className='text-center w-[120px] h-[70px] mx-2 rounded-md border-gray-300 border-[1px]'
                    >
                    </input>
                    <ComboboxUnits onSelect={handleUnitSelect} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
