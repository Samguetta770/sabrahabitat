import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import './ExtraitProjets.css';
import projectImage1 from "./../Ressources/Photo_6.avif";
import projectImage2 from "./../Ressources/Photo_7.avif";
import projectImage3 from "./../Ressources/Photo_8.avif";

const projects = [
  {
    id: 1,
    title: 'Construction De Villa Indépendante',
    image: projectImage1,
    description: 'Construction De Villa Indépendante',
    link: '/projets#Projet_1',
  },
  {
    id: 2,
    title: 'Construction De Villa Mitoyenne',
    image: projectImage2,
    description: 'Construction De Villa Mitoyenne',
    link: '/projets#Projet_2',
  },
  {
    id: 3,
    title: 'Renovation De Propriété',
    image: projectImage3,
    description: 'Renovation De Propriété',
    link: '/projets#Projet_3',
  },
];

const ExtraitProjets = () => {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef(null);
  const [projectsVisible, setProjectsVisible] = useState(Array(projects.length).fill(false));
  const projectRefs = useRef([]);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate(); // Utiliser useNavigate

  useEffect(() => {
    const elementsToObserve = [titleRef.current, paragraphRef.current, ...projectRefs.current, buttonRef.current];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('loaded');
          }, index * 300);
        }
      });
    }, { threshold: 0.1 });

    elementsToObserve.forEach((element, index) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elementsToObserve.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          setTimeout(() => {
            setProjectsVisible((prevState) => {
              const newState = [...prevState];
              newState[entry.target.dataset.index] = true;
              return newState;
            });
          }, entry.target.dataset.index * 300); // Délai de 300ms par projet
        }
      });
    }, { threshold: 0.1 });

    projectRefs.current.forEach((projectRef, index) => {
      if (projectRef) {
        projectRef.dataset.index = index;
        observer.observe(projectRef);
      }
    });

    return () => {
      projectRefs.current.forEach((projectRef) => {
        if (projectRef) {
          observer.unobserve(projectRef);
        }
      });
    };
  }, []);

  const handleProjectClick = (link) => {
    navigate(link);
  };

  const handleViewProjectsClick = () => {
    navigate('/projets#id-textphoto-2'); // Navigue vers la section id-textphoto-2
  };

  return (
    <div className="ExtraitProjets" ref={sectionRef}>
      <h2 className="fade-in-top" ref={titleRef}>Nos Projets</h2>
      <p className="fade-in-top" ref={paragraphRef}>
        Nous croyons que notre travail parle de lui-même, alors <br/>pourquoi ne pas jeter un coup d'œil à quelques-uns de nos projets récents.
      </p>
      <div className="project-list">
        {projects.map((project, index) => (
          <div
            className={`project-item ${projectsVisible[index] ? 'loaded' : ''}`}
            key={project.id}
            ref={el => projectRefs.current[index] = el}
            onClick={() => handleProjectClick(project.link)}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-overlay">
              <div className="overlay-content">
                <p>{project.description}</p>
                <span className="arrow"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className={`view-projects-button ${loaded ? 'loaded' : ''}`}
        ref={buttonRef}
        onClick={handleViewProjectsClick} // Ajouter le gestionnaire de clic
      >
        Voir Projets
      </button>
    </div>
  );
};

export default ExtraitProjets;
