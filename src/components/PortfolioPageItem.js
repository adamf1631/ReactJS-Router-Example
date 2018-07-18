import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = (props) => (
  <div>
    <h1>A thing I've done</h1>
    <p>This page is for {props.match.params.id}</p>
    <Link to="/portfolio">Back</Link>
  </div>
);

export default PortfolioItem;
