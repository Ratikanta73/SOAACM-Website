import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Users } from 'lucide-react';

const JoinCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="join" className="py-24 px-4 relative overflow-hidden" ref={ref}>
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, var(--acm-blue) 0%, var(--acm-dark-blue) 50%, var(--acm-blue) 100%)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Users className="w-4 h-4 text-white" />
            <span className="text-sm text-white">Join 500+ Members</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Start Your
            <br />
            <span className="text-[var(--acm-light-blue)]">Journey?</span>
          </h2>

          <motion.p
            className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Become part of a global community of computing professionals. Access exclusive resources, connect with industry leaders, and shape your future in technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            {/* Join ACM – WhatsApp Community */}
            <a
              href="https://chat.whatsapp.com/JJEcTSG5qPrJZLo92SJvtk"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-white text-[var(--acm-blue)] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Join ACM
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            {/* Follow Us – Instagram */}
            <a
              href="https://www.instagram.com/soa_acm/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Follow Us
            </a>
          </motion.div>


          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 pt-12 border-t border-white/20"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80 text-sm">Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">4+</div>
              <div className="text-white/80 text-sm">Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">2+</div>
              <div className="text-white/80 text-sm">Partners</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinCTA;
