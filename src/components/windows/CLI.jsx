import React from 'react'
import Window from './window';
import Terminal from "react-console-emulator";
import "./cli.scss"

const CLI = ({windowname ,windowstate , setwindowstate}) => {
    const welcomeMsg = `
╔════════════════════════════════════════╗
║   Welcome to My Portfolio Terminal!    ║
╚════════════════════════════════════════╝

Type 'help' to see all available commands.
    `;

    const helpContent = `
Available Commands:
  help        - Display this help message
  about       - Learn more about me
  skills      - View my technical skills
  projects    - See my portfolio projects
  experience  - Check my work experience
  contact     - Get my contact information
  education   - View my educational background
  clear       - Clear the terminal
  echo        - Echo a passed string
  whoami      - Display current user information
    `;

    return (
      <Window windowname={windowname} setwindowstate={setwindowstate}>
        <div className="cli-view">
                <Terminal
                    commands={{
                        about: {
                            description: 'Learn more about me.',
                            usage: 'about',
                            fn: () => `I'm Ananyo Mitra a passionate Full-Stack Developer with expertise in React, JavaScript, and modern web technologies. 
I love building interactive and responsive web applications.`
                        },
                        skills: {
                            description: 'View my technical skills.',
                            usage: 'skills',
                            fn: () => `Technical Skills:
  • Frontend: React, JavaScript, HTML, CSS, Scss, Tailwind CSS
  • Backend: Node.js, Express
  • Tools: Git, Vite, NPM, ESLint
  • Concepts: REST APIs, Component Architecture, State Management`
                        },
                        projects: {
                            description: 'See my portfolio projects.',
                            usage: 'projects',
                            fn: () => `My Projects:
  1. E-Commerce Platform - Built with React & Context API
  2. Weather App - Real-time weather data using APIs
  3. Todo Application - Task management with localStorage
  4. Personal Portfolio - React-based portfolio website
  5. Dashboard - Data visualization and management system`
                        },
                        experience: {
                            description: 'Check my work experience.',
                            usage: 'experience',
                            fn: () => `Work Experience:
  • Junior Developer (Current) - ABC Company
    - Developed responsive web applications using React
    - Collaborated with design and backend teams
    - Improved page load performance by 30%
  
  • Freelance Developer - Self-employed
    - Built custom websites for clients
    - Provided technical support and maintenance`
                        },
                        contact: {
                            description: 'Get my contact information.',
                            usage: 'contact',
                            fn: () => `Contact Me:
  Email: ananyomitra310@gmail.com
  Phone: +91 7003143300
  GitHub: github.com/ananyo09
  LinkedIn: linkedin.com/in/yourprofile
  Portfolio: yourportfolio.com`
                        },
                        education: {
                            description: 'View my educational background.',
                            usage: 'education',
                            fn: () => `Education:
  • Bachelor's Degree in Computer Science
    University MCKV institute of Engineering| Graduated: 2027
  
  • Full-Stack Web Development Bootcamp
    Bootcamp Sheryiansh coding school | Completed: 2023
  
  • Web Development Certification
    Certification Provider | Completed: 2026`
                        },
                        whoami: {
                            description: 'Display current user information.',
                            usage: 'whoami',
                            fn: () => `uid=1000(developer) gid=1000(web) groups=1000(web),27(sudo)\nCurrent working directory: ~/portfolio`
                        },
                        echo: {
                            description: 'Echo a passed string.',
                            usage: 'echo <string>',
                            fn: (...args) => args.join(' ')
                        }
                    }}
                    welcomeMessage={welcomeMsg}
                    promptLabel={"Ananyo@dev:~$"}
                    promptLabelStyle={{ color: "greenyellow" }}
                    errorText={["the command is invalid"] }
          />
        </div>
      </Window>
    );
}

export default CLI