
import RRJ_resume from './assets/RRJ_resume_updated.pdf';



function Resume() {
  return (
    <a
      href={RRJ_resume}
      download
      className="inline-block px-4 sm:px-6 py-2 bg-cyan-500 text-black font-semibold rounded-lg shadow-lg shadow-cyan-500/50 hover:bg-cyan-400 hover:shadow-cyan-500/70 hover:scale-105 transition-all duration-300 group relative overflow-hidden text-sm sm:text-base"
    >
      <span className="relative z-10">download resume</span>
      <span className="absolute inset-0 bg-cyan-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
    </a>
  );
}

export default Resume;