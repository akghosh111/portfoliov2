import React, { useState } from 'react';
import achievement1 from "../assets/achievement1.png";
import achievement2 from "../assets/achievement2.png";
import achievement3 from "../assets/achievement3.png";
import TechWheel from './TechWheel';
import { Github, Linkedin, Twitter, Globe, Video } from 'lucide-react';


const achievements = [
  { img: achievement1, title: "SIT Ideathon'25 - 1st Runner's Up" },
  { img: achievement2, title: "Technophilia - SJC, North Point, Darjeeling" },
  { img: achievement3, title: "Website bug report acknowledged - VBU" }
];

const Landing = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Open modal with the clicked image
  const openModal = (image) => {
    setSelectedImage(image);
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
  };

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
              <a href="https://github.com/akghosh111" target="_blank" rel="noopener noreferrer">
                <Github className="mt-5 w-7 h-7 text-purple-500 hover:text-purple-300 transition-colors duration-300 cursor-pointer" />
              </a>
              <a href="https://x.com/anukiranghosh" target="_blank" rel="noopener noreferrer">

              <Twitter className="mt-5 w-7 h-7 text-purple-500 hover:text-purple-300 transition-colors duration-300 cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/anukiranghosh/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mt-5 w-7 h-7 text-purple-500 hover:text-purple-300 transition-colors duration-300 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </section>

      
      <section id='achievements' className='mt-0 p-10 min-h-screen'>
        <h2 className="md:text-3xl text-2xl text-center mb-6">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card cursor-pointer" onClick={() => openModal(achievement.img, achievement.title)}>
              <img src={achievement.img} alt={`Achievement ${index + 1}`} className="achievement-image" />
              <div className="achievement-overlay"></div>
              <p className="achievement-text">{achievement.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50" onClick={closeModal}>
          <div className="relative p-4">
            <img src={selectedImage} alt="Enlarged Achievement" className="max-w-full max-h-screen rounded-lg shadow-lg" />
          </div>
        </div>
      )}

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

            <div className="flex items-center justify-center gap-5 mt-auto pt-3">
              <a href="https://cerospace-frontend.pages.dev/" target="_blank" rel="noopener noreferrer">
                <Globe className="w-6 h-6  hover:text-purple-300 transition" />
              </a>
              <a href="https://github.com/akghosh111/cerospace-frontend" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6  hover:text-purple-300 transition" />
              </a>
              <a href="https://youtu.be/2gJrcwEfuhI" target="_blank" rel="noopener noreferrer">
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
            <div className="flex items-center justify-center gap-5 mt-auto pt-3">
              <a href="https://lunaflow.pages.dev/" target="_blank" rel="noopener noreferrer">
                <Globe className="w-6 h-6  hover:text-purple-300 transition" />
              </a>
              <a href="https://github.com/akghosh111/lunaflow-frontend" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6  hover:text-purple-300 transition" />
              </a>
              <a href="https://youtu.be/1Yr_2OWmQEM" target="_blank" rel="noopener noreferrer">
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
              their resume & get feedback in the form of a funny roast. Users can also download the roast & share
              it on their socials.
            </p>
            <div className="flex items-center justify-center gap-5 mt-auto pt-3">
              <a href="https://cerospace-frontend.pages.dev/" target="_blank" rel="noopener noreferrer">
                <Globe className="w-6 h-6  hover:text-purple-300 transition" />
              </a>
              <a href="https://github.com/akghosh111/cerospace-frontend" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6  hover:text-purple-300 transition" />
              </a>
              <a href="https://youtu.be/2gJrcwEfuhI" target="_blank" rel="noopener noreferrer">
                <Video className="w-6 h-6  hover:text-purple-300 transition" />
              </a>
            </div>
          </div>

        
          

        </div>
        <div className='flex justify-center items-center pt-3'>
            <p className="text-center">Working on more projects, come back soon</p>
          </div>

      </section>

      <section id='skills' className='mt-0 p-10 min-h-screen'>
        <h2 className="md:text-3xl text-2xl text-center mb-6">Skills</h2>
        

        <TechWheel/>
        
      </section>

      <section id='contact' className='mt-0 p-10 min-h-screen'>
       <h2 className="md:text-3xl text-2xl text-center mb-6">Get in Touch</h2>
       <h3 className='text-center font-semibold'>Send me an email at admin@anukiranghosh.com</h3>

      </section>
    </div>
  );
};

export default Landing;
