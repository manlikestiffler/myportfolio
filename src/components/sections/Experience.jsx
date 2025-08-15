import { useState } from 'react';
import ScrollReveal from '../animations/ScrollReveal';
import { Calendar, Briefcase, ChevronDown, ChevronUp, GraduationCap } from 'lucide-react';
import useMediaQuery from '../../hooks/useMediaQuery';

const Experience = () => {
	// Experience data
	const experiences = [
		{
			id: 1,
			type: 'experience',
			title: 'Software Engineer – Monisha Inventory',
			company: 'Axcellus Enterprises (Monisha)',
			period: 'Present',
			description:
				'Built Monisha Inventory, a modern web platform transforming school-uniform management from manual tracking to real-time, data-driven operations.',
			icon: <Briefcase className="w-5 h-5" />,
			skills: [
				'React 18',
				'Vite',
				'Tailwind CSS',
				'Zustand',
				'Firebase Auth',
				'Firestore',
				'Firebase Storage',
				'Netlify',
			],
			highlights: [
				<span>Designed and led <strong>frontend architecture</strong> and <strong>state management</strong>, enabling <strong>batch‑level stock tracking</strong>, <strong>per‑student order visibility</strong>, and <strong>role‑based workflows</strong> for managers and staff.</span>,
				<span>Integrated <strong>Firebase</strong> for <strong>authentication</strong>, <strong>real‑time Firestore</strong> data, and <strong>Storage</strong>, with <strong>offline support</strong>, <strong>multi‑tab coordination</strong>, and robust <strong>error handling</strong>.</span>,
				<span>Developed interactive <strong>analytics dashboards</strong> with <strong>KPIs</strong>, <strong>charts</strong>, and <strong>Excel/PDF exports</strong>, delivering actionable insights for inventory and school management.</span>,
				<span>Solved key business challenges: <strong>optimized Firestore reads</strong>, implemented <strong>batch‑aware stock deduction</strong>, and streamlined <strong>SPA routing</strong> for smooth <strong>Netlify</strong> deployment.</span>,
				<span>Delivered a <strong>fast, intuitive experience</strong> simplifying complex <strong>inventory operations</strong> for staff and managers.</span>,
			],
			impact:
				'Turned an error-prone manual system into a real-time, business-friendly platform, improving operational efficiency, reducing stock errors, and enabling data-driven decisions.',
		},
		{
			id: 2,
			type: 'experience',
			title: 'Software Engineer – Monisha Uniforms',
			company: 'Axcellus Enterprises (Monisha)',
			period: 'Present',
			description:
				'Built Monisha Uniforms, a modern e‑commerce web app for school uniforms, integrated with the same database as Monisha Inventory for real-time inventory syncing.',
			icon: <Briefcase className="w-5 h-5" />,
			skills: [
				'React 18',
				'Vite',
				'Tailwind CSS',
				'Framer Motion',
				'Firebase Auth',
				'Firestore',
				'Firebase Storage',
			],
			highlights: [
				<span>Designed and led <strong>frontend architecture</strong> and <strong>state management</strong>, enabling <strong>dynamic product catalogs</strong>, <strong>responsive cart/wishlist</strong>, and <strong>role‑aware user flows</strong>.</span>,
				<span>Integrated <strong>Firebase</strong> for <strong>authentication</strong>, <strong>real‑time Firestore</strong> data, and <strong>Storage</strong>, ensuring <strong>persistent carts/wishlists</strong>, seamless <strong>guest‑to‑user sync</strong>, and robust <strong>error handling</strong>.</span>,
				<span>Developed interactive <strong>product feeds</strong> and <strong>catalog pages</strong> with real‑time updates for <strong>top‑rated</strong> and <strong>recent products</strong>.</span>,
				<span>Solved key business challenges: maintained <strong>real‑time inventory consistency</strong> with Monisha Inventory, implemented <strong>SPA routing</strong> fixes for <strong>Netlify</strong>, and <strong>normalized Firestore data</strong> for predictable UI rendering.</span>,
				<span>Delivered a <strong>fast, responsive, and intuitive experience</strong> for schools and parents.</span>,
			],
			impact:
				'Enabled real-time product visibility and persistent carts across devices, laying the foundation for future order and payment management, and improving user experience for schools and parents.',
		},
		{
			id: 3,
			type: 'experience',
			title: 'Intern',
			company: 'Vetlam Solutions',
			period: 'Aug 2023 - Jul 2024',
			description: (
				<span>
					Gained hands-on experience in network systems and IT operations, developing <strong>problem-solving</strong>, <strong>critical thinking</strong>, and <strong>collaboration skills</strong> applicable to software engineering.
				</span>
			),
			icon: <Briefcase className="w-5 h-5" />,
			skills: ['Networking', 'IT Operations', 'Troubleshooting'],
			highlights: [
				<span>Installed and configured <strong>IP cameras and network devices</strong>, connecting them for remote access and ensuring reliable system performance.</span>,
				<span>Managed and troubleshot networks for multiple client companies, learning to <strong>diagnose issues</strong>, <strong>implement solutions</strong>, and <strong>maintain uptime</strong> under real-world constraints.</span>,
				<span>Collaborated with clients and cross-functional teams, strengthening <strong>communication</strong>, <strong>teamwork</strong>, and <strong>documentation skills</strong>.</span>,
				<span>Tackled technical challenges that required <strong>problem-solving</strong>, <strong>system thinking</strong>, and <strong>adaptability</strong>, translating directly to software design, debugging, and architecture.</span>,
			],
		},
		{
			id: 4,
			type: 'education',
			title: 'Bachelor of Engineering (Honours) — Computer Engineering',
			company: '',
			period: 'Aug 2020 - Jun 2025',
			description: (
				<span>
					A rigorous honours degree covering <strong>digital systems</strong>, <strong>computer architecture</strong>, <strong>algorithms & data structures</strong>, <strong>operating systems</strong>, <strong>computer networks</strong>, <strong>embedded systems</strong>, and <strong>software engineering</strong>. Capstone and lab work focused on building reliable, performant systems and translating theory into practice.
				</span>
			),
			gpaInfo: (
				<span>
					GPA <strong>2.6</strong> (<strong>B+</strong>) — <strong>Upper Second Class</strong>.
				</span>
			),
			icon: <GraduationCap className="w-5 h-5" />,
			skills: [],
			highlights: [],
		},
	];

	// Responsive: md and up
	const isMdUp = useMediaQuery('(min-width: 768px)');

	// Track expanded cards by id
	const [expanded, setExpanded] = useState({});
	const toggle = (id) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

	// Find first education index to inject subheading
	const firstEducationIndex = experiences.findIndex((e) => e.type === 'education');

	return (
		<section id="experience" className="section bg-gray-50 py-20">
			<div className="container mx-auto px-4">
				<div className="text-center mb-10">
					<ScrollReveal>
						<span className="tiny-text text-primary mb-3 inline-block">Experience & Education</span>
						<h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
							Experience & Education
						</h2>
					</ScrollReveal>
				</div>

				<div className="max-w-4xl mx-auto">
					{experiences.map((exp, index) => {
						const isOpen = !!expanded[exp.id];
						const visibleHighlights = isOpen ? exp.highlights : exp.highlights.slice(0, 3);
						return (
							<>
								{index === firstEducationIndex && exp.type === 'education' && (
									<div className="relative mb-6 mt-2">
										<div className="h-px bg-gray-200"></div>
										<div className="absolute inset-x-0 -top-4 flex justify-center">
											<span className="small-text bg-white px-4 py-1 rounded-full border border-gray-200 text-primary shadow-sm">Education</span>
										</div>
									</div>
								)}
								<ScrollReveal key={exp.id} className={`relative ${isMdUp ? 'pl-12' : 'pl-0'} pb-14 last:pb-0`}>
									{/* Timeline line (hidden on mobile) */}
									{isMdUp && index < experiences.length - 1 && (
										<div className="absolute left-5 top-8 bottom-0 w-px bg-gray-200/60"></div>
									)}
									
									{/* Timeline dot (hidden on mobile) */}
									{isMdUp && (
										<div className="absolute left-1 top-2 w-8 h-8 rounded-full bg-primary/90 text-white flex items-center justify-center z-10 shadow-md">
											{exp.icon}
										</div>
									)}
									
									{/* Content */}
									<div className={`bg-white/95 backdrop-blur-sm ${isMdUp ? 'p-6' : 'p-4'} rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
										<div className="flex items-start justify-between gap-4 mb-3">
											<div>
												<h3 className="text-xl font-bold tracking-tight">{exp.title}</h3>
												{exp.company && (
													<h4 className="text-primary font-medium mt-1">{exp.company}</h4>
												)}
											</div>
											<div className="flex items-center text-gray-500 text-sm whitespace-nowrap">
												<Calendar className="w-4 h-4 mr-1" />
												<span>{exp.period}</span>
											</div>
										</div>

										<p className="body-copy mb-4">{exp.description}</p>
										{exp.type === 'education' && exp.gpaInfo && (
											<p className="small-text text-gray-800 mb-2">{exp.gpaInfo}</p>
										)}

										{visibleHighlights?.length > 0 && (
											<ul className="bulleted mb-4">
												{visibleHighlights.map((point, idx) => (
													<li key={idx}>{point}</li>
												))}
											</ul>
										)}

										{exp.highlights.length > 3 && (
											<button
												onClick={() => toggle(exp.id)}
												className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/90"
												aria-expanded={isOpen}
											>
												{isOpen ? 'Show less' : 'Show more'}
												{isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
											</button>
										)}

										{exp.impact && (
											<p className="text-gray-800 font-medium mt-4">
												<span className="text-gray-600">Impact: </span>
												{exp.impact}
											</p>
										)}
										
										{exp.skills?.length > 0 && (
											<div className="flex flex-wrap gap-2 mt-4">
												{exp.skills.map((skill, idx) => (
													<span 
														key={idx} 
														className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
													>
														{skill}
													</span>
												))}
											</div>
										)}
									</div>
								</ScrollReveal>
							</>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Experience; 