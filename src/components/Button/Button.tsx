import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({}) => {
  return <button>My Button</button>;
};
