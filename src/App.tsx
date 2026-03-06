/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import { 
  Twitter, 
  Send, 
  ExternalLink, 
  ShieldCheck, 
  Zap, 
  Users, 
  Flame,
  ArrowRight,
  Copy,
  Check,
  Volume2,
  TrendingUp,
  Lock,
  Globe
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

const CA = "CEkNoRheGRmbcWJVQyiR86Fv7GMSriX9vM115CxRpump";
const BRUH_SOUND_URL = "https://www.myinstants.com/media/sounds/bruh.mp3";

export default function App() {
  console.log("App: Rendering component");
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bruhCount, setBruhCount] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const scaleX = useTransform(smoothProgress, [0, 1], [0, 1]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.9]);

  useEffect(() => {
    audioRef.current = new Audio(BRUH_SOUND_URL);
    setBruhCount(Math.floor(Math.random() * 1000) + 5000);
  }, []);

  const playBruh = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlaying(true);
      setBruhCount(prev => prev + 1);
      setTimeout(() => setIsPlaying(false), 500);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div ref={containerRef} className="min-h-screen selection:bg-bruh-yellow selection:text-bruh-black relative">
      <div className="noise" />
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-bruh-yellow z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-bruh-black/40 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-bruh-yellow rounded-full flex items-center justify-center text-bruh-black font-black text-xl italic group-hover:rotate-[360deg] transition-transform duration-500">B</div>
            <span className="font-display text-2xl tracking-tighter italic text-stroke-white text-transparent group-hover:text-white transition-colors">BRUH</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            <a href="#vibe" className="hover:text-bruh-yellow transition-colors">The Vibe</a>
            <a href="#stats" className="hover:text-bruh-yellow transition-colors">Bruhnomics</a>
            <a href="#community" className="hover:text-bruh-yellow transition-colors">Community</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-4 py-1.5 glass rounded-full">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="font-mono text-[9px] text-white/60 uppercase tracking-widest">Creator Onboard</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://x.com/i/communities/2029761924016009619" target="_blank" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-bruh-yellow hover:text-bruh-black transition-all"><Twitter size={16} /></a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
          {/* Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] -z-10 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bruh-yellow rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-[150px] animate-pulse delay-700" />
          </div>

          <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="max-w-7xl mx-auto px-6 text-center z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-block mb-6 px-4 py-1 glass rounded-full">
                <span className="font-mono text-[10px] text-bruh-yellow uppercase tracking-[0.3em]">The Original Bruh Moment</span>
              </div>
              <h1 className="font-display text-[22vw] sm:text-[18vw] lg:text-[18rem] leading-[0.75] tracking-tighter italic text-stroke-white text-transparent mb-8 relative">
                BRUH<span className="text-bruh-yellow text-stroke-0">.</span>
                
                <AnimatePresence>
                  {isPlaying && (
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
                      animate={{ scale: 2, opacity: 1, rotate: 0 }}
                      exit={{ scale: 3, opacity: 0, rotate: 20 }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 font-display text-[10vw] text-bruh-yellow drop-shadow-[0_0_30px_rgba(250,204,21,0.5)] pointer-events-none"
                    >
                      BRUH!
                    </motion.div>
                  )}
                </AnimatePresence>
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-center gap-12"
            >
              <div className="flex flex-col items-center gap-4">
                <button 
                  onClick={playBruh}
                  className="group relative flex items-center gap-4 bg-bruh-yellow text-bruh-black px-8 py-4 sm:px-12 sm:py-6 rounded-full font-display text-3xl sm:text-5xl hover:scale-105 transition-all active:scale-95 bruh-shadow overflow-hidden"
                >
                  <Volume2 size={32} className="sm:w-10 sm:h-10" />
                  PLAY BRUH
                  <motion.div 
                    className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                  />
                </button>
                <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                  Total Bruhs: <span className="text-bruh-yellow">{bruhCount.toLocaleString()}</span>
                </div>
              </div>

              <div className="w-full max-w-2xl glass p-2 rounded-full flex items-center gap-4 group">
                <div className="pl-6 font-mono text-[10px] md:text-xs text-white/40 uppercase tracking-wider truncate flex-1">
                  {CA}
                </div>
                <button 
                  onClick={copyToClipboard}
                  className="bg-white text-bruh-black h-12 px-8 rounded-full font-bold text-xs transition-all hover:bg-bruh-yellow active:scale-95 flex items-center gap-2"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? "COPIED" : "COPY CA"}
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                className="absolute font-display text-9xl text-white italic text-stroke-white text-transparent animate-float"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 1.5}s`,
                  fontSize: `${Math.random() * 10 + 5}rem`
                }}
              >
                BRUH
              </motion.div>
            ))}
          </div>

          {/* Marquee */}
          <div className="absolute bottom-20 left-0 w-full border-y border-white/5 py-8 bg-white/[0.02] -rotate-1 scale-105 backdrop-blur-sm">
            <div className="animate-marquee whitespace-nowrap">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="font-display text-5xl md:text-7xl mx-12 flex items-center gap-6 opacity-40 hover:opacity-100 transition-opacity cursor-default">
                  BRUH MOMENT <Zap className="text-bruh-yellow" fill="currentColor" />
                  LOCKED IN <Flame className="text-bruh-yellow" fill="currentColor" />
                  $BRUH <Users className="text-bruh-yellow" fill="currentColor" />
                  NO RUGS <ShieldCheck className="text-bruh-yellow" fill="currentColor" />
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* The Vibe Section */}
        <section id="vibe" className="py-40 bg-white text-bruh-black relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-32 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-block mb-8 px-4 py-1 border border-bruh-black/10 rounded-full">
                  <span className="font-mono text-[10px] text-bruh-black/60 uppercase tracking-[0.3em]">The Philosophy</span>
                </div>
                <h2 className="font-display text-8xl lg:text-[10rem] leading-[0.85] tracking-tighter mb-12">
                  IT'S NOT A COIN.<br />IT'S A <span className="text-stroke-yellow text-white">SIGH.</span>
                </h2>
                <p className="text-2xl lg:text-3xl leading-tight font-medium mb-10 text-bruh-black/80">
                  We've all been there. The rug. The top. The missed 1000x. $BRUH is the first token that actually understands your pain.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-6 py-3 bg-bruh-black text-white rounded-2xl font-mono text-xs">
                    <TrendingUp size={16} className="text-bruh-yellow" />
                    CHART GO UP
                  </div>
                  <div className="flex items-center gap-2 px-6 py-3 border border-bruh-black/10 rounded-2xl font-mono text-xs">
                    <Lock size={16} className="text-bruh-yellow" />
                    LP BURNED
                  </div>
                </div>
              </motion.div>

              <div className="relative">
                <motion.div 
                  initial={{ rotate: 10, scale: 0.9 }}
                  whileInView={{ rotate: 3, scale: 1 }}
                  viewport={{ once: true }}
                  className="aspect-[4/5] bg-bruh-yellow rounded-[3rem] overflow-hidden relative shadow-2xl"
                >
                  <img 
                    src="https://picsum.photos/seed/bruh-vibe/1000/1200" 
                    alt="Bruh Vibe" 
                    className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-bruh-black/80 to-transparent">
                    <span className="font-display text-6xl text-white mb-2">ORIGINAL CREATOR</span>
                    <span className="font-mono text-xs text-bruh-yellow tracking-widest uppercase">Onboard & Locked In</span>
                  </div>
                </motion.div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-bruh-black rounded-3xl -rotate-12 flex items-center justify-center text-white p-8 text-center font-display text-2xl leading-tight shadow-xl">
                  100% REAL BRUH
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="py-40 bg-bruh-black relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32">
              <div className="max-w-2xl">
                <h2 className="font-display text-7xl lg:text-[8rem] tracking-tighter mb-8">BRUHNOMICS</h2>
                <p className="font-mono text-white/40 text-sm leading-relaxed">
                  No complex math. No hidden fees. Just a fair launch for the people who appreciate a good bruh moment.
                </p>
              </div>
              <div className="flex items-center gap-4 glass p-4 rounded-3xl">
                <Globe className="text-bruh-yellow animate-spin-slow" />
                <div className="font-mono text-[10px] uppercase tracking-widest">Global Community Driven</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { label: "Total Supply", value: "1,000,000,000", sub: "1 Billion Fixed", icon: <Zap /> },
                { label: "Supply Locked", value: "LOCKED", sub: "Keys thrown away", icon: <Flame /> }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 sm:p-12 glass rounded-[2.5rem] group hover:bg-white/5 transition-colors overflow-hidden"
                >
                  <div className="w-14 h-14 bg-bruh-yellow text-bruh-black rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <h3 className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em] mb-4">{stat.label}</h3>
                  <p className="font-display text-4xl sm:text-5xl lg:text-6xl mb-4 break-words">{stat.value}</p>
                  <p className="font-mono text-[10px] text-bruh-yellow uppercase tracking-widest">{stat.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community CTA */}
        <section id="community" className="py-40 bg-bruh-yellow text-bruh-black relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="font-display text-[40rem] leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
              BRUH
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <h2 className="font-display text-8xl lg:text-[12rem] leading-[0.8] tracking-tighter mb-12">
              JOIN THE <br />BRUH-HOOD
            </h2>
            <p className="text-2xl lg:text-3xl font-medium mb-16 max-w-2xl mx-auto">
              Don't be the one saying "bruh" because you missed the pump. Be the one saying "bruh" because you're rich.
            </p>
            <div className="flex justify-center">
              <a href="https://x.com/i/communities/2029761924016009619" target="_blank" className="bg-white text-bruh-black px-12 py-6 rounded-3xl font-display text-3xl flex items-center justify-center gap-4 hover:scale-105 transition-all active:scale-95">
                <Twitter size={24} /> JOIN X COMMUNITY
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-32 bg-bruh-black border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-bruh-yellow rounded-full flex items-center justify-center text-bruh-black font-black text-2xl italic">B</div>
                  <span className="font-display text-4xl tracking-tighter italic text-stroke-white text-transparent">BRUH</span>
                </div>
                <p className="font-mono text-[10px] text-white/20 uppercase tracking-widest max-w-xs leading-loose">
                  THE MOST ICONIC MOMENT IN INTERNET HISTORY, NOW ON THE BLOCKCHAIN. NO UTILITY. NO ROADMAP. JUST BRUH.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
                <div className="space-y-4">
                  <h4 className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Socials</h4>
                  <ul className="space-y-2 font-mono text-[10px] uppercase tracking-widest">
                    <li><a href="https://x.com/i/communities/2029761924016009619" target="_blank" className="hover:text-bruh-yellow transition-colors">X Community</a></li>
                    <li><a href="#" className="hover:text-bruh-yellow transition-colors">Discord</a></li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Links</h4>
                  <ul className="space-y-2 font-mono text-[10px] uppercase tracking-widest">
                    <li><a href="#" className="hover:text-bruh-yellow transition-colors">DexTools</a></li>
                    <li><a href="#" className="hover:text-bruh-yellow transition-colors">DexScreener</a></li>
                    <li><a href="#" className="hover:text-bruh-yellow transition-colors">Solscan</a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em]">
                © 2026 BRUH COIN. ALL RIGHTS RESERVED.
              </div>
              <div className="font-mono text-[9px] text-white/20 uppercase tracking-[0.2em] truncate max-w-xs">
                {CA}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
