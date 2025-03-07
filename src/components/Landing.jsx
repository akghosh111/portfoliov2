import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';


const Landing = () => {
  return (
    <div>
      <section id='home'>
        <div className="relative h-screen flex items-center justify-center text-white bg-hero-pattern">
          
          <div className="text-center">
            <p className='text-2xl font-semibold'>Hi, I'm <span className="text-blue-500">Anukiran Ghosh</span></p>
            <h1 className="mt-4 text-4xl font-bold italic">Anyone can have ideas. I make them impossible to ignore.</h1>
            <h3 className="mt-3 text-lg text-gray-300 px-5">I analyze, deconstruct, and build. 
              I don’t chase trends—I create things that define them. The goal? Make something so good they have to talk about it.

            Because great products don’t just get built.
            <i><b>They get engineered into existence.</b></i></h3>
            <div className="flex items-center justify-center gap-4">
              <Github className="mt-5 w-7 h-7 text-purple-500 hover:text-purple-300 transition-colors duration-300 cursor-pointer" />
              <Twitter className="mt-5 w-7 h-7 text-purple-500 hover:text-purple-300 transition-colors duration-300 cursor-pointer" />
              <Linkedin className="mt-5 w-7 h-7 text-purple-500 hover:text-purple-300 transition-colors duration-300 cursor-pointer" />
            </div>

            
            
          </div>
        </div>
      </section>
      <section id='achievements'>
        <div className="relative h-screen flex items-center justify-center text-white">
          <div className="text-center">
            <h2 className='text-2xl'>Achievements</h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing
