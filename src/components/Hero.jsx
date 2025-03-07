import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="relative h-screen flex items-center justify-center text-white bg-hero-pattern">
        
        <div className="text-center">
          <p className='text-2xl'>Hi, I'm <span className="text-blue-500">Anukiran Ghosh</span></p>
          <h1 className="mt-4 text-4xl font-bold">I turn ideas into reality.</h1>
          <h3 className="mt-3 text-lg text-gray-300">I love brainstorming, breaking down ideas, and figuring out how to bring them to life.
          Building products that people genuinely love is what drives me.</h3>
        </div>
      </div>
    </div>
  )
}

export default Hero
