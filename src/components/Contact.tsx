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
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // Form validation
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Direct email submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Hello Md Abdullah Ibne Aziz,

I'm reaching out through your portfolio website contact form.

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
This message was sent from your portfolio contact form.
Please feel free to reply directly to this email.

Best regards,
${formData.name}`
      );
      
      const mailtoLink = `mailto:aziz.miraz123@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Email submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Interactive contact handlers
  const handleEmailClick = () => {
    window.location.href = 'mailto:aziz.miraz123@gmail.com';
  };

  const handlePhoneClick = () => {
    const whatsappNumber = '8801857659968';
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLocationClick = () => {
    const mapsUrl = 'https://www.google.com/maps/search/Uttara,+Dhaka,+Bangladesh';
    window.open(mapsUrl, '_blank');
  };

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/AbdullahIbneAziz', 
      label: 'GitHub',
      color: 'hover:bg-gray-700'
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
    <section className="py-20 px-4 relative bg-gradient-to-b from-gray-900 via-black to-black">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Ready to collaborate on your next ML project? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
              <p className="text-lg mb-8 leading-relaxed text-gray-300">
                I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                or share insights about machine learning and AI. Whether you're looking to implement 
                ML solutions or just want to chat about the latest in AI research, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {/* Interactive Email Button */}
              <button
                onClick={handleEmailClick}
                className="flex items-center space-x-4 w-full text-left p-4 rounded-xl border transition-all duration-300 transform hover:scale-105 group bg-gray-900/30 border-gray-800/50 hover:border-blue-500/50 hover:bg-gray-800/50"
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl group-hover:from-blue-400 group-hover:to-blue-500 transition-all duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Email</p>
                  <p className="font-medium text-white group-hover:text-blue-300 transition-colors">aziz.miraz123@gmail.com</p>
                </div>
              </button>

              {/* Interactive Phone/WhatsApp Button */}
              <button
                onClick={handlePhoneClick}
                className="flex items-center space-x-4 w-full text-left p-4 rounded-xl border transition-all duration-300 transform hover:scale-105 group bg-gray-900/30 border-gray-800/50 hover:border-green-500/50 hover:bg-gray-800/50"
              >
                <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl group-hover:from-green-400 group-hover:to-green-500 transition-all duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">WhatsApp</p>
                  <p className="font-medium text-white group-hover:text-green-300 transition-colors">+880 1857 659968</p>
                </div>
              </button>

              {/* Interactive Location Button */}
              <button
                onClick={handleLocationClick}
                className="flex items-center space-x-4 w-full text-left p-4 rounded-xl border transition-all duration-300 transform hover:scale-105 group bg-gray-900/30 border-gray-800/50 hover:border-red-500/50 hover:bg-gray-800/50"
              >
                <div className="p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-xl group-hover:from-red-400 group-hover:to-red-500 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Location</p>
                  <p className="font-medium text-white group-hover:text-red-300 transition-colors">Uttara, Dhaka</p>
                </div>
              </button>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg bg-gray-800 text-gray-400 hover:text-white ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl p-8 border bg-gray-900/50 backdrop-blur-sm border-gray-800/50">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-gray-400">Fill out the form below and I'll get back to you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800/50 text-white placeholder-gray-400 ${
                      errors.name ? 'border-red-500' : 'border-gray-700'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800/50 text-white placeholder-gray-400 ${
                      errors.email ? 'border-red-500' : 'border-gray-700'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800/50 text-white placeholder-gray-400 ${
                    errors.subject ? 'border-red-500' : 'border-gray-700'
                  }`}
                  placeholder="Project Collaboration Opportunity"
                />
                {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-gray-800/50 text-white placeholder-gray-400 ${
                    errors.message ? 'border-red-500' : 'border-gray-700'
                  }`}
                  placeholder="Tell me about your project or idea. I'd love to hear about your ML/AI requirements and how we can work together..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-300">
                  <p className="font-medium">✅ Your email client should open with the message ready to send!</p>
                  <p className="text-sm mt-1">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-300">
                  <p className="font-medium">❌ Something went wrong</p>
                  <p className="text-sm mt-1">Please try again or contact me directly at aziz.miraz123@gmail.com</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-xl text-white font-medium transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 hover:scale-105 hover:shadow-lg'
                }`}
              >
                <Send className="w-5 h-5" />
                <span>
                  {isSubmitting ? 'Opening Email Client...' : 'Send Message'}
                </span>
              </button>

              <div className="text-center">
                <p className="text-sm text-gray-400">
                  This will open your default email client with the message pre-filled and ready to send to aziz.miraz123@gmail.com
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t text-center border-gray-800/50 text-gray-400">
          <p>
            © 2024 Md Abdullah Ibne Aziz. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;