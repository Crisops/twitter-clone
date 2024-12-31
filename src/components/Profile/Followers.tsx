import Link from 'next/link'
import React from 'react'

function Followers () {
  return (
    <div className='flex items-center gap-5'>
      <div>
        <Link className='hover:underline' href='/username/following'>
          <div className='flex justify-center items-center gap-1'>
            <span className='text-white font-bold text-base'>2</span>
            <span className='text-zinc-500 text-base'>Siguiendo</span>
          </div>
        </Link>
      </div>
      <div>
        <Link className='hover:underline' href='/username/verified_followers'>
          <div className='flex justify-center items-center gap-1'>
            <span className='text-white font-bold text-base'>183,mil</span>
            <span className='text-zinc-500 text-base'>Seguidores</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Followers
