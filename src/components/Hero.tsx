import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Sparkles, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displayedName, setDisplayedName] = useState('');
  const fullName = 'Md Abdullah Ibne Aziz';
  const { isDark } = useTheme();

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    const dots: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }> = [];

    // Create dots
    for (let i = 0; i < 60; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 4 + 1,
        opacity: Math.random() * 0.6 + 0.3,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw dots
      dots.forEach((dot, i) => {
        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off edges
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${dot.opacity})`;
        ctx.fill();

        // Draw lines to nearby dots
        dots.slice(i + 1).forEach((otherDot) => {
          const dx = dot.x - otherDot.x;
          const dy = dot.y - otherDot.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(otherDot.x, otherDot.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${(1 - distance / 180) * 0.4})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDark]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 pt-32 bg-gradient-to-br from-black via-gray-900 to-blue-950">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'transparent' }}
      />
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-16">
          {/* Main Title with proper spacing and line height */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4">
              <span className="text-white block mb-4">
                Turn Ideas Into Smart Output
              </span>
            </h1>
          </div>
          
          {/* Typing Animation Name with equal spacing */}
          <div className="text-3xl md:text-4xl lg:text-5xl font-light mb-16 min-h-[60px] flex items-center justify-center text-white">
            <span className="border-r-2 pr-2 animate-pulse border-blue-400">
              {displayedName}
            </span>
          </div>
          
          {/* Subtitle with equal spacing */}
          <span className="text-4xl md:text-5xl lg:text-6xl font-light block mb-16 text-white">
            AI Architect & ML Innovator
          </span>
          
          <div className="space-y-6 mb-12">
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-blue-200">
              Crafting Tomorrow's Solutions with Today's Data
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="px-6 py-3 rounded-full backdrop-blur-sm border bg-blue-500/20 border-blue-500/30 text-blue-300">
              <span className="font-medium">🧠 Deep Learning Expert</span>
            </div>
            <div className="px-6 py-3 rounded-full backdrop-blur-sm border bg-blue-500/20 border-blue-500/30 text-blue-300">
              <span className="font-medium">🔬 Research-Driven</span>
            </div>
            <div className="px-6 py-3 rounded-full backdrop-blur-sm border bg-blue-500/20 border-blue-500/30 text-blue-300">
              <span className="font-medium">⚡ Production-Ready</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button
            onClick={scrollToAbout}
            className="group relative overflow-hidden px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl border bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white shadow-blue-500/50 hover:shadow-blue-400/60 border-blue-400/20"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500"></div>
            <div className="relative flex items-center space-x-4">
              <Sparkles className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
              <span>Explore My Universe</span>
              <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
            </div>
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
          </button>
          
          <button 
            onClick={scrollToProjects}
            className="group relative overflow-hidden px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl border bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-500 text-white shadow-cyan-500/50 hover:shadow-cyan-400/60 border-cyan-400/20"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500"></div>
            <div className="relative flex items-center space-x-4">
              <Zap className="w-6 h-6 transition-colors duration-300 group-hover:text-cyan-300" />
              <span>View My Work</span>
              <span className="text-xl transition-all duration-300 group-hover:translate-x-2 text-cyan-200 group-hover:text-cyan-300">→</span>
            </div>
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 bg-gradient-to-r from-cyan-400 to-blue-400"></div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-blue-400/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;