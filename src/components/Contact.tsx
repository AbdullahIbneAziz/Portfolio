import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact: React.FC = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:aziz.miraz123@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Interactive contact handlers
  const handleEmailClick = () => {
    window.location.href = 'mailto:aziz.miraz123@gmail.com';
  };

  const handlePhoneClick = () => {
    // WhatsApp link with international format
    const whatsappNumber = '8801857659968'; // Remove the + for WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLocationClick = () => {
    // Google Maps link for Uttara, Dhaka
    const mapsUrl = 'https://www.google.com/maps/search/Uttara,+Dhaka,+Bangladesh';
    window.open(mapsUrl, '_blank');
  };

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/AbdullahIbneAziz', 
      label: 'GitHub',
      color: isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/mdabdullahibneaziz/', 
      label: 'LinkedIn',
      color: 'hover:bg-blue-600'
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/overlordmiraz/', 
      label: 'Instagram',
      color: 'hover:bg-pink-600'
    },
  ];

  return (
    <section className={`py-20 px-4 relative ${
      isDark 
        ? 'bg-gradient-to-b from-gray-900 via-black to-black' 
        : 'bg-gradient-to-b from-gray-100 via-white to-white'
    }`}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Ready to collaborate on your next ML project? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Let's Connect</h3>
              <p className={`text-lg mb-8 leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                or share insights about machine learning and AI. Whether you're looking to implement 
                ML solutions or just want to chat about the latest in AI research, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {/* Interactive Email Button */}
              <button
                onClick={handleEmailClick}
                className={`flex items-center space-x-4 w-full text-left p-4 rounded-xl border transition-all duration-300 transform hover:scale-105 group ${
                  isDark 
                    ? 'bg-gray-900/30 border-gray-800/50 hover:border-blue-500/50 hover:bg-gray-800/50' 
                    : 'bg-white/80 border-gray-200/50 hover:border-blue-400/50 hover:bg-blue-50/50'
                }`}
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl group-hover:from-blue-400 group-hover:to-blue-500 transition-all duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className={`transition-colors ${
                    isDark 
                      ? 'text-gray-400 group-hover:text-gray-300' 
                      : 'text-gray-600 group-hover:text-gray-700'
                  }`}>Email</p>
                  <p className={`font-medium transition-colors ${
                    isDark 
                      ? 'text-white group-hover:text-blue-300' 
                      : 'text-gray-900 group-hover:text-blue-600'
                  }`}>aziz.miraz123@gmail.com</p>
                </div>
              </button>

              {/* Interactive Phone/WhatsApp Button */}
              <button
                onClick={handlePhoneClick}
                className={`flex items-center space-x-4 w-full text-left p-4 rounded-xl border transition-all duration-300 transform hover:scale-105 group ${
                  isDark 
                    ? 'bg-gray-900/30 border-gray-800/50 hover:border-green-500/50 hover:bg-gray-800/50' 
                    : 'bg-white/80 border-gray-200/50 hover:border-green-400/50 hover:bg-green-50/50'
                }`}
              >
                <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl group-hover:from-green-400 group-hover:to-green-500 transition-all duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className={`transition-colors ${
                    isDark 
                      ? 'text-gray-400 group-hover:text-gray-300' 
                      : 'text-gray-600 group-hover:text-gray-700'
                  }`}>WhatsApp</p>
                  <p className={`font-medium transition-colors ${
                    isDark 
                      ? 'text-white group-hover:text-green-300' 
                      : 'text-gray-900 group-hover:text-green-600'
                  }`}>+880 1857 659968</p>
                </div>
              </button>

              {/* Interactive Location Button */}
              <button
                onClick={handleLocationClick}
                className={`flex items-center space-x-4 w-full text-left p-4 rounded-xl border transition-all duration-300 transform hover:scale-105 group ${
                  isDark 
                    ? 'bg-gray-900/30 border-gray-800/50 hover:border-red-500/50 hover:bg-gray-800/50' 
                    : 'bg-white/80 border-gray-200/50 hover:border-red-400/50 hover:bg-red-50/50'
                }`}
              >
                <div className="p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-xl group-hover:from-red-400 group-hover:to-red-500 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className={`transition-colors ${
                    isDark 
                      ? 'text-gray-400 group-hover:text-gray-300' 
                      : 'text-gray-600 group-hover:text-gray-700'
                  }`}>Location</p>
                  <p className={`font-medium transition-colors ${
                    isDark 
                      ? 'text-white group-hover:text-red-300' 
                      : 'text-gray-900 group-hover:text-red-600'
                  }`}>Uttara, Dhaka</p>
                </div>
              </button>
            </div>

            <div>
              <h4 className={`text-lg font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                      isDark 
                        ? 'bg-gray-800 text-gray-400 hover:text-white' 
                        : 'bg-gray-100 text-gray-600 hover:text-white'
                    } ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`rounded-2xl p-8 border ${
            isDark 
              ? 'bg-gray-900/50 backdrop-blur-sm border-gray-800/50' 
              : 'bg-white/80 backdrop-blur-sm border-gray-200/50'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      isDark 
                        ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400' 
                        : 'bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      isDark 
                        ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400' 
                        : 'bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    isDark 
                      ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400' 
                      : 'bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                    isDark 
                      ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400' 
                      : 'bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-xl text-white font-medium transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  isDark ? 'focus:ring-offset-gray-900' : 'focus:ring-offset-white'
                } ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-500'
                    : submitStatus === 'error'
                    ? 'bg-red-600 hover:bg-red-500'
                    : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 hover:scale-105'
                }`}
              >
                <Send className="w-5 h-5" />
                <span>
                  {isSubmitting
                    ? 'Sending...'
                    : submitStatus === 'success'
                    ? 'Message Sent!'
                    : submitStatus === 'error'
                    ? 'Try Again'
                    : 'Send Message'}
                </span>
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-400 text-center text-sm">
                  Your email client should open with the message ready to send!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-20 pt-8 border-t text-center ${
          isDark ? 'border-gray-800/50 text-gray-400' : 'border-gray-200/50 text-gray-600'
        }`}>
          <p>
            © 2024 Md Abdullah Ibne Aziz. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;