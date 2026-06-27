import React from 'react'
import PcHeader from '../headers/PcHeader'
import MobileHeader from '../headers/MobileHeader'

export default function Header() {
    return (
        <header className='z-999 bg-[#FAEFDC] shadow-lg'>
            <PcHeader />
            <MobileHeader />
        </header>
    )
}
