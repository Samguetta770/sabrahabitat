import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './SwippablePhotos.css';

const SwippablePhotos = ({ services, backgroundImage }) => {
  const [index, setIndex] = useState(0);
  const numPages = Math.ceil(services.length / 3);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((prevIndex) => (prevIndex + 1) % numPages),
    onSwipedRight: () => setIndex((prevIndex) => (prevIndex - 1 + numPages) % numPages),
  });

  const handleDotClick = (pageIndex) => {
    setIndex(pageIndex);
  };

  const startServiceIndex = index * 3;
  const currentServices = services.slice(startServiceIndex, startServiceIndex + 3);

  return (
    <div className="swipe-container" {...handlers} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay">
        {index > 0 && (
          <div className="arrowi arrowi-left" onClick={() => setIndex((prevIndex) => (prevIndex - 1 + numPages) % numPages)}>
            <svg viewBox="0 0 24 24">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
            </svg>
          </div>
        )}
        {index < numPages - 1 && (
          <div className="arrowi arrowi-right" onClick={() => setIndex((prevIndex) => (prevIndex + 1) % numPages)}>
            <svg viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </div>
        )}
        <div className="page-indicator-container">
          <div className="page-indicator">{`${index + 1}/${numPages}`}</div>
        </div>
        {currentServices.map((service, i) => (
          <div key={i} className="service-card">
            <h4>{`${startServiceIndex + i + 1}. ${service.title}`}</h4>
            <p>{service.description}</p>
          </div>
        ))}
        <div className="dots-container">
          {Array.from({ length: numPages }).map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? 'active' : ''}`}
              onClick={() => handleDotClick(i)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwippablePhotos;
