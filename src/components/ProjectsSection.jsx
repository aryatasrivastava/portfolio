

const projects = [
    {
        id:1,
        title:"Virtual Keyboard",
        description:"An on-screen interface that allows the users to input text without the need for a physical keyboard.",
        image: "/project1.png",
    },
    {
        id:2,
        title:"Countdown",
        description:"A digital clocks that counts",
        image:"/project2.png",
    },
    {
        id:3,
        title:"Headlines Hub",
        description:"An app designed to deliver the latest and most relevant news headlines from various categories",
        image:"/project3.png",
    },
];



export const ProjectsSection = () => {
     return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">Projects</span> Spotlight
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully crafted with attention to detail and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project,key)=>(
               <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                   <div className="h-50 overflow-hidden transition-transform">
                    <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full"/>
                    </div>
                     <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                </div>
                  
            ))
            }
        </div>
        </div>
     </section>
}