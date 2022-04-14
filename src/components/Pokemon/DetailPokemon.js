import React, { useEffect, useState } from 'react';
import '../Detail.css';
import Loading from '../Loading';
const DetailPokemon = ({ detailInfo, setVisibilityDetailCard }) => {
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
    const renderedSprites = Object.entries(detail.sprites)
      .reverse()
      .map(([key, values]) => {
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
      });
    const renderedStats = detail.stats.map(({ base_stat, stat }) => (
      <tr className="stat" key={stat.url}>
        <td>{stat.name.split('-').join(' ').toUpperCase()}</td>
        <td>{base_stat}</td>
      </tr>
    ));
    const renderedAbilities = detail.abilities.map(({ ability, slot }) => (
      <tr className="ability" key={ability.url}>
        <td>{ability.name.split('-').join(' ').toUpperCase()}</td>
        <td>{slot}</td>
      </tr>
    ));

    const renderedMoves = detail.moves.slice(0, 10).map(({ move }) => (
      <tr key={move.url}>
        <td>{move.name.split('-').join(' ').toUpperCase()}</td>
      </tr>
    ));
    const renderedTypes = detail.types
      .map(({ type }) => type.name.charAt(0).toUpperCase() + type.name.slice(1))
      .join(', ');
    const renderedID =
      '#' + '0'.repeat(5 - detail.id.toString().length) + detail.id;
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
            <div className="detail_container">
              <div className="SpriteContainer">{renderedSprites}</div>
              <div className="flex">
                <div className="detail_flex">
                  <div className="moves">
                    <h3>
                      {detail.moves.length > 10
                        ? `10 MOVES OUT OF ${detail.moves.length}`
                        : 'ALL MOVES'}
                    </h3>
                    <table>
                      <thead>
                        <tr>
                          <th>NAME</th>
                        </tr>
                      </thead>
                      <tbody>
                        {detail.moves.length !== 0 ? (
                          renderedMoves
                        ) : (
                          <tr>
                            <td>NONE</td>
                          </tr>
                        )}
                      </tbody>
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
                </div>
                <div className=" description">
                  <h1>{detail.name.split('-').join(' ')} </h1>
                  <p className="pokemon_id">{renderedID}</p>
                  <p className="pokemon_description">
                    Pokemon type: {renderedTypes}
                    <br />
                    Height: {detail.height * 10}cm
                    <br />
                    Weight: {detail.weight / 10}kg
                    <br />
                    Base Exp.: {detail.base_experience}
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <Loading />;
};

export default DetailPokemon;
