import { useState } from "react";
import Header from "./components/header/Header";
import AllProjectsPage from "./components/projects/AllProjectsPage";
import projectData from './data/projectData';
import Introduction from "./components/introduction/Introduction";
import ProfileCards from "./components/profiles/ProfileCards";
import ProjectsCarousel from "./components/projects/ProjectsCarousel";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";



function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateToAllProjects = () => setCurrentPage('allProjects');
  const navigateToHome = () => setCurrentPage('home');

  if (currentPage === 'allProjects') {
      return <AllProjectsPage onBack={navigateToHome} projects={projectData} />;
  }

  return (
    <>
      <Header />
      <main>
        <Introduction />
        <ProfileCards />
        <ProjectsCarousel onSeeAll={navigateToAllProjects} />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;