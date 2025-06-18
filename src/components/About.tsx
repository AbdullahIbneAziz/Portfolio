import React from 'react';
import { MapPin, Mail, Calendar, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section className="py-20 px-4 relative bg-gradient-to-b from-blue-950 via-gray-900 to-gray-900">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo Section - First on mobile/tablet, left on desktop */}
          <div className="flex justify-center lg:justify-start lg:pl-8 order-1">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-2">
                <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://i.ibb.co/vCjvmW23/Pro-pic.jpg"
                    alt="Md Abdullah Ibne Aziz - ML Engineer"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      // Fallback to a placeholder if the image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400";
                    }}
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full animate-pulse opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full animate-pulse opacity-30"></div>
            </div>
          </div>

          {/* Info Section - Second on mobile/tablet, right on desktop */}
          <div className="space-y-8 order-2">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">
                Hello, I'm Md Abdullah Ibne Aziz
              </h3>
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                Passionate Machine Learning Engineer with 3+ years of experience in developing 
                and deploying AI solutions. I specialize in deep learning, computer vision, 
                and natural language processing, with a strong focus on creating scalable 
                and production-ready ML systems.
              </p>
              <p className="leading-relaxed text-gray-400">
                My journey in AI began with a fascination for how machines can learn and 
                adapt. Today, I work on cutting-edge projects that push the boundaries 
                of what's possible with artificial intelligence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <span>Uttara, Dhaka</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <span className="break-all">aziz.miraz123@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Calendar className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <span>3+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Award className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <span>BSc in Computer Science</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-full border bg-blue-500/20 border-blue-500/30 text-blue-300">
                <span className="font-medium">Deep Learning</span>
              </div>
              <div className="px-4 py-2 rounded-full border bg-blue-500/20 border-blue-500/30 text-blue-300">
                <span className="font-medium">Computer Vision</span>
              </div>
              <div className="px-4 py-2 rounded-full border bg-blue-500/20 border-blue-500/30 text-blue-300">
                <span className="font-medium">NLP</span>
              </div>
              <div className="px-4 py-2 rounded-full border bg-blue-500/20 border-blue-500/30 text-blue-300">
                <span className="font-medium">MLOps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;