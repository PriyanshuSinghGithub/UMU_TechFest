import { useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface ScheduleEvent {
  time: string;
  title: string;
  venue?: string;
}

interface DaySchedule {
  day: number;
  date: string;
  events: ScheduleEvent[];
}

const scheduleData: DaySchedule[] = [
  {
    day: 1,
    date: 'Nov 3',
    events: [
      { time: '9:00 AM', title: 'Inauguration Ceremony', venue: 'Main Auditorium' },
      { time: '10:30 AM', title: 'Keynote Speaker Session', venue: 'Main Auditorium' },
      { time: '12:30 PM', title: 'Tech Exhibition Opening', venue: 'Exhibition Hall' },
      { time: '2:30 PM', title: 'AI & Future Tech Talk', venue: 'Seminar Hall' },
    ],
  },
  {
    day: 2,
    date: 'Nov 4',
    events: [
      { time: '10:00 AM', title: 'Hackathon Kickoff', venue: 'Computer Lab' },
      { time: '12:30 PM', title: 'Tech Quiz Competition', venue: 'Seminar Hall' },
      { time: '2:00 PM', title: 'Drone Racing Event', venue: 'Sports Ground' },
    ],
  },
  {
    day: 3,
    date: 'Nov 5',
    events: [
      { time: '9:00 AM', title: 'Hackathon Puzzle Round', venue: 'Computer Lab' },
      { time: '12:30 PM', title: 'Cloud Computing Workshop', venue: 'Seminar Hall' },
      { time: '3:00 PM', title: 'Hackathon Conclusion', venue: 'Computer Lab' },
    ],
  },
  {
    day: 4,
    date: 'Nov 6',
    events: [
      { time: '9:00 AM - 4:00 PM', title: 'E-Sports Finals', venue: 'Gaming Arena' },
    ],
  },
  {
    day: 5,
    date: 'Nov 7',
    events: [
      { time: '10:00 AM', title: 'Valedictory Ceremony', venue: 'Main Auditorium' },
      { time: '12:30 PM - 4:00 PM', title: 'Cultural Performances', venue: 'Open Amphitheater' },
    ],
  },
];

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="schedule" className="section-padding bg-gradient-to-b from-[#0A2540] to-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-gradient">
          Event Schedule
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Five days of innovation, competition, and celebration
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {scheduleData.map((schedule, index) => (
            <button
              key={schedule.day}
              onClick={() => setActiveDay(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDay === index
                  ? 'bg-gradient-to-r from-[#00D4FF] to-[#7B2CBF] text-white shadow-lg scale-105'
                  : 'bg-[#0A2540] text-gray-400 border border-[#00D4FF]/30 hover:border-[#00D4FF]'
              }`}
            >
              Day {schedule.day}
              <span className="block text-sm mt-1">{schedule.date}</span>
            </button>
          ))}
        </div>

        <div className="bg-[#0A2540]/60 backdrop-blur-md border border-[#00D4FF]/30 rounded-2xl p-6 md:p-10 shadow-2xl">
          <div className="flex items-center mb-8">
            <Calendar className="w-8 h-8 text-[#00D4FF] mr-4" />
            <h3 className="text-3xl font-bold text-white">
              Day {scheduleData[activeDay].day} - {scheduleData[activeDay].date}
            </h3>
          </div>

          <div className="space-y-6">
            {scheduleData[activeDay].events.map((event, index) => (
              <div
                key={index}
                className="relative pl-8 pb-6 border-l-2 border-[#00D4FF]/50 last:border-l-0 last:pb-0 group hover:border-[#FFD700] transition-all duration-300"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#00D4FF] border-4 border-[#0A2540] group-hover:bg-[#FFD700] group-hover:scale-125 transition-all duration-300" />

                <div className="bg-gradient-to-r from-[#1A1A1A]/80 to-transparent p-6 rounded-lg hover:from-[#1A1A1A] transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold text-white mb-2 md:mb-0">{event.title}</h4>
                    <div className="flex items-center text-[#00D4FF]">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="font-semibold">{event.time}</span>
                    </div>
                  </div>
                  {event.venue && (
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.venue}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block mt-16">
          <div className="relative">
            <div className="flex justify-between items-center">
              {scheduleData.map((schedule, index) => (
                <div key={schedule.day} className="flex flex-col items-center relative">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-300 cursor-pointer ${
                      index <= activeDay
                        ? 'bg-gradient-to-br from-[#00D4FF] to-[#7B2CBF] text-white shadow-lg'
                        : 'bg-[#1A1A1A] text-gray-500 border-2 border-gray-700'
                    }`}
                    onClick={() => setActiveDay(index)}
                  >
                    {schedule.day}
                  </div>
                  <span className="mt-2 text-sm text-gray-400">{schedule.date}</span>
                  {index < scheduleData.length - 1 && (
                    <div
                      className={`absolute top-8 left-16 w-full h-0.5 transition-all duration-300 ${
                        index < activeDay ? 'bg-[#00D4FF]' : 'bg-gray-700'
                      }`}
                      style={{ width: 'calc(100% + 2rem)' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
