/**
 * Newsletter Component
 * 
 * Newsletter subscription section with email input and stats.
 */

import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { newsletterData } from 'data/homeData';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Mail className="h-16 w-16 text-white mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {newsletterData.title}
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {newsletterData.description}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={newsletterData.placeholder}
              className="flex-1 px-6 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <button
              type="submit"
              disabled={isSubmitted}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50"
            >
              {isSubmitted ? (
                <CheckCircle className="h-5 w-5" />
              ) : (
                newsletterData.buttonText
              )}
            </button>
          </div>
        </form>

        {isSubmitted && (
          <p className="mt-4 text-green-200 font-medium">
            Thank you for subscribing! Check your email for confirmation.
          </p>
        )}

        <div className="mt-12 grid grid-cols-3 gap-8 text-center">
          {newsletterData.stats.map((stat, index) => (
            <div key={index}>
              <div className="text-2xl font-bold text-white">{stat.number}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

