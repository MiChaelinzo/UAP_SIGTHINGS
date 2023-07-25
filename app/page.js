import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <div className='md:mx-28 mx-4 text-white pt-10 pb-12'>

      <div className='md:grid md:grid-cols-2 items-center pt-10'>
        <div className=''>
          <h1 className='text-3xl md:text-6xl font-tektur'>Who we are</h1>
          <p className='text-xl md:text-2xl py-4 tracking-wider'>lorem.....</p>

          <Link href="/AllSighting">
            <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>All Sighting</button>
          </Link>

        </div>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <Image src='/hero.svg' alt="img" width="300" height="300" />
        </div>
      </div>

      <div className='md:grid md:grid-cols-2 pt-12 items-center'>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <Image src='/feat.svg' alt="img" width="300" height="300" />
        </div>
        <div className=''>
          <h1 className='text-3xl md:text-5xl font-tektur'>What else do we have</h1>
          <p className='text-xl md:text-2xl py-4 tracking-wider'> UAP Sightings is a web app where you can:
          </p>
          <ul className="text-xl">
            <li className="list-disc">About app</li>
            <li className="list-disc">About app</li>
            <li className="list-disc">About app</li>
            <li className="list-disc">About app</li>
          </ul>
        </div>
      </div>
    </div>
  )
}