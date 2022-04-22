import React from 'react';

const Highlight = ({ children, color = '#EB5757', backgroundColor = 'rgba(135,131,120,0.15)' }) => (
  <span style={{ color, background: backgroundColor, padding: '0.2em 0.4em', borderRadius: '3px' }}>
    {children}
  </span>
);

export default Highlight;