import React from 'react';
import { FaCode, FaReact, FaNodeJs, FaPython, FaDatabase, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiFlask } from 'react-icons/si';

const skillIcons = {
  Python: FaPython,
  MongoDB: FaDatabase,
  'Node.js': FaNodeJs,
  'Express.js': SiExpress,
  'Tailwind CSS': SiTailwindcss,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaCode,
  React: FaReact,
  Flask: SiFlask,
};

function SkillBox({ skill }) {
  const Icon = skillIcons[skill] || FaCode;

  return (
    <div className="flex items-center gap-3 px-5 py-2 bg-black/30 border border-cyan-400 rounded-lg text-cyan-200 hover:bg-cyan-500 hover:text-black hover:shadow-cyan-400/50 transition-all duration-300 group">
      <Icon className="text-xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
      <span className="text-base font-medium">{skill}</span>
    </div>
  );
}

export default SkillBox;