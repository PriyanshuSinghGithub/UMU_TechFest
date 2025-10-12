import { useState } from 'react';
import { Phone, ChevronDown, ChevronUp, Users } from 'lucide-react';

interface CoreMember {
  name: string;
  contact: string;
}

interface Department {
  name: string;
  head: { name: string; contact: string };
  coordinators: { name: string; contact: string }[];
}

const coreTeam: CoreMember[] = [
  { name: 'Umanand Mishra', contact: '8674944887' },
  { name: 'Ankur Anand', contact: '9263476357' },
  { name: 'Madhur Manoj', contact: '8092971088' },
  { name: 'Akash Singh', contact: '7739339852' },
  { name: 'Shivanjali Shudhanshu', contact: '7209483014' },
  { name: 'Himank Jaiswal', contact: '7016545592' },
];

const departments: Department[] = [
  {
    name: 'Event Management',
    head: { name: 'Pankaj Kr. Mahto', contact: '6201052622' },
    coordinators: [{ name: 'Mayank Kumar', contact: '6202801406' }],
  },
  {
    name: 'Logistics & Resources Infrastructures',
    head: { name: 'Himanshu Kr. Singh', contact: '8252577845' },
    coordinators: [{ name: 'Akash Singh', contact: '7739339852' }],
  },
  {
    name: 'Technical',
    head: { name: 'Abu Reeyan', contact: '7808373330' },
    coordinators: [{ name: 'Aryan Sinha', contact: '8084112159' }],
  },
  {
    name: 'Discipline & Security',
    head: { name: 'Mayank Kumar', contact: '9608909340' },
    coordinators: [
      { name: 'Shivaji Singh', contact: '7633964962' },
      { name: 'Nilesh Kumar', contact: '7488202357' },
    ],
  },
  {
    name: 'Decoration & Operator',
    head: { name: 'Md. Samir Waziullah', contact: '8252128302' },
    coordinators: [{ name: 'Ujjwal Kumar', contact: '9608302087' }],
  },
  {
    name: 'Anchoring',
    head: { name: 'Md. Farhan Bin Hassan', contact: '7079327447' },
    coordinators: [{ name: 'Shivanjali Shudhanshu', contact: '7209483014' }],
  },
  {
    name: 'Hospitality (Girls)',
    head: { name: 'Yashoda Kumari', contact: '7209025382' },
    coordinators: [{ name: 'Sushma Kumari', contact: '9955281118' }],
  },
  {
    name: 'Hospitality (Boys)',
    head: { name: 'Srijan Singh', contact: '8873556197' },
    coordinators: [{ name: 'Aditya Raj', contact: '6200347839' }],
  },
  {
    name: 'Creative & Visuals',
    head: { name: 'Bibhanshu Dutta', contact: '9470943650' },
    coordinators: [],
  },
  {
    name: 'Web Design & Development',
    head: { name: 'Vinay Kumar', contact: '9065934001' },
    coordinators: [{ name: 'Priyanshu Kr. Singh', contact: '6205133276' }],
  },
  {
    name: 'Marketing & Media',
    head: { name: 'Ankur Anand', contact: '9263476357' },
    coordinators: [{ name: 'Anand Kr. Yadav', contact: '9390154730' }],
  },
  {
    name: 'Sponsorship',
    head: { name: 'Umanand Mishra', contact: '8674944887' },
    coordinators: [{ name: 'Harsh Kr. Singh', contact: '7903796913' }],
  },
];

const Team = () => {
  const [expandedDepts, setExpandedDepts] = useState<number[]>([]);

  const toggleDept = (index: number) => {
    setExpandedDepts((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="team" className="section-padding bg-[#0A2540]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-gradient">
          Our Team
        </h2>
        <p className="text-center text-gray-300 mb-16 text-lg">
          Meet the innovators behind Martinovation TechFest 2025
        </p>

        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Users className="w-8 h-8 text-[#FFD700] mr-3" />
            <h3 className="text-3xl font-bold text-white">Core Committee</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreTeam.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0A2540] p-6 rounded-xl border-2 border-[#00D4FF]/30 hover:border-[#FFD700] transition-all duration-300 hover:shadow-lg hover:shadow-[#FFD700]/20 group"
              >
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#7B2CBF] text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="text-xl font-bold text-center text-white mb-3">{member.name}</h4>
                <a
                  href={`tel:${member.contact}`}
                  className="flex items-center justify-center text-[#00D4FF] hover:text-[#FFD700] transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="font-semibold">{member.contact}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center text-white mb-8">Department Heads & Coordinators</h3>

          <div className="space-y-4">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#1A1A1A] to-[#0A2540] rounded-xl border border-[#00D4FF]/30 overflow-hidden hover:border-[#7B2CBF] transition-all duration-300"
              >
                <button
                  onClick={() => toggleDept(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#00D4FF]/5 transition-colors duration-300"
                >
                  <h4 className="text-xl font-bold text-white">{dept.name}</h4>
                  {expandedDepts.includes(index) ? (
                    <ChevronUp className="w-6 h-6 text-[#00D4FF]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#00D4FF]" />
                  )}
                </button>

                {expandedDepts.includes(index) && (
                  <div className="px-6 pb-6 space-y-4">
                    <div className="bg-[#0A2540]/50 p-4 rounded-lg border-l-4 border-[#FFD700]">
                      <p className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Department Head</p>
                      <div className="flex items-center justify-between">
                        <p className="text-white font-semibold text-lg">{dept.head.name}</p>
                        <a
                          href={`tel:${dept.head.contact}`}
                          className="flex items-center text-[#00D4FF] hover:text-[#FFD700] transition-colors duration-300"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          <span className="font-semibold">{dept.head.contact}</span>
                        </a>
                      </div>
                    </div>

                    {dept.coordinators.length > 0 && (
                      <div>
                        <p className="text-sm text-gray-400 mb-3 uppercase tracking-wider">
                          Coordinator{dept.coordinators.length > 1 ? 's' : ''}
                        </p>
                        <div className="space-y-2">
                          {dept.coordinators.map((coord, coordIndex) => (
                            <div
                              key={coordIndex}
                              className="bg-[#0A2540]/30 p-3 rounded-lg flex items-center justify-between"
                            >
                              <p className="text-white font-medium">{coord.name}</p>
                              <a
                                href={`tel:${coord.contact}`}
                                className="flex items-center text-[#00D4FF] hover:text-[#7B2CBF] transition-colors duration-300"
                              >
                                <Phone className="w-4 h-4 mr-2" />
                                <span className="font-semibold">{coord.contact}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          {/* <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0A2540] p-8 rounded-xl border border-[#7B2CBF]/30">
            <h4 className="text-2xl font-bold text-white mb-4">Faculty Coordinators</h4>
            <p className="text-gray-400 text-lg">To Be Announced</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Team;
