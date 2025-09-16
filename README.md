Portfolio Website
A modern, responsive portfolio showcasing my skills, projects, and resume as a web developer. Built with React, Vite, and Tailwind CSS, this portfolio features a sleek design with dynamic animations, a futuristic aesthetic, and a clean layout optimized for all devices.
Features

Profile Section: Displays profile photo and title ("Web Developer || Innovator") with smooth hover animations.
Projects Section: Grid of project cards with images, descriptions, and links, responsive across mobile, tablet, and desktop.
Skills Section: Cleanly styled skill badges with icons for Python, MongoDB, Node.js, Express.js, Tailwind CSS, HTML, CSS, JavaScript, React, and Flask.
Resume: Downloadable resume button fixed in the top-right corner for easy access.
Footer: Social links (Twitter, LinkedIn, Gmail) with hover effects.
Design: Futuristic styling with a dynamic gradient background, Space Grotesk font, and subtle animations (fade-in, scale, rotate).
Responsive: Adapts seamlessly to all screen sizes using Tailwind’s responsive utilities.

Tech Stack

Frontend: React
Build Tool: Vite
Styling: Tailwind CSS
Font: Space Grotesk (Google Fonts)
Icons: react-icons
Assets: PDF resume, placeholder images (replace with your own)

Prerequisites

Node.js (v16 or higher)
npm or yarn

Setup Instructions

Clone the Repository:
git clone <your-repo-url>
cd portfolio


Install Dependencies:
npm install


Update Assets:

Replace src/assets/RRJ_resume.pdf with your resume PDF.
Update the profile image URL in src/App.jsx (line ~23) with your photo.
Update project images and links in src/App.jsx (lines ~13–20) with real project data.


Run the Development Server:
npm run dev

Open http://localhost:5173 in your browser.

Build for Production:
npm run build

Deploy the dist folder to your hosting platform.


Project Structure
portfolio/
├── public/
├── src/
│   ├── assets/
│   │   └── RRJ_resume.pdf           # Your resume PDF
│   ├── Card.jsx                     # Project card component
│   ├── SkillBox.jsx                 # Skill badge component
│   ├── Resume.jsx                   # Resume download button
│   ├── Footer.jsx                   # Social links and copyright
│   ├── App.jsx                      # Main app with layout
│   ├── index.css                    # Tailwind and custom styles
│   └── main.jsx                     # Entry point
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind configuration
├── postcss.config.js                # PostCSS configuration
└── README.md                        # This file

Customization

Profile: Update the profile image (src/App.jsx) and title text.
Projects: Modify the projects array in src/App.jsx with your project details (description, link, image).
Skills: Edit the skills array in src/App.jsx or add new icons in SkillBox.jsx.
Colors: Change Tailwind colors (e.g., cyan-400 to pink-500) in component classes.
Animations: Adjust gradientShift or fadeIn durations in index.css.

Deployment

Deploy to platforms like Vercel, Netlify, or GitHub Pages.
Ensure dist folder is generated (npm run build) and uploaded.
Update asset paths if hosted (e.g., /assets/RRJ_resume.pdf).

Credits

Built by Rajeev Ranjan Jha
Social: Twitter | LinkedIn | Email
Font: Space Grotesk
Icons: react-icons

License
© 2025 RJha. All rights reserved.