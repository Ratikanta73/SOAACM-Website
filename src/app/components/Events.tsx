import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { getFeaturedEvent, getPastEvents } from '../../data/eventsData';

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  const featuredEvent = getFeaturedEvent();
  const pastEvents = getPastEvents();

  const handleEventClick = (eventId: string) => {
    navigate(`/events/${eventId}`);
  };

  return (
    <section id="events" className="py-24 px-4 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-black mb-4">
            Our <span className="text-[var(--acm-blue)]">Events</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--acm-blue)] mx-auto rounded-full mb-4" />
          <p className="text-xl text-gray-600">Empowering students through engaging experiences</p>
        </motion.div>

        {/* Featured Event */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-semibold text-black mb-8 flex items-center gap-3">
            <span className="text-[var(--acm-blue)]">●</span>
            Featured Event
          </h3>
          <div
            className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
            onClick={() => handleEventClick(featuredEvent.id)}
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-80 md:h-auto overflow-hidden">
                <ImageWithFallback
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 flex gap-3">
                  <span className="px-4 py-1.5 bg-[var(--acm-blue)] text-white rounded-full text-sm">
                    {featuredEvent.type}
                  </span>
                  <span className="px-4 py-1.5 bg-white/90 text-black rounded-full text-sm">
                    {featuredEvent.mode}
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h4 className="text-3xl font-bold text-black mb-4">{featuredEvent.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredEvent.description}</p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Calendar className="w-5 h-5 text-[var(--acm-blue)]" />
                    <span>{featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-[var(--acm-blue)]" />
                    <span>{featuredEvent.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Users className="w-5 h-5 text-[var(--acm-blue)]" />
                    <span>{featuredEvent.participants} Students Participated</span>
                  </div>
                </div>
                {featuredEvent.status === 'upcoming' ? (
                  <button className="px-8 py-3 bg-[var(--acm-blue)] text-white rounded-lg hover:bg-[var(--acm-dark-blue)] transition-colors duration-300 self-start">
                    Register Now
                  </button>
                ) : (
                  <button
                    className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-300 self-start"
                    onClick={() => handleEventClick(featuredEvent.id)}
                  >
                    Event Concluded - View Event Details
                  </button>
                )}

              </div>
            </div>
          </div>
        </motion.div>

        {/* Past Events Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-semibold text-black mb-12 flex items-center gap-3">
            <span className="text-[var(--acm-blue)]">●</span>
            Past Events
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--acm-blue)] to-transparent hidden md:block" />

            <div className="space-y-12">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  className="relative"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 top-8 w-4 h-4 bg-[var(--acm-blue)] rounded-full border-4 border-white shadow-lg hidden md:block transform -translate-x-1/2" />

                  <div
                    className="md:ml-20 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    onClick={() => handleEventClick(event.id)}
                  >
                    <div className="grid md:grid-cols-3 gap-0">
                      <div className="relative h-48 md:h-full overflow-hidden">
                        <ImageWithFallback
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                        <span
                          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm ${event.mode === 'Online'
                            ? 'bg-[var(--acm-green)] text-white'
                            : 'bg-[var(--acm-orange)] text-white'
                            }`}
                        >
                          {event.mode}
                        </span>
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-[var(--acm-blue)]/10 text-[var(--acm-blue)] rounded-full text-sm">
                            {event.category}
                          </span>
                          <span className="text-sm text-gray-500">{event.date}</span>
                        </div>
                        <h4 className="text-2xl font-semibold text-black mb-3">{event.title}</h4>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;