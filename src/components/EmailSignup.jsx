import React, { useState } from 'react';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In a real app, this would send to a backend/email service
      console.log('Email submitted:', email);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-soul-100 to-orange-100 rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Stay Connected
          </h2>
          <p className="text-gray-700 mb-8">
            Get the latest on new releases, special editions, and behind-the-music updates 
            delivered straight to your inbox.
          </p>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-soul-300 focus:border-soul-500 focus:outline-none focus:ring-2 focus:ring-soul-200"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="bg-soul-500 hover:bg-soul-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg"
                  aria-label="Submit email"
                >
                  Join
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-white rounded-lg p-6 shadow-md">
              <p className="text-soul-600 font-semibold text-lg">
                Thanks — you're on the list! 🎵
              </p>
              <p className="text-gray-600 mt-2">
                We'll keep you updated with our latest music and news.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
