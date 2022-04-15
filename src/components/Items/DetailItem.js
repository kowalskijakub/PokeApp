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
    const renderedID =
      '#' + '0'.repeat(4 - detail.id.toString().length) + detail.id;
    const renderedEffect = detail.effect_entries.map(({ effect }) => (
      <>
        {effect} <br />
      </>
    ));
    const renderedGames = detail.game_indices.map(
      ({ game_index, generation: { name, url } }) => (
        <tr key={url}>
          <td>{game_index}</td>
          <td>{name.toUpperCase().split('-').join(' ')}</td>
        </tr>
      )
    );
    const renderedAttributes = detail.attributes.map(({ name, url }) => (
      <tr key={url}>
        <td>{name.split('-').join(' ').toUpperCase()}</td>
      </tr>
    ));
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
            <div className="flex">
              <div className="detail_flex grow">
                <div className="game_indicies">
                  <h3>GAME INDICIES</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>INDEX</th>
                        <th>NAME</th>
                      </tr>
                    </thead>
                    <tbody>{renderedGames}</tbody>
                  </table>
                </div>
                {detail.attributes.length === 0 || (
                  <>
                    <div className="attributes">
                      <h3>ATTRIBUTES</h3>
                      <table>
                        <thead>
                          <tr>
                            <th>NAME</th>
                          </tr>
                        </thead>
                        <tbody>{renderedAttributes}</tbody>
                      </table>
                    </div>
                  </>
                )}
              </div>
              <div className="description grow">
                <h1>{detail.name.split('-').join(' ')}</h1>
                <p className="detail_id">{renderedID}</p>
                <p className="detail_description">
                  {renderedEffect}
                  Cost: {detail.cost}
                  <br />
                  Item category: {detail.category.name.split('-').join(' ')}
                  <br />
                  {detail.fling_power && (
                    <>
                      Fling power: {detail.fling_power} <br />
                    </>
                  )}
                  {detail.fling_effect && (
                    <>
                      Fling effect: {detail.fling_effect} <br />
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <Loading />;
};

export default DetailItem;
