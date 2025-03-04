import React, { useEffect } from 'react';
import './App.css';
import paper from "./papers.json";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8 pt-16 sm:pt-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-32">
          <h1 className="mb-4 fade-in-up title text-6xl sm:text-7xl" style={{ fontFamily: 'Poppins' }}>
             paperperday
          </h1>
          <p className="text-gray-700 fade-in-up subtitle text-xl sm:text-2xl" style={{ fontFamily: 'Poppins'}}>
            daily papers in ML
          </p>
        </div>

        <hr className="section-divider" />

        {/* Paper section */}
        <div className="mb-8 fade-in-up">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold underline mb-2 sm:mb-0" style={{ fontFamily: 'Poppins' }}>
              today's paper:
            </h2>
            <span className="text-sm sm:text-base text-gray-600" style={{ fontFamily: 'Poppins' }}>
              {paper.today.date}
            </span>
          </div>

          {/* Paper title and authors, centered */}
          <div className="text-center mb-6 fade-in-up">
            <h2 className="text-2xl sm:text-4xl font-bold px-2" style={{ fontFamily: 'Poppins' }}>
              {paper.today.title}
            </h2>
            <p className="text-base sm:text-lg mb-2 authors mx-auto" style={{ fontFamily: 'Poppins' }}>
              {paper.today.authors}
            </p>
          </div>

          {/* Abstract with rectangle and black border */}
          <div className="rounded-lg p-3 sm:p-4 shadow-md inline-block text-left fade-in-up" style={{ boxShadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.2) "}}>
            <p className="text-sm sm:text-base" style={{ fontFamily: 'Poppins'}}>
              {paper.today.abstract}
            </p>
          </div>

          {/* LINK TO PAPER */}
          <div className="mt-2 fade-in-up">
            <a href={paper.today.link} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-500 underline" style={{ fontFamily: 'Poppins' }}>
              arxiv
            </a>
          </div>
        </div>

        <div className="w-full h-px bg-gray-200 my-5"></div>

        {/* Past Papers Section */}
        <div className="mt-8 sm:mt-10 fade-in-up">
          <h2 className="text-xl sm:text-2xl font-bold underline mb-4" style={{ fontFamily: 'Poppins' }}>
            previously featured:
          </h2>
          <div className="border border-gray-200 rounded-lg p-4 sm:p-6 mb-4 scrollable-section">
            <ul className="space-y-4">
              {paper.past.map((paper, index) => (
                <li key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-2 border-b border-gray-200">
                  <span className="text-base sm:text-lg font-semibold mb-2 sm:mb-0" style={{ fontFamily: 'Poppins' }}>{paper.title}</span>
                  <div className="flex items-center space-x-2">
                    <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-500 underline" style={{ fontFamily: 'Poppins' }}>arxiv</a>
                    <span className="text-xs sm:text-sm text-gray-400" style={{ fontFamily: 'Poppins' }}>{paper.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-gray-200 my-8 sm:my-10"></div>

        {/* JOIN THE DISCUSSION */}
        <div className="text-center mt-8 sm:mt-10 fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-bold underline mb-4 sm:mb-6" style={{ fontFamily: 'Poppins' }}>
            join the discussion:
          </h2>
          <div className="flex justify-center space-x-4">
            <a href="https://discord.gg/jSBVkgm9Gh" target="_blank" rel="noopener noreferrer">
              <img src="/discord logo.png" alt="Discord" className="w-8 h-8 sm:w-10 sm:h-10" />
            </a>
            <a href="https://www.reddit.com/r/paperperday/" target="_blank" rel="noopener noreferrer">
              <img src="/reddit logo.png" alt="Reddit" className="w-8 h-8 sm:w-10 sm:h-10" />
            </a>
            <a href="https://x.com/paperperday1" target="_blank" rel="noopener noreferrer">
              <img src="/x logo.png" alt="Twitter" className="w-8 h-8 sm:w-10 sm:h-10" />
            </a>
          </div>
        </div>
      </div>

      {/* Background Images */}
      <img src="/images.png" alt="Background" className="bg-image" style={{ width: '100%', maxWidth: '100%'}} />
    </div>
  );
}

export default App;