import React, { useEffect, useState } from 'react';
import './DetailCard.css';
import Loading from './Loading';
const InfoCard = ({ detailInfo, setVisibilityDetailCard }) => {
  const [detail, setDetail] = useState('');
  useEffect(() => {
    fetch(detailInfo.url)
      .then(response => response.json())
      .then(data => {
        setDetail(data);
      });
  }, [detailInfo]);

  if (detail)
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
          </div>
        </div>
      </div>
    );
  return <Loading />;
};

export default InfoCard;
