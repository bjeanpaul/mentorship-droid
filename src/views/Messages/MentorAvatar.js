import React, { PropTypes } from 'react';

import { ImageUrl } from 'src/api';
import Avatar from './Avatar';


const MentorAvatar = ({
  profile: { profilePic },
}) => (
  <Avatar source={profilePic.resize(40, 40).toSource()} />
);


MentorAvatar.propTypes = {
  profile: PropTypes.shape({
    profilePic: PropTypes.instanceOf(ImageUrl).isRequired,
  }).isRequired,
};


export default MentorAvatar;
