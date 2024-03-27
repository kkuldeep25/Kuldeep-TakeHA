// SimpleComponent.tsx

import React from 'react';

// Define a functional component
const SimpleComponent: React.FC = () => {
  return (
    <div>
      <h1>Rank your 5 most favorite Support tasks.</h1>
      <p>Answer - Analyze hundreds of support tickets to spot trends the product team can use</p>
      
      {/* Example of adding a new line with an empty <div> */}
      <div>Support tickets are goldmines for product improvement! By analyzing these tickets, we can identify recurring issues that impact user experience. This helps the product team:</div>
<div>Fix underlying architecture problems</div>
<div>Move towards scalable designs</div>
</div> This proactive approach minimizes user impact and strengthens the product overall. Support tickets also reveal customer pain points, allowing the product team to: </div>
<div> Focus on product robustness</div>
<div> Align future roadmaps with customer needs</div>

      
      {/* Example of adding a new line with a comment */}
      {/* This is a new line */}
      
      {/* Example of adding a new line with a self-closing <br> tag */}
      <br />
    </div>
  );
}

export default SimpleComponent;
