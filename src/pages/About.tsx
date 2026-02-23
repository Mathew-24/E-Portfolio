import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const skills = {
  technical: [
    { name: "HTML", value: 70 },
    { name: "CSS", value: 65 },
    { name: "JavaScript", value: 55 },
    { name: "React", value: 50 },
  ],
  soft: [
    { name: "Communication", value: 80 },
    { name: "Teamwork", value: 75 },
    { name: "Problem Solving", value: 70 },
    { name: "Time Management", value: 65 },
  ],
};

const projects = [
  {
    title: "Project 1",
    description: "Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Project 2",
    description: "Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Project 3",
    description: "Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const SkillBar = ({ name, value }: { name: string; value: number }) => (
  <div className="mb-4">
    <div className="flex items-center gap-3 mb-1">
      <span className="w-2 h-2 rounded-full bg-foreground inline-block" />
      <span className="text-sm font-medium text-foreground">{name}</span>
    </div>
    <div className="skill-bar-track">
      <div className="skill-bar-fill" style={{ width: `${value}%` }} />
    </div>
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full px-6 md:px-12 py-16">
        {/* About Section */}
        <div className="flex items-center gap-3 mb-12">
          <h1 className="section-title">ABOUT</h1>
          <span className="section-title-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 mb-20">
          {/* Profile Image Placeholder */}
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full placeholder-img border border-border mx-auto md:mx-0 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <svg className="w-12 h-12 opacity-30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="50" cy="50" r="45" />
                <line x1="5" y1="5" x2="95" y2="95" />
                <line x1="95" y1="5" x2="5" y2="95" />
              </svg>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Hello my name is Mathew</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="flex items-center gap-3 mb-10">
          <h2 className="section-title text-3xl">Skills</h2>
          <span className="section-title-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2 mb-20">
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Technical Skills</h3>
            {skills.technical.map((s) => (
              <SkillBar key={s.name} name={s.name} value={s.value} />
            ))}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Soft Skills</h3>
            {skills.soft.map((s) => (
              <SkillBar key={s.name} name={s.name} value={s.value} />
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="flex items-center gap-3 mb-10">
          <h1 className="section-title">PROJECTS</h1>
          <span className="section-title-line" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="project-card border border-border">
              {/* Project Image Placeholder */}
              <div className="placeholder-img w-full aspect-video">
                <svg className="w-10 h-10 opacity-30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="5" y="5" width="90" height="90" />
                  <line x1="5" y1="5" x2="95" y2="95" />
                  <line x1="95" y1="5" x2="5" y2="95" />
                </svg>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
