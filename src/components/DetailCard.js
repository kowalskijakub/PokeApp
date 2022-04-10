import React, { useEffect, useState } from 'react';
import './DetailCard.css';
import Loading from './Loading';
const InfoCard = ({ detailInfo, setVisibilityDetailCard }) => {
  const [detail, setDetail] = useState('');
  useEffect(() => {
    fetch(detailInfo[1].url)
      .then(response => response.json())
      .then(data => {
        setDetail(data);
      });
  }, [detailInfo]);

  if (detail) {
    const renderedSprites = Object.entries(detail.sprites)
      .reverse()
      .map(([key, values]) => {
        if (typeof values === 'string' && values) {
          return (
            <img
              key={values}
              src={values}
              alt={values.name}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';
              }}
            />
          );
        } else {
          return '';
        }
      });
    return (
      <div className="info_container">
        <div className="information">
          <div
            className="close"
            onClick={() => {
              setVisibilityDetailCard(false);
            }}
          >
            {' '}
            &times;{' '}
          </div>
          <div className="detail">
            <h1>{detail.name}</h1>
            <div className="SpriteContainer">{renderedSprites}</div>
          </div>
        </div>
      </div>
    );
  }
  return <Loading />;
};

export default InfoCard;
