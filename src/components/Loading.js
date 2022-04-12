import React, { useEffect, useState } from 'react';
import './Loading.css';
const Loading = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 4000);
  }, []);
  return (
    <div className="loading_page">
      <div className="loading_text">
        <h1>Loading</h1>
      </div>
      <p className={show ? `failed_load` : `failed_load close_failed_load`}>
        If it takes too long to load, please refresh the page!
      </p>
    </div>
  );
};

export default Loading;
