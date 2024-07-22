import Link from 'next/link';
import { Button} from './ui/button';

// Components
import Nav from './Nav';
import React from 'react'

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-secondary'>
        <div className="container mx-auto">
            {/*logo */}
            <Link href={"/"}>
                <h1 className='text-4xl font-semibold'>
                    Rodrigo <span className='text-quaternary'>.</span> </h1>
            </Link>
            {/* desktop nav */}
            <Nav />
        </div>
    </header>
  )
}

export default Header