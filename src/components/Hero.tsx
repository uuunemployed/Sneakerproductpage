import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import profileImage from '../assets/5258399409517564007.jpg';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 pt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6">
            Русин Кароліна<br />
            <span className="text-blue-600">Василівна</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            Студентка • Майбутній державний службовець
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-xl">
            Прагну служити своїй країні та людям, розвиваючи професійні навички та духовні цінності.
          </p>
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all hover:scale-105"
          >
            Дізнатися більше
            <ChevronDown className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-indigo-200/40 rounded-full blur-3xl" />
            
            {/* Main Image */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={profileImage}
                alt="Кароліна Русин"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
