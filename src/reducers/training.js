import actionTypes from '../constants/training';

const [
  TRAINING_UPDATE_REQUEST,
  TRAINING_UPDATE_SUCCESS,
  TRAINING_UPDATE_FAILURE,
] = actionTypes.TRAINING_UPDATE;

const training = function training(state = {
  isLoading: false,
  modules: [
    {
      id: '1',
      title: 'How to use this app',
      url: 'https://www.wikipedia.org/',
    },
    {
      id: '2',
      title: 'Roles of a mentor',
      url: 'http://google.com',
    },
    {
      id: '3',
      title: 'Understand the youth',
      url: 'http://google.com',
    },
    {
      id: '4',
      title: 'Facilitation & communication',
      url: 'http://google.com',
    },
    {
      id: '5',
      title: 'Boundaries',
      url: 'http://google.com',
    },
  ],
}, action) {
  switch (action) {
    case TRAINING_UPDATE_REQUEST:
    case TRAINING_UPDATE_SUCCESS:
    case TRAINING_UPDATE_FAILURE:
    default:
      return state;
  }
};

export default training;
