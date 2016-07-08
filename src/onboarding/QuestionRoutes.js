import React from 'react';
import { Route } from 'react-router-native';

import FormView from './FormView';
import { TextInput } from 'src/components';


const questions = [
  {
    path: 'occupation',
    title: 'What do you do?',
    inputFields: {
      jobTitle: {
        component: TextInput,
        componentProps: {
          placeholder: 'Job Title',
        },
      },
      jobSector: {
        component: TextInput,
        componentProps: {
          placeholder: 'Job Sector',
        },
      },
    },
    navigationBarProps: {
      to: '/motivation',
    },
  },

  {
    path: 'motivation',
    title: 'Why did you become a mentor?',
    inputFields: {
      motivation: {
        component: TextInput,
        componentProps: {
          placeholder: 'Type your answer here',
          maxWords: 50,
        },
      },
    },
    navigationBarProps: {
      to: '/inspiration',
    },
  },

  {
    path: 'inspiration',
    title: 'Who would you love as your own mentor?',
    inputFields: {
      mentorInspiration: {
        component: TextInput,
        componentProps: {
          placeholder: 'Type your answer here',
        },
      },
    },
    navigationBarProps: {
      to: '/me-in-three',
    },
  },

  {
    path: 'me-in-three',
    title: 'Describe yourself in three words',
    inputFields: {
      mentorInspiration: {
        component: TextInput,
        componentProps: {
          placeholder: 'Type your answer here',
        },
      },
    },
    navigationBarProps: {
      to: '/skills-and-strengths',
    },
  },

  {
    path: 'skills-and-strengths',
    title: 'What skills and strengths do you have that will help you as a Mentor?',
    inputFields: {
      mentorInspiration: {
        component: TextInput,
        componentProps: {
          placeholder: 'Type your answer here',
        },
      },
    },
    navigationBarProps: {
      to: '/',
      nextTextLabel: 'Done',
    },
  },
];

export default questions.map(question =>
  <Route
    key={question.path}
    path={question.path}
    component={() => <FormView {...question} /> }
  />
);
