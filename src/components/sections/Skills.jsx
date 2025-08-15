import ScrollReveal from '../animations/ScrollReveal.jsx';
import { frontendSkills, toolsSkills } from '../../data/skills.jsx';

const Skills = () => {
  const SkillCard = ({ skill }) => (
    <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105">
      <div className="text-primary mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
        {skill.icon}
      </div>
      <h3 className="text-lg font-semibold">{skill.name}</h3>
    </div>
  );

  const allSkills = [...frontendSkills, ...toolsSkills];

  return (
    <section id="skills" className="section bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-center mb-16">My Skills</h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {allSkills.map((skill) => (
            <ScrollReveal key={skill.name}>
              <SkillCard skill={skill} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 