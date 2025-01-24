import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          disabled={status === 'loading'}
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          disabled={status === 'loading'}
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 bg-zinc-800 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
          disabled={status === 'loading'}
        />
      </div>
      
      {status === 'success' && (
        <div className="p-4 text-green-400 bg-green-400/10 rounded-lg">
          Message sent successfully!
        </div>
      )}
      
      {status === 'error' && (
        <div className="p-4 text-red-400 bg-red-400/10 rounded-lg">
          Failed to send message. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-6 py-3 text-white transition-all duration-300 bg-red-500 rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;