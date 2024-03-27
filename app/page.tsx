// SimpleComponent.tsx

import React from 'react';

// Define a functional component
const SimpleComponent: React.FC = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React component written in TypeScript.</p>
      
      {/* Example of adding a new line with an empty <div> */}
      <div></div>
      
      {/* Example of adding a new line with a comment */}
      {/* This is a new line */}
      
      {/* Example of adding a new line with a self-closing <br> tag */}
      <br />
    </div>
  );
}

export default SimpleComponent;
