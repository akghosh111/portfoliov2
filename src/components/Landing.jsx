import React from 'react';
import achievement1 from "../assets/achievement1.png";
import { Github, Linkedin, Twitter } from 'lucide-react';

const Landing = () => {
  return (
    <div>
      <section id='home'>
        <div className="relative h-screen flex items-center justify-center text-white bg-hero-pattern">
          <div className="text-center">
            <p className='text-2xl font-semibold'>
              Hi, I'm <span className="text-blue-500">Anukiran Ghosh</span>
            </p>
            <h1 className="mt-4 text-4xl font-bold italic">
              Anyone can have ideas. I make them impossible to ignore.
            </h1>
            <h3 className="mt-3 text-lg text-gray-300 px-5">
              I analyze, deconstruct, and build. I don’t chase trends—I create things that define them.
              The goal? Make something so good they have to talk about it.
              <i><b>They get engineered into existence.</b></i>
            </h3>
            <div className="flex items-center justify-center gap-4">
              <Github className="mt-5 w-7 h-7 text-purple-500 hover:text-purple-300 transition-colors duration-300 cursor-pointer" />
              <Twitter className="mt-5 w-7 h-7 text-purple-500 hover:text-purple-300 transition-colors duration-300 cursor-pointer" />
              <Linkedin className="mt-5 w-7 h-7 text-purple-500 hover:text-purple-300 transition-colors duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </section>

      
      <section id='achievements' className='mt-0 p-10 h-screen'>
        <h2 className="md:text-3xl text-2xl text-center mb-6">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          
        <div className="achievement-card">
            <img src={achievement1} alt="SIT Ideathon Winner" className="achievement-image" />
            <div className="achievement-overlay"></div>
            <p className="achievement-text">
              SIT Ideathon'25 - 1st Runner's Up
            </p>
          </div>

          
          <div className="achievement-card">
            <img src={achievement1} alt="SIT Ideathon Winner" className="achievement-image" />
            <div className="achievement-overlay"></div>
            <p className="achievement-text">
              SIT Ideathon'25 - 1st Runner's Up
            </p>
          </div>

          
          <div className="achievement-card">
            <img src={achievement1} alt="SIT Ideathon Winner" className="achievement-image" />
            <div className="achievement-overlay"></div>
            <p className="achievement-text">
              SIT Ideathon'25 - 1st Runner's Up
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Landing;
