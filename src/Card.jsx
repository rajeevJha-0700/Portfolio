function Card({ projectDescription, linkTo, imageUrl = 'https://via.placeholder.com/300x200' }) {
  return (
    <a
      href={linkTo}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative bg-black/30 rounded-lg p-6 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-2 transition-all duration-500 group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
        <img
          src={imageUrl}
          alt="Project"
          className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-2 transition-transform duration-500"
        />
      </div>
      <div className="relative">
        <p className="text-gray-200 text-base leading-relaxed mb-4">{projectDescription}</p>
        <span className="text-cyan-400 font-semibold group-hover:text-cyan-200 transition-colors duration-300">
          View Project →
        </span>
      </div>
    </a>
  );
}

export default Card;