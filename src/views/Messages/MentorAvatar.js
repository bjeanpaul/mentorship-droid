import React, { PropTypes } from 'react';

import Avatar from './Avatar';


const MentorAvatar = ({
  profile: { profilePic },
}) => (
  <Avatar source={{ uri: profilePic }} />
);


MentorAvatar.propTypes = {
  profile: PropTypes.shape({
    profilePic: PropTypes.string.isRequired,
  }).isRequired,
};


export default MentorAvatar;
