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
    const renderedStats = detail.stats.map(({ base_stat, stat }) => {
      return (
        <tr className="stat" key={stat.url}>
          <td>{stat.name.split('-').join(' ').toUpperCase()}</td>
          <td>{base_stat}</td>
        </tr>
      );
    });
    const renderedAbilities = detail.abilities.map(({ ability, slot }) => {
      return (
        <tr className="ability" key={ability.url}>
          <td>{ability.name.split('-').join(' ').toUpperCase()}</td>
          <td>{slot}</td>
        </tr>
      );
    });
    const renderedTypes = detail.types.map(({ type }) => {
      return (
        <tr key={type.url}>
          <td>{type.name.toUpperCase()}</td>
        </tr>
      );
    });
    const renderedMoves = detail.moves.slice(0, 10).map(({ move }) => {
      return (
        <tr key={move.url}>
          <td>{move.name.split('-').join(' ').toUpperCase()}</td>
        </tr>
      );
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
            <div className="detail_flex">
              <div className="Types">
                <h3>TYPES</h3>
                <table>
                  <thead>
                    <tr>
                      <th>NAME</th>
                    </tr>
                  </thead>
                  <tbody>{renderedTypes}</tbody>
                </table>
              </div>
              <div className="abilities">
                <h3>ABILITIES</h3>
                <table>
                  <thead>
                    <tr>
                      <th>NAME</th>
                      <th>SLOT</th>
                    </tr>
                  </thead>
                  <tbody>{renderedAbilities}</tbody>
                </table>
              </div>
              <div className="moves">
                <h3>
                  {detail.moves.length > 10
                    ? `10 MOVES OUT OF ${detail.moves.length}`
                    : 'ALL MOVES'}{' '}
                </h3>
                <table>
                  <thead>
                    <tr>
                      <th>NAME</th>
                    </tr>
                  </thead>
                  <tbody>{renderedMoves}</tbody>
                </table>
              </div>
              <div className="stats">
                <h3>STATISTICS</h3>
                <table>
                  <thead>
                    <tr>
                      <th>NAME</th>
                      <th>BASE</th>
                    </tr>
                  </thead>
                  <tbody>{renderedStats}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <Loading />;
};

export default InfoCard;
