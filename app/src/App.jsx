import React, { useState, useEffect } from 'react';

function App() {
  const [beats, setBeats] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/beats')
      .then(response => response.json())
      .then(data => setBeats(data))
      .catch(error => console.error('Error fetching beats:', error));
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-5xl font-bold mb-8 text-center">Beats by Wybie</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beats.map(beat => (
            <div key={beat.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src={beat.thumbnailUrl} alt={beat.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{beat.title}</h2>
                <p className="text-gray-400 mb-4">{beat.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold">${beat.price}</span>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
