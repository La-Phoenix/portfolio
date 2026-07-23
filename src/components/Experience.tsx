import { Calendar, MapPin, Briefcase, ExternalLink, Building2, CheckCircle2 } from 'lucide-react';

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
      className="py-24 px-4 bg-white dark:bg-[#0b0f17] transition-colors"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-tag">// 02. WORK HISTORY</span>
          <h2 className="section-title">Professional Engineering Experience</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Software engineering roles focused on backend API development, SaaS platforms, and enterprise software systems.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8 relative">
          {experiences.map((exp) => (
            <div key={exp.id} className="dev-card p-6 sm:p-8 text-left">
              
              {/* Card Top: Position & Metadata */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase size={18} className="text-indigo-600 dark:text-indigo-400" />
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                      {exp.position}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-sm font-semibold text-slate-700 dark:text-slate-300">
                    <Building2 size={15} className="text-slate-400" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    <Calendar size={12} className="text-indigo-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-1">
                    <MapPin size={12} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 font-normal">
                {exp.description}
              </p>

              {/* Bullet Responsibilities */}
              <div className="space-y-2 mb-6">
                {exp.responsibilities.map((res, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={15} className="text-indigo-500 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>

              {/* Footer Tech Tags & Certificate Link */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                <div className="flex flex-wrap gap-1.5">
                  {exp.highlights.map((skill, idx) => (
                    <span key={idx} className="tech-badge">
                      {skill}
                    </span>
                  ))}
                </div>

                {exp.certificateLink && (
                  <a
                    href={exp.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
                  >
                    <span>Internship Certificate</span>
                    <ExternalLink size={12} />
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
