import React from 'react';
import './App.css'; // Make sure to create this CSS file

function App() {
  return (
    <div className="min-h-screen bg-white p-8 pt-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-32">
          <h1 className="text-9xl font-normal mb-4 text-shadow" style={{ fontFamily: 'Poppins' }}>
            paperperday
          </h1>
          <p className="text-3xl text-gray-700" style={{ fontFamily: 'Poppins' }}>
            daily papers in ML
          </p>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-gray-200 my-5"></div>

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

      {/* Background Images */}
      <img src="/gpt equation.png" alt="Background" className="absolute bg-image" style={{ top: '23%', left: '52%', width: '200px',  transform: 'rotate(10deg)' }} />
      <img src="/gradient descent.png" alt="Background" className="absolute bg-image" style={{ top: '20%', left: '65%', width: '300px'  }} /> {/* done */}
      <img src="/normalization.png" alt="Background" className="absolute bg-image" style={{ top: '23%', left: '36%', width: '120px'  }} />
      <img src="/big NN.png" alt="Background" className="absolute bg-image" style={{ top: '8%', left: '10%', width: '180px'  }} />
      <img src="/accelerated.png" alt="Background" className="absolute bg-image2" style={{ top: '10%', left: '55%', width: '250px'  }} />
      <img src="/kernel eqn.png" alt="Background" className="absolute bg-image" style={{ top: '25%', left: '8%', width: '350px',  transform: 'rotate(10deg)'  }} />
      <img src="/sigmoid curve.png" alt="Background" className="absolute bg-image" style={{ top: '7%', left: '22%', width: '200px',  transform: 'rotate(10deg)'  }} />
      <img src="/rnn.png" alt="Background" className="absolute bg-image" style={{ top: '7%', left: '40%', width: '100px', transform: 'rotate(-10deg)'  }} />
      <img src="/clustering (2).png" alt="Background" className="absolute bg-image" style={{ top: '5%', left: '75%', width: '200px', transform: 'rotate(-10deg)'  }} />
    </div>
  );
}

export default App;
