import { Calendar, MapPin, Briefcase, Award, ExternalLink, Building2, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'ReenEdge Solutions',
    position: 'Backend .NET Developer',
    period: '10/2025 – 06/2026',
    location: 'Nigeria',
    description: 'Developed core production backend services and APIs for Whatsella.com, an AI-powered WhatsApp e-commerce SaaS platform.',
    responsibilities: [
      'Engineered scalable REST APIs using ASP.NET Core and PostgreSQL for multi-tenant storefront management and bulk messaging.',
      'Integrated third-party payment gateways (PayStack) and automated bank payout routing mechanisms.',
      'Implemented secure JWT & OAuth authentication flows alongside performance optimization for high-throughput messaging.',
    ],
    highlights: ['ASP.NET Core', 'PostgreSQL', 'PayStack', 'API Security', 'Multi-Tenancy', 'Performance Tuning'],
    certificateLink: undefined,
  },
  {
    id: 2,
    company: 'DeCloud23 Technologies',
    position: 'Full Stack Web Developer (Backend Heavy)',
    period: '03/2025',
    location: 'Ibadan, Nigeria',
    description: 'Contributed to high-impact web platforms including Zheeta.com, Games4Africa / Games365Hub, and Job Tracker.',
    responsibilities: [
      'Built full-stack applications leveraging ASP.NET Core, Node.js, Express.js, and React.js.',
      'Architected real-time communication systems using SignalR WebSockets for multiplayer gaming and live chat notifications.',
      'Enforced Clean Architecture, Docker containerization, and agile sprint workflows for rapid feature delivery.',
    ],
    highlights: ['ASP.NET Core', 'React', 'Node.js', 'SignalR WebSockets', 'Docker', 'Clean Architecture'],
    certificateLink: undefined,
  },
  {
    id: 3,
    company: 'Ithena',
    position: 'Full Stack Web Developer Intern',
    period: '10/2022 – 09/2023',
    location: 'Virginia, USA (Remote)',
    description: 'Contributed to enterprise manufacturing solutions, specifically the iGEMBA - Digital Shopfloor Gemba Walk platform.',
    responsibilities: [
      'Utilized Angular, Express.js, JavaScript, and Node.js to digitize paper-based shop floor huddles and KPI monitoring.',
      'Designed interactive analytics dashboards using DevExtreme/DevExpress controls to visualize historical factory metrics.',
      'Integrated MongoDB & PostgreSQL databases with RESTful APIs, helping reduce issue resolution time by 26% for enterprise clients.',
    ],
    highlights: ['Angular', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'DevExtreme', 'REST APIs'],
    certificateLink: '/ithena_internship_certificate.pdf',
  },
  {
    id: 4,
    company: 'Kicest',
    position: 'Frontend Developer',
    period: '11/2024',
    location: 'Remote',
    description: 'Built and maintained an e-commerce platform enabling instant storefront setup for small businesses and freelancers.',
    responsibilities: [
      'Developed dynamic, SEO-optimized user interfaces using Next.js App Router and React.',
      'Collaborated with backend engineers to integrate payment processing, order tracking, and real-time inventory management.',
      'Ensured responsive, mobile-first design across all device viewports with Tailwind CSS.',
    ],
    highlights: ['Next.js App Router', 'React', 'Tailwind CSS', 'SEO Optimization', 'Responsive Design'],
    certificateLink: undefined,
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-4 bg-gray-50 dark:bg-gray-800/60 transition-colors relative overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="section-title mb-4">Professional Experience</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16 text-base md:text-lg">
          3+ years of building web applications, backend APIs, enterprise microservices, and SaaS platforms across diverse engineering roles.
        </p>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="card p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
            >
              {/* Left Accent Bar */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-purple-600 via-indigo-600 to-blue-600 group-hover:w-2 transition-all duration-300" />

              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
                      <Briefcase size={20} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white">
                      {exp.position}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    <Building2 size={16} className="text-purple-600 dark:text-purple-400" />
                    <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                      {exp.company}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 md:text-right">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold md:justify-end w-fit md:ml-auto">
                    <Calendar size={14} className="text-purple-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-xs font-medium md:justify-end">
                    <MapPin size={14} className="text-indigo-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed font-semibold text-base">
                {exp.description}
              </p>

              {/* Responsibilities List */}
              <div className="mb-6 space-y-2.5">
                {exp.responsibilities.map((res, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300 font-medium">
                    <CheckCircle2 size={16} className="text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>

              {/* Highlights & Certificate Button */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-100 dark:border-gray-800/80">
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-semibold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 rounded-lg border border-purple-100 dark:border-purple-800/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {exp.certificateLink && (
                  <a
                    href={exp.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl text-xs font-bold transition-all shadow-md hover:shadow-lg group"
                  >
                    <Award size={16} />
                    <span>View Internship Certificate</span>
                    <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
