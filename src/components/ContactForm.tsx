import React, { useState } from 'react';

interface FormData {
  topic: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    topic: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ topic: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 p-8 rounded-lg shadow-xl transform hover:scale-[1.02] transition-all duration-300">
      <div className="mb-6">
        <label htmlFor="topic" className="block text-sm font-medium text-gray-300 mb-2">
          Topic
        </label>
        <input
          type="text"
          id="topic"
          value={formData.topic}
          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
          className="w-full bg-zinc-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
          placeholder="Enter topic"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-zinc-700 text-white rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
          placeholder="Enter your message"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-zinc-800"
      >
        Send Message
      </button>
    </form>
  );
}