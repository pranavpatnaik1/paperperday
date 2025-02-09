import React from 'react';
import './App.css'; // Make sure to create this CSS file

function App() {
  return (
    <div className="min-h-screen bg-white p-8 pt-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-32">
          <h1 className="text-9xl font-normal mb-8 text-shadow fade-in-up" style={{ fontFamily: 'Poppins' }}>
            paperperday
          </h1>
          <p className="text-3xl text-gray-700 fade-in-up" style={{ fontFamily: 'Poppins' }}>
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

          {/* Paper content area */}
          <div className="w-full bg-gray-100 rounded-lg p-6 shadow-md">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins' }}>
              Attention is All You Need
            </h2>
            <p className="text-lg mb-2" style={{ fontFamily: 'Poppins' }}>
              Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, Illia Polosukhin
            </p>
            <p className="text-base" style={{ fontFamily: 'Poppins' }}>
              The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train. Our model achieves 28.4 BLEU on the WMT 2014 English-to-German translation task, improving over the existing best results, including ensembles, by over 2 BLEU. On the WMT 2014 English-to-French translation task, our model establishes a new single-model state-of-the-art BLEU score of ...
            </p>
            <p className="text-sm mt-4" style={{ fontFamily: 'Poppins' }}>
              <a href="https://arxiv.org/pdf/1706.03762.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                arxiv pdf implementation
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Background Images */}
      <img src="/gpt equation.png" alt="Background" className="absolute bg-image" style={{ top: '23%', left: '52%', width: '200px', transform: 'rotate(10deg)' }} />
      <img src="/gradient descent.png" alt="Background" className="absolute bg-image" style={{ top: '20%', left: '65%', width: '300px' }} />
      <img src="/normalization.png" alt="Background" className="absolute bg-image" style={{ top: '23%', left: '36%', width: '120px' }} />
      <img src="/big NN.png" alt="Background" className="absolute bg-image" style={{ top: '8%', left: '10%', width: '180px' }} />
      <img src="/accelerated.png" alt="Background" className="absolute bg-image2" style={{ top: '10%', left: '55%', width: '250px' }} />
      <img src="/kernel eqn.png" alt="Background" className="absolute bg-image" style={{ top: '25%', left: '8%', width: '350px', transform: 'rotate(10deg)' }} />
      <img src="/sigmoid curve.png" alt="Background" className="absolute bg-image" style={{ top: '7%', left: '22%', width: '200px', transform: 'rotate(10deg)' }} />
      <img src="/rnn.png" alt="Background" className="absolute bg-image" style={{ top: '7%', left: '40%', width: '100px', transform: 'rotate(-10deg)' }} />
      <img src="/clustering (2).png" alt="Background" className="absolute bg-image" style={{ top: '5%', left: '75%', width: '200px', transform: 'rotate(-10deg)' }} />
    </div>
  );
}

export default App;
