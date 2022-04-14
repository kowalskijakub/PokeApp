import React, { useEffect, useState } from 'react';
import '../Detail.css';
import Loading from '../Loading';
const DetailItem = ({ detailInfo, setVisibilityDetailCard }) => {
  const [detail, setDetail] = useState('');

  useEffect(() => {
    fetch(detailInfo.url)
      .then(response => response.json())
      .then(data => {
        setDetail(data);
      });
  }, [detailInfo]);

  const onError = ({ currentTarget }) => {
    currentTarget.onerror = null; // prevents looping
    currentTarget.src =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';
  };

  if (detail) {
    const renderedSprites = Object.entries(detail.sprites).map(
      ([key, values]) => {
        if (typeof values === 'string' && values) {
          return (
            <img
              key={values}
              src={values}
              alt={values.name}
              onError={onError}
            />
          );
        } else {
          return '';
        }
      }
    );
    console.log(renderedSprites);
    return (
      <div className="info_container">
        <div
          className="close"
          onClick={() => {
            setVisibilityDetailCard(false);
          }}
        >
          {' '}
          &times;{' '}
        </div>
        <div className="information">
          <div className="detail">
            <h1>{detail.name.split('-').join(' ')}</h1>
            <div className="SpriteContainer">{renderedSprites}</div>
          </div>
        </div>
      </div>
    );
  }
  return <Loading />;
};

export default DetailItem;
