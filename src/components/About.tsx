import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 md:grid-cols-12 gap-4 h-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <div
              key={i}
              className="border border-[#00D4FF]"
              style={{
                animation: `pulse ${
                  2 + Math.random() * 3
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-gradient">
          About Martinovation
        </h2>

        <div className="bg-[#0A2540]/60 backdrop-blur-md border border-[#00D4FF]/30 rounded-2xl p-8 md:p-12 shadow-2xl">
          <p
            ref={textRef}
            className="text-lg md:text-xl leading-relaxed md:leading-loose text-gray-200 text-justify"
          >
            Martinovation Tech Fest is the annual techno-cultural extravaganza
            of Usha Martin University, envisioned to inspire innovation,
            creativity, and collaboration among students. The fest serves as a
            dynamic platform where technology meets imagination, providing
            students with the opportunity to explore ideas, showcase talent, and
            compete in a spirit of excellence. Over the span of several days,
            the university campus transforms into a vibrant hub of activities
            featuring technical competitions, workshops, hackathons,
            exhibitions, gaming events, and cultural performances. These diverse
            events aim to bridge the gap between academic knowledge and
            practical application, encouraging participants to think critically,
            act creatively, and innovate fearlessly. Martinovation is not just a
            celebration of technology—it is a movement that empowers students to
            transform ideas into impactful innovations. It fosters teamwork,
            leadership, and problem-solving skills, while promoting a culture of
            learning beyond classrooms. With enthusiastic participation from
            students across disciplines, Martinovation Tech Fest continues to
            nurture the next generation of innovators, creators, and
            changemakers, setting new benchmarks in creativity and excellence
            each year. Join us in this journey where innovation begins, ideas
            evolve, and creativity takes center stage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-gradient-to-br from-[#00D4FF]/20 to-transparent rounded-xl border border-[#00D4FF]/30">
              <div className="text-4xl font-bold text-[#00D4FF] mb-2">5</div>
              <div className="text-sm uppercase tracking-wider text-gray-300">
                Days of Innovation
              </div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#7B2CBF]/20 to-transparent rounded-xl border border-[#7B2CBF]/30">
              <div className="text-4xl font-bold text-[#7B2CBF] mb-2">40+</div>
              <div className="text-sm uppercase tracking-wider text-gray-300">
                Tech Events
              </div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#FFD700]/20 to-transparent rounded-xl border border-[#FFD700]/30">
              <div className="text-4xl font-bold text-[#FFD700] mb-2">
                10,000+
              </div>
              <div className="text-sm uppercase tracking-wider text-gray-300">
                Participants
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
