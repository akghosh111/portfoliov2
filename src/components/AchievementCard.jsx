const AchievementCard = ({ image, title }) => {
    return (
      <div className="relative w-64 h-40 rounded-xl overflow-hidden shadow-lg shadow-purple-600/30">
        
        <img src={image} alt={title} className="w-full h-full object-cover" />
  
        
        <div className="absolute inset-0 bg-blue-500/50 hover:bg-blue-400/40 transition-all"></div>
  
       
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-xl font-semibold text-center">
            {title}
          </h2>
        </div>
      </div>
    );
  };
  
  export default AchievementCard;
  