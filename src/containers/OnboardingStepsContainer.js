
/*
 TODO:
Import Views, try to generic these containment views dynamically.
*/


const config = {
  Greeting: {
    profileProps: ['firstName'],
  },
  ProfilePicture: {
    profileProps: ['profilePicture'],
  },
  Occupation: {
    profileProps: ['jobTitle', 'jobMotivation',],
  },
  Motivation: {
    profileProps: ['motivation',],
  },
  Inspiration: {
    profileProps: ['inspiration',],
  },
  Tags: {
    profileProps: ['tags'],
  },
  Skills: {
    profileProps: ['skills'],
  },
};


export [
  'Greeting',
  'ProfilePicture',
  'Occupation',
  'Motivation',
  'Inspiration',
  'Tags',
  'Skills',
  'Upload',
];
