import { useEffect, useState } from "react";

const techIcons = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", name: "Supabase" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", name: "Postman" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", name: "Express" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", name: "PostgreSQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", name: "MongoDB" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python" },
];

const TechWheel = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const handleScroll = (e) => {
      setAngle((prev) => prev + e.deltaY * 0.1);
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-96">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {techIcons.map((icon, index) => {
          const iconAngle = (index / techIcons.length) * 360 + angle;
          const radius = 110;
          const x = radius * Math.cos((iconAngle * Math.PI) / 180);
          const y = radius * Math.sin((iconAngle * Math.PI) / 180);

          return (
            <div
              key={icon.name}
              className="absolute w-12 h-12 transition-transform duration-200 ease-out"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <img
                src={icon.src}
                alt={icon.name}
                className="w-full h-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechWheel;