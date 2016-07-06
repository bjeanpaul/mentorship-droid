import React from 'react';
import { View } from 'react-native';
import { Router, Route, StackRoute, IndexRoute } from 'react-router-native';

import Welcome from './Welcome'
import ProfilePicture from './ProfilePicture';
import CameraRoll from './CameraRoll';
import Motivation from './Motivation';

import FormView from './FormView';


const StackContainer = (props) => (
  <View style={{ flex: 1, backgroundColor: 'black' }}>
    {props.children}
  </View>
);

import { TextInput } from 'src/components';

const Job = () => {

  const inputFields = {
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
    navigationBarProps: {
      to: 'motivation',
    },
  };


  return <FormView
    title="What do you do?"
    inputFields={inputFields}
    />
}



const onboardingRoute = (

  <StackRoute
    path="/"
    component={StackContainer}
  >
    <IndexRoute component={Job} />
    <Route path="profile-picture" component={ProfilePicture} />
    <Route path="camera-roll" component={CameraRoll} />
    <Route path="job" component={Job} />
    <Route path="motivation" component={Motivation} />

  </StackRoute>
);

export default onboardingRoute;
