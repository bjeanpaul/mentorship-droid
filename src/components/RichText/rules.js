import React from 'react';

import Image from './Image';


const rules = styles => ({
  mentorshipImage: {
    react: node => (
      <Image styles={styles} url={node.url} />
    ),
  },
});


export default rules;
