import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    
    // If lastVisit exists and it is within 24 hours, skip the loading screen
    if (lastVisit && now - parseInt(lastVisit, 10) < 24 * 60 * 60 * 1000) {
      return;
    }

    // Otherwise, show the loading screen
    setLoading(true);
    
    // Update the 'lastVisit' timestamp in localStorage
    localStorage.setItem('lastVisit', now.toString());

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) return prev + 2;
        clearInterval(interval);
        setLoading(false);
        return 100;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null; // Return null when loading is complete

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 overflow-hidden">
      {/* Background particles animation */}
      <div className="absolute w-full h-full bg-gradient-to-br from-blue-400 via-purple-600 to-pink-500 opacity-60 animate-pulse-slow"></div>

      <div className="relative z-10 text-center text-white space-y-8 p-8 rounded-lg shadow-lg bg-gradient-to-r from-indigo-600 to-purple-600">
        {/* Animated Logo */}
        <div className="relative w-20 h-20 mx-auto">
          <div className="absolute w-full h-full bg-gradient-to-br from-yellow-400 to-red-500 rounded-full animate-spin-slow"></div>
          <div className="absolute w-6 h-6 bg-white rounded-full animate-ping opacity-70"></div>
        </div>

        <h2 className="text-4xl font-semibold animate__animated animate__fadeInUp">Hang Tight! We're Getting Things Ready...</h2>
        <p className="text-lg">Fun Fact: "YugoExpress" was almost the name before we switched to "YugoPlus"! Cool, right?</p>

        {/* Progress bar and loading button */}
        <div className="relative w-full mt-6 h-3 rounded-full bg-gray-300 overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-blue-600"
            style={{ width: `${progress}%`, transition: 'width 0.2s ease-out' }}
          ></div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            className="px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-600 text-lg font-semibold hover:bg-gradient-to-l transition duration-300 ease-in-out"
            style={{
              transform: `scale(${1 + progress / 200})`, // Make the button "grow" as progress increases
              opacity: progress / 100
            }}
          >
            {progress === 100 ? 'Done!' : `Loading... (${progress}%)`}
          </button>
        </div>

        {/* Animated Particles */}
        <div className="absolute w-full h-full z-20 top-0 left-0 pointer-events-none">
          <div className="absolute animate-particle left-1/4 top-1/4 w-2 h-2 bg-white rounded-full opacity-50"></div>
          <div className="absolute animate-particle left-3/4 top-1/2 w-2 h-2 bg-white rounded-full opacity-50"></div>
          <div className="absolute animate-particle left-1/3 top-3/4 w-2 h-2 bg-white rounded-full opacity-50"></div>
          {/* More particles can be added for more effects */}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
