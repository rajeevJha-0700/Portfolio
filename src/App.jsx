
import Resume from './Resume.jsx';
import SkillBox from './SkillBox.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';
import niecWrites from "./assets/niecWrites.jpg";
import RJ from "./assets/RJ.jpg";
import SaasContracts from "./assets/SaasContracts.png";
import Neverold from "./assets/Neverold.jpg"
import ISM from "./assets/ISM.png";

function App() {
  const skills = [
    'Python',
    'MongoDB',
    'Node.js',
    'Express.js',
    'Tailwind CSS',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Flask',
  ];

  const projects = [
    
  { description: "Developed and deployed a react-based web application enabling students to publish and share creative contents in an organised manner", link: 'https://neverold-shop.vercel.app', image: Neverold },
  { description: "Developed a campus marketplace web application using React, Supabase, and TailwindCSS, enabling students to buy and sell pre-owned items within their college community", link: 'https://niec-writes.vercel.app', image: niecWrites },
  { description: 'ISM Portal (IoT Sensor Monitoring) is a real-time web dashboard for visualizing data from multiple IoT sensors installed in home and sensor data can be accessed from anywhere anytime', link: 'https://github.com/rajeevJha-0700/ISM-portal', image:ISM },
  { description: 'NetNexus is a LAN-based real-time chat app that lets users on the same Wi-Fi or hotspot chat without internet built using nodejs , socketIO , it ensures low-latency messaging (5–50ms approx) and supports 10– 15 users efficiently on standard routers', link: 'https://github.com/rajeevJha-0700/netnexus', image: 'https://via.placeholder.com/300x200' },
  { description: 'Frontend Project for Saas Contracts Dashboard', link: 'https://saas-contracts-pi.vercel.app', image: SaasContracts },
];

  return (
    <div className="min-h-screen text-white relative">
      {/* Resume Button in Top-Right Corner */}
      <div className="fixed top-4 right-4 z-50">
        <Resume />
      </div>

      {/* Profile Section */}
      <header className="flex flex-col items-center pt-20 pb-10 bg-black/20 fade-in">
        <img
          src={RJ}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-cyan-400 shadow-lg shadow-cyan-400/50 hover:scale-110 hover:rotate-3 transition-all duration-500"
        />
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-cyan-300 tracking-tight">
          WEB DEVELOPER || INNOVATOR
        </h1>
      </header>

      {/* Projects Section */}
      <section className="py-12 text-center fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-300 mb-6 font-serif">PROJECTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {projects.map((project, index) => (
            <Card
              key={index}
              projectDescription={project.description}
              linkTo={project.link}
              imageUrl={project.image}
            />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 text-center bg-black/20 fade-in" style={{ animationDelay: '0.4s' }}>
        <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-300 mb-6 font-serif">SKILL SET</h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto px-4">
          {skills.map((skill, index) => (
            <SkillBox key={index} skill={skill} />
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;