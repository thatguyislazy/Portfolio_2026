"use client";

import React, { useState } from 'react';
import { Cpu, Smartphone, Globe} from 'lucide-react';// The Projects component showcases a curated selection of recent projects, emphasizing IoT, embedded systems, and web dashboard solutions. Each project entry includes a title, description, technology tags, and a category for filtering. The projects are displayed in a responsive grid layout with hover effects and categorized tabs for easy navigation.

export function Projects() {
  const [filter, setFilter] = useState('ALL');
  const categories = ['ALL', 'WEB & DASHBOARD', 'MOBILE APP', 'IOT & EMBEDDED'];
  //consist of project done by boss marc
  const projectData = [
    {
      title: 'Hepaview : Portable Machine for Rapid Hepatitis B Detection',
      desc: 'An innovative medical-IoT engineering solution designed to decentralize diagnostic access. By combining micro-watt edge computing hardware with specialized computer vision algorithms, Hepaview automates the colorimetric reading process of rapid Hepatitis B test strips',
      tags: ['Machine Learning', 'OpenCV', 'Python', 'Internet-of-Things', 'Raspberry Pi', 'Firebase'],
      category: 'IOT & EMBEDDED',
      icon: <Cpu className="w-4 h-4" />
    },

    {
    title: 'Reverse Vending Machine: WiFi Reward',
    desc: 'An assistive hardware device engineered to enhance mobility for visually impaired individuals through integrated hazard sensing and artificial intelligence. Driven by C++ firmware, it utilizes real-time ultrasonic and moisture threshold calculations to instantly detect obstacles or the presence of water, triggering immediate haptic feedback and lifelike vocal alerts generated via an ElevenLabs AI synthesis pipeline.',    tags: ['Arduino', 'Internet of Things', 'Python', 'HTML', 'SQLite', 'C++', 'Raspberry Pi'],
    category: 'IOT & EMBEDDED',
    icon: <Cpu className="w-4 h-4" />
    },

    {
    title: 'Smart Cane with Voice AI',
    desc: 'An innovative IoT eco-kiosk that incentivizes recycling by exchanging empty plastic bottles for timed WiFi access tokens. Driven by hardware-level sensors, it detects deposit events and uses a Python back-end to instantly generate and issue localized captive portal network credentials to the user.',
    tags: ['ESP32', 'Internet of Things', 'ElevenLabs Voice AI', 'C++'],
    category: 'IOT & EMBEDDED',
    icon: <Cpu className="w-4 h-4" />
    },
    
    {
      title: 'Air Quality Monitoring System with Predictive Analysis',
      desc: 'IoT-based environment network measuring air particulate pollutants coupled with localized machine learning algorithms to map upcoming air quality index shifts. Dispatches critical text alerts alongside a clean web visualization dashboard layer.',
      tags: ['Machine Learning', 'Python', 'Arduino', 'C++', 'Internet-of-Things', 'ESP32', 'Firebase', 'NextJs', 'Shadcn/UI'],
      category: 'WEB & DASHBOARD',  
      icon: <Globe className="w-4 h-4" />
    },

    {
    title: 'AEGIS: Surveillance Camera',
    desc: 'A web-centric edge biometrics surveillance network combining a localized Raspberry Pi computer vision pipeline with real-time vector monitoring analytics. Utilizing highly targeted custom machine learning models trained via Roboflow and processed via OpenCV, it automates mosquito detection, maps localized vector activity, and relays threat telemetry directly to a responsive glassmorphic web dashboard.',
    tags: ['Raspberry Pi', 'OpenCV', 'Roboflow', 'Python', 'Machine Learning', 'Vector Telemetry'],
    category: 'WEB & DASHBOARD',
    icon: <Globe className="w-4 h-4" />
    },

    {
      title: 'Reverse Vending Machine Point System',
      desc: 'Smart ecosystem identifying and sorting distinct recyclable configurations utilizing high-speed edge computer vision. Computes materials instantly and rewards eco-conscious profiles with transaction tokens accessible via a companion mobile web portal.',
      tags: ['Machine Learning', 'OpenCV', 'Python', 'Internet-of-Things', 'Arduino', 'C++', 'Firebase', 'NextJs', 'TailwindCSS', 'TypeScript', 'Shadcn/UI'],
      category: 'IOT & EMBEDDED',
      icon: <Cpu className="w-4 h-4" />
    },

    {
    title: 'Vertical Green Walls & Bifacial Solar Simulation Dashboard',
    desc: 'An advanced simulation and environmental performance dashboard designed to analyze the thermodynamic and energy efficiency impacts of combining vertical green walls with bifacial solar panel systems. Features interactive calculation toggles, localized ambient temperature reduction graphs, and granular financial payback charts wrapped in a responsive, modern dark-mode interface.',
    tags: ['React.js', 'Tailwind CSS', 'Data Visualization', 'Simulation Logic', 'Environmental Telemetry'],
    category: 'WEB & DASHBOARD',
    icon: <Globe className="w-4 h-4" />
    },

    {
    title: 'AUXILIUM: Mobile ASL Translation Platform',
    desc: 'A mobile communication aid that translates American Sign Language (ASL) to text and vice versa using the phone camera and on-device CNN machine learning models. Built to operate entirely offline for costless access during emergencies, it includes a signature phrase library and user-friendly navigation to bridge communication barriers.',
    tags: ['Flutter', 'Kotlin', 'CNN Models', 'Dart', 'Camera API'],
    category: 'MOBILE APP',
    icon: <Smartphone className="w-4 h-4" />
    },

    {
      title: 'AQUAHALO: Offline GPS Tracking & Dashboard',
      desc: 'An offline-capable maritime safety and asset mapping mobile app utilizing raw telemetry streams to maintain accurate positioning without network dependency. Syncs with frosted glass telemetry views when connectivity restores.',
      tags: ['Flutter', 'Dart', 'GPS Telemetry', 'Mobile UI Design', 'ESP32'],
      category: 'MOBILE APP',
      icon: <Smartphone className="w-4 h-4" />
    },
    
    {
      title: 'Smart Centralized Trash Monitoring System',
      desc: 'Interconnected array of sensory physical management receptacles passing filling volume capacities to optimize active route collection patterns. Displays dynamic analytics and automated timeline collection metrics.',
      tags: ['Internet-of-Things', 'Arduino', 'C++', 'ESP32', 'Firebase', 'JavaScript', 'Bootstrap'],
      category: 'WEB & DASHBOARD',
      icon: <Globe className="w-4 h-4" />
    }
  ];

  // Helper mapping clean tabs to underlying structured categories
  const filterMapping: { [key: string]: string } = {
    'ALL': 'ALL',
    'WEB & DASHBOARD': 'WEB & DASHBOARD',
    'MOBILE APP': 'MOBILE APP',
    'IOT & EMBEDDED': 'IOT & EMBEDDED'
  };

  const filteredProjects = filter === 'ALL' 
    ? projectData 
    : projectData.filter(p => filterMapping[filter] === p.category);

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#0b0f19]">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
        <div>
          <h3 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Favorite Projects
          </h3>
        </div>
        
        {/* Glassmorphic Category Selector Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1.5 bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-xl w-full lg:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium tracking-tight transition-all duration-200 flex-1 lg:flex-none ${
                filter === cat 
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-md shadow-blue-500/10 border border-white/10' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Architecture */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300">
        {filteredProjects.map((proj, idx) => (
          <div 
            key={idx} 
            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-slate-900/40 to-slate-950/60 border border-white/5 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 backdrop-blur-sm"
          >
            {/* Hover Ambient Border Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/0 via-teal-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500" />
            
            <div className="relative z-10">
              {/* Card Meta Tag */}
              <div className="flex items-center gap-2 mb-4 text-[10px] font-mono tracking-widest text-teal-400 font-bold uppercase">
                <span className="p-1.5 rounded-lg bg-slate-900/80 border border-white/5 text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/20 transition-all duration-300">
                  {proj.icon}
                </span>
                <span>{proj.category}</span>
              </div>

              <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200 mb-3 tracking-tight">
                {proj.title}
              </h4>
              
              <p className="text-sm text-slate-400 leading-relaxed mb-6 font-normal min-h-[80px]">
                {proj.desc}
              </p>
            </div>

            <div className="relative z-10 mt-auto">
              {/* Technology Tokens */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {proj.tags.map((t, tIdx) => (
                    <span 
                    key={tIdx} 
                    className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-500/20"
                    >
                    {t}
                    </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}