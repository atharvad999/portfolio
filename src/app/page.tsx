'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'Python', level: 95 },
    { name: 'ComfyUI', level: 90 },
    { name: 'LLMs', level: 88 },
    { name: 'API Integration', level: 92 },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold"
            >
              AD
            </motion.span>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Projects', 'Skills', 'About'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600 dark:text-blue-400' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Atharva Deshpande
            </h1>
            <div className="mb-8">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto mb-6"
            >
           <Image
              src="/IMG_0127.jpeg"
              alt="Atharva Deshpande"
              fill
              sizes="(max-width: 768px) 256px, (max-width: 1200px) 320px, 384px"
              className="rounded-2xl object-cover border-4 border-white dark:border-gray-800 shadow-xl"
              priority
              onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/200x200.png?text=AD";
                }}
              />
            </motion.div>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Generative AI | Musician | Building tools at the intersection of creativity and automation
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/atharvad999"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                View GitHub
              </a>
              <a
                href="mailto:atharvadesh9@gmail.com"
                className="px-6 py-3 border-2 border-gray-900 dark:border-gray-100 rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            I&apos;m Atharva, a passionate engineer who blends creative thinking with technical rigor. 
            From AI-powered marketing tools to scraping engines and visual content generators, 
            I love shipping things that work and solve real-world problems. My expertise lies in 
            developing AI solutions that bridge the gap between complex technology and practical applications.
            I believe in launching fast, learning fast, and refining with purpose.
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '🎯 Ad Creative Generator',
                description: 'Generates titles, descriptions, and SEO content using vision models and FastAPI backend. Integrated with Gradio UI and deployed with Groq API.',
                link: 'https://github.com/atharvad999/ad-creative-maker/tree/main',
                tags: ['AI', 'FastAPI', 'Gradio']
              },
              {
                title: '6 panel comic strip (100x Mid Capstone Project)',
                description: 'A comic book I made using my own LoRa. The comic generation is done purely using Flux. The whole process was done using ComfyUI.',
                link: 'https://drive.google.com/file/d/1nBM-sIORmdx1V0oBTcLJ_KooHERhBIeT/view',
                tags: ['ComfyUI','Image Diffusion','FluxDev']
              },
              {
                title: '🧠 Instant Product Catalogue Assistant',
                description: 'Multimodal project that takes product images and generates SEO tags, descriptions and category labels.',
                link: 'https://huggingface.co/spaces/atharvad999/Instant_Product_Catalogue_Assistant',
                tags: ['Computer Vision', 'GPT', 'AI','FastAPI','Gradio']
              },
              {
                title: '📧 Gmail Clone - CS50x Final Project',
                description: 'A full-featured Gmail clone built as my CS50x final project. Features include email composition, inbox management, and user authentication.',
                link: 'https://github.com/atharvad999/cs50x-final-project',
                tags: ['Python', 'Flask', 'SQLite', 'JavaScript', 'HTML/CSS']
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Medium Article Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-4">Read My Article</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Explore my thoughts and insights on CS, AI and technology
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <a
                  href="https://medium.com/@hjqwjc/rediscovering-cs-my-journey-back-with-ai-cs50x-100x-5adfd76b51f2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white text-white dark:text-gray-900 rounded-xl hover:shadow-lg transition-all"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                  Read on Medium
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-12 px-4 bg-white/30 dark:bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Download My Resume</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Get a detailed overview of my experience, skills, and achievements
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="/Resume.pdf"
                download
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" />
                </svg>
                Download Resume (PDF)
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-blue-600 h-2.5 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
