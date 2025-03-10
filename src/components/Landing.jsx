import React from 'react';
import achievement1 from "../assets/achievement1.png";
import { Github, Linkedin, Twitter, Globe, Video } from 'lucide-react';

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
            <h3 className="mt-3 text-lg  text-gray-300 px-5">
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

      
      <section id='achievements' className='mt-0 p-10 min-h-screen'>
        <h2 className="md:text-3xl text-2xl text-center mb-6">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          
        <div className="achievement-card">
            <img src={achievement1} alt="SIT Ideathon Winner" className="achievement-image" />
            <div className=""></div>
            <p className="achievement-text">
              SIT Ideathon'25 - 1st Runner's Up
            </p>
          </div>

          
          <div className="achievement-card">
            <img src={achievement1} alt="SIT Ideathon Winner" className="achievement-image" />
            <div className="achievement-overlay"></div>
            <p className="achievement-text">
              Technophilia - 1st @SJC, Darjeeling
            </p>
          </div>

          
          <div className="achievement-card">
            <img src={achievement1} alt="SIT Ideathon Winner" className="achievement-image" />
            <div className="achievement-overlay"></div>
            <p className="achievement-text">
              VBU - Website Bug Acknowledgement
            </p>
          </div>

        </div>
      </section>

      <section id='projects' className='mt-0 p-10 min-h-screen'>
        <h2 className="md:text-3xl text-2xl text-center mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
          
          
        <div className="project-card">
            
            <p className="project-title">
              Cerospace
            </p>
            <p className="project-description">A mental health focused website which lets users log their mood,
              write journals, talk to an AI-powered therapist available 24*7 at their disposal, access to verified
              resources to cope with anxiety & depression. Built with React, Supabase & Gemini API.
            </p>

            <div className="flex items-center justify-center gap-5 mt-4">
              <a href="https://cerospace.com" target="_blank" rel="noopener noreferrer">
                <Globe className="w-6 h-6  hover:text-purple-300 transition" />
              </a>
              <a href="https://github.com/anukiran/cerospace" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6  hover:text-purple-300 transition" />
              </a>
              <a href="https://youtu.be/demo" target="_blank" rel="noopener noreferrer">
                <Video className="w-6 h-6  hover:text-purple-300 transition" />
              </a>
            </div>

          </div>

          
          <div className="project-card">
            
            
            <p className="project-title">
              Lunaflow
            </p>
            <p className="project-description">A menstrual health tracking webapp built using React & Supabase with features
              like mood logging, menstrual calendar/calculator, AI powered menstrual health chatbot & community support 
              with personalized resources.
            </p>
            <div className="flex items-center justify-center gap-5 mt-4">
              <a href="https://cerospace.com" target="_blank" rel="noopener noreferrer">
                <Globe className="w-6 h-6  hover:text-purple-300 transition" />
              </a>
              <a href="https://github.com/anukiran/cerospace" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6  hover:text-purple-300 transition" />
              </a>
              <a href="https://youtu.be/demo" target="_blank" rel="noopener noreferrer">
                <Video className="w-6 h-6  hover:text-purple-300 transition" />
              </a>
            </div>
          </div>

          
          <div className="project-card">
            <p className="project-title">
              ShredResume
            </p>
            
            <p className="project-description">
              AI-powered resume roast generator using React, Express & Google's Gemini API. A user can upload
              their resume & get feedback in the form of a funny roast.
            </p>
            <div className="flex items-center justify-center gap-5 mt-4">
              <a href="https://cerospace.com" target="_blank" rel="noopener noreferrer">
                <Globe className="w-6 h-6  hover:text-purple-300 transition" />
              </a>
              <a href="https://github.com/anukiran/cerospace" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6  hover:text-purple-300 transition" />
              </a>
              <a href="https://youtu.be/demo" target="_blank" rel="noopener noreferrer">
                <Video className="w-6 h-6  hover:text-purple-300 transition" />
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Landing;
