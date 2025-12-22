import Project from '../components/project.jsx';
import { useState } from "react";

function Home() {

  const [view, setView] = useState(false);
  const [search, setSearch] = useState("")

  // setView (true); setView (!view); view = !view

  const changeView = () => {
    setView(!view);
  }


  const showProjects = () => {
    changeView();
  }


  const projects = [
    {
      name: "Product Designer Portfolio",
      description: ["This project was created to help us learn how to use Sass. It was done before I learned how to make responsive navigation, so when you zoom out, the text and images don't align properly.", " At first, I found Sass a bit challenging to understand and use correctly, but after some practice, I got the hang of it.", " I learned how to create variables, nested rules, and mixins, within Sass. Which made my CSS more organized and easier to maintain.", " Overall, this project helped me understand the many benefits of using Sass in web development. To view the full page, you can check it out on my GitHub."],
      githubRepo: "https://github.com/rut5/Assignment-24-9-Sass",
      image: PictureOne,
      techArray: ["#Sass", "#CSS"]
    },
    {
      name: "Bhromaon Safe Travel",
      description: ["This website wasn't a typical project assignment but rather a test that we had 12 hours to complete. The purpose was to experience working under a strict deadline and to learn how to distribute the workload effectively within that time frame. We were given a Figma design to recreate."
        , " Overall, it went quite well, although I struggled a bit with aligning some parts of the content and making the page user-friendly on smaller devices."
        , " To view the full page, you can check it out on my GitHub."],
      githubRepo: "https://github.com/rut5/bhromaon-website",
      image: PictureTwo,
      techArray: ["#CSS", "#JavaScript"]
    },
    {
      name: "Blue Ray Aquarium",
      description: ["This project focused on learning how to create a responsive navigation system. I had the freedom to choose the design and the topic of the website. The website isn't fully functional yet, as I haven't added any content to the Gallery- and About Us pages, but I plan to do so later."
        , " My goal was to let users easily find information about the different species in the aquarium, opening hours, location, and more. I also wanted the website to be simple to use and navigate on any device, which is what I used Bootstrap for."
        , " Overall, this was a relatively easy assignment; the main challenge was finding the right components and classes for styling on the Bootstrap website."
        , " To view the full page, you can check it out on my GitHub."],
      githubRepo: "https://github.com/rut5/Responsive-Navigation",
      image: PictureThree,
      techArray: ["#Bootstrap", "#CSS"]
    }
  ]


  return (

    <>
      <button className="works-btn" onClick={showProjects}>{view ? 'Hide my projects' : 'View my projects'}</button>


      {view && (
        <div className="w-content">
          <h1 className="title">Some of my previous projects:</h1>


        </div>
      )}

      <button
        onClick={(changeView)}
        className="search-btn"
      > Search for a tag </button>

      {
        view && (
          <div>
            <input
              type="text"
              className="search-input"
              placeholder="Search tag..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        )
      }

      {
        view && (
          <div className="techarray-div">
            {projects.filter(
              (project) => (project.techArray.some((tech) => tech.toLowerCase().includes(search.toLowerCase()))))

              .map((project, index) => (
                <Project
                  key={index}
                  name={project.name}
                  description={project.description}
                  githubRepo={project.githubRepo}
                  image={project.image}
                  techArray={project.techArray}>
                </Project>
              ))}

          </div>
        )
      }

    </>

  );
}

export default Home