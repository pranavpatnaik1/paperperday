import React from 'react';
import './App.css';
import paper from "./papers.json";

function App() {
  return (
    <div className="min-h-screen bg-white p-8 pt-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-32">
          <h1 className="mb-4 fade-in-up title" style={{ fontFamily: 'Poppins' }}>
            paperperday
          </h1>
          <p className="text-gray-700 fade-in-up subtitle" style={{ fontFamily: 'Poppins'}}>
            daily papers in ML
          </p>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-gray-200 my-5"></div>

        {/* Paper section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-bold underline" style={{ fontFamily: 'Poppins' }}>
              today's paper:
            </h2>
            <span className="text-gray-600" style={{ fontFamily: 'Poppins' }}>
              {paper.today.date}
            </span>
          </div>

          {/* Paper title and authors, centered */}
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold" style={{ fontFamily: 'Poppins' }}>{/*PAPER TITLE*/}
              {paper.today.title}
            </h2>
            <p className="text-lg mb-2 authors" style={{ fontFamily: 'Poppins' }}>{/*PAPER AUTHORS*/}
              {paper.today.authors}
            </p>
          </div>

          {/* Abstract with rectangle and black border */}
          <div className="rounded-lg p-4 shadow-md inline-block text-left" style={{ boxShadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.2) "}}>
            <p className="text-base" style={{ fontFamily: 'Poppins'}}>{/*PAPER ABSTRACT*/}
              {paper.today.abstract}
            </p>
          </div>

          {/* LINK TO PAPER */}
          <div className="mt-2">
            <a href={paper.today.link} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 underline" style={{ fontFamily: 'Poppins' }}>
              arxiv
            </a>
          </div>
        </div>

        <div className="w-full h-px bg-gray-200 my-5"></div>

        {/* Past Papers Section */}
        <div className="mt-10">
        <h2 className="text-2xl font-bold underline mb-4" style={{ fontFamily: 'Poppins' }}>
          previously featured:
        </h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4 scrollable-section">
          <ul className="space-y-4">
            {paper.past.map((paper, index) => (
              <li key={index} className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-lg font-semibold" style={{ fontFamily: 'Poppins' }}>{paper.title}</span>
                <div className="flex items-center">
                  <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 underline mr-2" style={{ fontFamily: 'Poppins' }}>arxiv</a>
                  <span className="text-sm text-gray-400" style={{ fontFamily: 'Poppins' }}>{paper.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

        <div className="w-full h-px bg-gray-200 my-10"></div>

        {/* JOIN THE DISCUSSION */}
        <div className="text-center mt-10">
          <h2 className="text-3xl font-bold underline mb-6" style={{ fontFamily: 'Poppins' }}>
            join the discussion:
          </h2>
          <div className="flex justify-center space-x-4">
            <a href="https://discord.gg/jSBVkgm9Gh" target="_blank" rel="noopener noreferrer">
              <img src="/discord logo.png" alt="Discord" className="w-10 h-10" />
            </a>
            <a href="https://www.reddit.com/r/paperperday/" target="_blank" rel="noopener noreferrer">
              <img src="/reddit logo.png" alt="Reddit" className="w-10 h-10" />
            </a>
            <a href="https://x.com/paperperday1" target="_blank" rel="noopener noreferrer">
              <img src="/x logo.png" alt="Twitter" className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>

      {/* Background Images */}
      <img src="/images.png" alt="Background" className="absolute bg-image" style={{ top: '-1%', left: '2%', width: '2000px'}} />
    </div>
  );
}

export default App;