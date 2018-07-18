import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = (props) => (
  <div>
    <h1>My Works</h1>
    <p>Look Here</p>
    <Link to="/portfolio/1">Item 1</Link>
    <Link to="/portfolio/2">Item 2</Link>
  </div>
);

export default PortfolioPage;
