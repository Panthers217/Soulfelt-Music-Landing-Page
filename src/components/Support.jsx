import React from 'react';

const Support = () => {
  const supportLevels = [
    { amount: 3, label: 'Support $3' },
    { amount: 5, label: 'Support $5' },
    { amount: 10, label: 'Support $10' },
  ];

  return (
    <section id="support" className="py-16 sm:py-20 bg-gradient-to-br from-soul-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Support the Music
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Streaming helps people discover us. Support helps us continue creating 
          music that moves hearts and lifts spirits.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
          {supportLevels.map((level, index) => (
            <a
              key={index}
              href="#"
              className="flex-1 bg-white hover:bg-soul-500 text-soul-600 hover:text-white font-bold py-4 px-6 rounded-xl border-2 border-soul-500 transition-all transform hover:scale-105 shadow-lg"
              aria-label={`Support with ${level.amount} dollars`}
            >
              {level.label}
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-6">
          Your support goes directly toward production, distribution, and new releases
        </p>
      </div>
    </section>
  );
};

export default Support;
