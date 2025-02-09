import React from 'react';
import './App.css'; // Make sure to create this CSS file

function App() {
  return (
    <div className="min-h-screen bg-white p-8 pt-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-32">
          <h1 className="text-9xl font-normal mb-8 fade-in-up" style={{ fontFamily: 'Poppins' }}>
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
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-bold underline" style={{ fontFamily: 'Poppins' }}>
              today's paper:
            </h2>
            <span className="text-gray-600" style={{ fontFamily: 'Poppins' }}>
              2025/02/08
            </span>
          </div>

          {/* Paper title and authors, centered */}
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold" style={{ fontFamily: 'Poppins' }}>
              Attention is All You Need
            </h2>
            <p className="text-lg mb-2" style={{ fontFamily: 'Poppins' }}>
              Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, Illia Polosukhin
            </p>
          </div>

          {/* Abstract with rectangle and black border */}
          <div className="border border-black rounded-lg p-4 shadow-md inline-block text-left">
            <p className="text-base" style={{ fontFamily: 'Poppins' }}>
              The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior
              in quality while being more parallelizable and requiring significantly less time to train.
              Our model achieves 28.4 BLEU on the WMT 2014 English-to-German translation task, improving over the existing best results, including ensembles, by over 2 BLEU.
              On the WMT 2014 English-to-French translation task, our model establishes a new single-model state-of-the-art BLEU score of ...
            </p>
          </div>

          {/* Link to paper */}
          <div className="mt-2">
            <a href="https://arxiv.org/pdf/1706.03762.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 underline" style={{ fontFamily: 'Poppins' }}>
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
          <div className="border border-gray-200 rounded-lg p-6 mb-4">
            <ul className="space-y-4">
              <li className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-lg font-semibold" style={{ fontFamily: 'Poppins' }}>Attention is All You Need</span>
                <div className="flex items-center">
                  <a href="https://arxiv.org/pdf/1706.03762.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 underline mr-2" style={{ fontFamily: 'Poppins' }}>arxiv</a>
                  <span className="text-sm text-gray-400" style={{ fontFamily: 'Poppins' }}>2025/02/08</span>
                </div>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-lg font-semibold" style={{ fontFamily: 'Poppins' }}>ImageNet Classification with Deep Convolutional Neural Networks</span>
                <div className="flex items-center">
                  <a href="https://arxiv.org/pdf/1409.1556.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 underline mr-2" style={{ fontFamily: 'Poppins' }}>arxiv</a>
                  <span className="text-sm text-gray-400" style={{ fontFamily: 'Poppins' }}>2025/02/08</span>
                </div>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-lg font-semibold" style={{ fontFamily: 'Poppins' }}>Deep Residual Learning for Image Recognition</span>
                <div className="flex items-center">
                  <a href="https://arxiv.org/pdf/1512.03385.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 underline mr-2" style={{ fontFamily: 'Poppins' }}>arxiv</a>
                  <span className="text-sm text-gray-400" style={{ fontFamily: 'Poppins' }}>2025/02/08</span>
                </div>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-lg font-semibold" style={{ fontFamily: 'Poppins' }}>Neural Machine Translation by Jointly Learning to Align and Translate</span>
                <div className="flex items-center">
                  <a href="https://arxiv.org/pdf/1409.0473.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 underline mr-2" style={{ fontFamily: 'Poppins' }}>arxiv</a>
                  <span className="text-sm text-gray-400" style={{ fontFamily: 'Poppins' }}>2025/02/08</span>
                </div>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-lg font-semibold" style={{ fontFamily: 'Poppins' }}>Adam: A Method for Stochastic Optimization</span>
                <div className="flex items-center">
                  <a href="https://arxiv.org/pdf/1412.6980.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 underline mr-2" style={{ fontFamily: 'Poppins' }}>arxiv</a>
                  <span className="text-sm text-gray-400" style={{ fontFamily: 'Poppins' }}>2025/02/08</span>
                </div>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-lg font-semibold" style={{ fontFamily: 'Poppins' }}>Unsupervised Representation Learning with Deep Convolutional Generative Adversarial Networks</span>
                <div className="flex items-center">
                  <a href="https://arxiv.org/pdf/1511.06434.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 underline mr-2" style={{ fontFamily: 'Poppins' }}>arxiv</a>
                  <span className="text-sm text-gray-400" style={{ fontFamily: 'Poppins' }}>2025/02/08</span>
                </div>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-lg font-semibold" style={{ fontFamily: 'Poppins' }}>BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding</span>
                <div className="flex items-center">
                  <a href="https://arxiv.org/pdf/1810.04805.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 underline mr-2" style={{ fontFamily: 'Poppins' }}>arxiv</a>
                  <span className="text-sm text-gray-400" style={{ fontFamily: 'Poppins' }}>2025/02/08</span>
                </div>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-lg font-semibold" style={{ fontFamily: 'Poppins' }}>Mask R-CNN</span>
                <div className="flex items-center">
                  <a href="https://arxiv.org/pdf/1703.06870.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 underline mr-2" style={{ fontFamily: 'Poppins' }}>arxiv</a>
                  <span className="text-sm text-gray-400" style={{ fontFamily: 'Poppins' }}>2025/02/08</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-gray-200 my-10"></div>

        {/* Join the Discussion Section */}
        <div className="text-center mt-10">
          <h2 className="text-3xl font-bold underline mb-5" style={{ fontFamily: 'Poppins' }}>
            join the discussion:
          </h2>
          <div className="flex justify-center space-x-4">
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <img src="/discord logo.png" alt="Discord" className="w-10 h-10" />
            </a>
            <a href="https://reddit.com" target="_blank" rel="noopener noreferrer">
              <img src="/reddit logo.png" alt="Reddit" className="w-10 h-10" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/x logo.png" alt="Twitter" className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>

      {/* Background Images */}
      <img src="/gpt equation.png" alt="Background" className="absolute bg-image" style={{ top: '13%', left: '52%', width: '200px', transform: 'rotate(10deg)' }} />
      <img src="/gradient descent.png" alt="Background" className="absolute bg-image" style={{ top: '12%', left: '65%', width: '300px' }} />
      <img src="/normalization.png" alt="Background" className="absolute bg-image" style={{ top: '13%', left: '36%', width: '120px' }} />
      <img src="/big NN.png" alt="Background" className="absolute bg-image" style={{ top: '5%', left: '10%', width: '180px' }} />
      <img src="/accelerated.png" alt="Background" className="absolute bg-image2" style={{ top: '6%', left: '55%', width: '250px' }} />
      <img src="/kernel eqn.png" alt="Background" className="absolute bg-image" style={{ top: '14.5%', left: '8%', width: '350px', transform: 'rotate(10deg)' }} />
      <img src="/sigmoid curve.png" alt="Background" className="absolute bg-image" style={{ top: '4%', left: '22%', width: '200px', transform: 'rotate(10deg)' }} />
      <img src="/rnn.png" alt="Background" className="absolute bg-image" style={{ top: '4%', left: '40%', width: '100px', transform: 'rotate(-10deg)' }} />
      <img src="/clustering (2).png" alt="Background" className="absolute bg-image" style={{ top: '3%', left: '75%', width: '200px', transform: 'rotate(-10deg)' }} />
    </div>
  );
}

export default App;
