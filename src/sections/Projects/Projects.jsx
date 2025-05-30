import styles from './ProjectsStyles.module.css';
// import carePulse from '../../assets/carePulse-reg.PNG';
// import chalonics from '../../assets/chalonics.PNG';
// import casecobra from '../../assets/casecobra.PNG';
// import Dropbox from '../../assets/dropbox-pics.PNG';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src="/carePulse-reg.PNG"
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="CarePulse"
          p="Healthcare App"
        />
        <ProjectCard
          src="/chalonics.PNG"
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Chalonic"
          p="Construction website"
        />
        <ProjectCard
          src="/dropbox-pics.PNG"
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Dropbox"
          p="File storage app"
        />
        <ProjectCard
          src="/casecobra.PNG"
          link="https://casecobra-lovat.vercel.app/"
          h3="Casecobra"
          p="E-commerce"
        />
      </div>
    </section>
  );
}

export default Projects;
