import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-normal mb-4" style={{ fontFamily: 'Poppins' }}>
            paperperday
          </h1>
          <p className="text-xl text-gray-700" style={{ fontFamily: 'Poppins' }}>
            daily papers in ML
          </p>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-gray-200 my-8"></div>

        {/* Paper section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold underline" style={{ fontFamily: 'Poppins' }}>
              today's paper:
            </h2>
            <span className="text-gray-600" style={{ fontFamily: 'Poppins' }}>
              2025/02/08
            </span>
          </div>

          {/* Paper content area (gray rectangle) */}
          <div className="w-full h-96 bg-gray-200 rounded-lg">
            {/* Content will go here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;