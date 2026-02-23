import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const skills = {
  technical: [
    { name: "Figma", value: 90 },
    { name: "Adobe", value: 65 },
    { name: "Sketch", value: 80 },
    { name: "Canva", value: 90 },
  ],
  soft: [
    { name: "Communication", value: 80 },
    { name: "Teamwork", value: 75 },
    { name: "Problem Solving", value: 70 },
    { name: "Time Management", value: 80 },
  ],
};

// helper to prepend the Vite base path to public assets
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const projects = [
  {
    title: "Gaming Blog Website",
    description: "Description – Designed and developed a responsive blog website to showcase gaming insights and web projects, featuring a clean layout and user-friendly navigation.",
    image: asset("project1.png"),
    url: "https://mthwgaming.wordpress.com/",
  },
  {
    title: "Booking-App Barbershop Mock-Up",
    description: "Description – Designed a barbershop booking system with login and appointment scheduling, ensuring a clean interface and consistent user experience across pages.",
    image: asset("project2.png"),
    url: "https://www.figma.com/design/BRLyWDqZjK1Lo4jawSnn0U/SSAD-DESIGN?node-id=1-913&t=s4JXxCJuJwmmyXFJ-1",
  },
  {
    title: "Responsive Blog Platform",
    description: "Description – Built a responsive blog platform with structured content layout and optimized navigation for seamless user experience.",
    image: asset("project3.png"),
    url: "https://www.figma.com/design/H2PkfsAB2wS0j0Vqw7BWjY/Untitled?node-id=0-1&t=c4bKr49x4r2iQlt7-1",
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
          {/* Hero photo */}
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border border-border mx-auto md:mx-0">
            <img src={asset("Hero.jpg")} alt="Hero" className="w-full h-full object-cover" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Hello my name is Mathew</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Hello, my name is Venzon, Mathew Jeremy M. I am a passionate and dedicated Web Developer and UI Designer who enjoys building clean, responsive, and user-friendly websites. I focus on creating modern designs with strong structure and smooth user experience. I am always eager to learn new technologies, improve my skills, and take on challenges that help me grow both personally and professionally. My goal is to develop digital solutions that are not only functional but also visually appealing and impactful.
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
            <a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card border border-border block"
            >
              {/* Project Image */}
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
