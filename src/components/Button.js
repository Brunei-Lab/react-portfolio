import React from 'react';

const Button = ({url, type}) => (
  <a className="Button" href={url}>{type}</a>
)

export default Button;