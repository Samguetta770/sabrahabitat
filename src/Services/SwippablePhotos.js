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
