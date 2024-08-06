import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExtraitProjets.css';
import projectImage1 from "./../Ressources/Photo_6.avif";
import projectImage2 from "./../Ressources/Photo_7.avif";
import projectImage3 from "./../Ressources/Photo_8.avif";
import { useTranslation } from 'react-i18next';
import '../i18n'; // Assurez-vous que ce chemin est correct

const projects = [
  {
    id: 1,
    titleKey: 'project_1_title',
    image: projectImage1,
    descriptionKey: 'project_1_description',
    link: '/projets#Projet_1',
  },
  {
    id: 2,
    titleKey: 'project_2_title',
    image: projectImage2,
    descriptionKey: 'project_2_description',
    link: '/projets#Projet_2',
  },
  {
    id: 3,
    titleKey: 'project_3_title',
    image: projectImage3,
    descriptionKey: 'project_3_description',
    link: '/projets#Projet_3',
  },
];

const ExtraitProjets = () => {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef(null);
  const [projectsVisible, setProjectsVisible] = useState(Array(projects.length).fill(false));
  const projectRefs = useRef([]);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

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
          }, entry.target.dataset.index * 300);
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewProjectsClick = () => {
    navigate('/projets');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="ExtraitProjets" ref={sectionRef}>
      <h2 className="fade-in-top" ref={titleRef}>{t('our_projects_title')}</h2>
      <p className="fade-in-top" ref={paragraphRef}>
        {t('our_projects_description')}
      </p>
      <div className="project-list">
        {projects.map((project, index) => (
          <div
            className={`project-item ${projectsVisible[index] ? 'loaded' : ''}`}
            key={project.id}
            ref={el => projectRefs.current[index] = el}
            onClick={() => handleProjectClick(project.link)}
          >
            <img src={project.image} alt={t(project.titleKey)} />
            <div className="project-overlay">
              <div className="overlay-content">
                <p>{t(project.descriptionKey)}</p>
                <span className="arrow"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className={`view-projects-button ${loaded ? 'loaded' : ''}`}
        ref={buttonRef}
        onClick={handleViewProjectsClick}
      >
        {t('view_projects_button')}
      </button>
    </div>
  );
};

export default ExtraitProjets;
