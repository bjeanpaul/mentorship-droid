//import Immutable from 'immutable';
import { Schema, arrayOf } from 'normalizr';


export const profileSchema = new Schema('profile', { idAttribute: 'username' });
export const profilesSchema = arrayOf(profileSchema);

// export const Profile = Immutable.Record({
//   username: '',
//   firstName: '',
//   lastName: '',
//   email: '',
//   jobSector: null,
//   jobTitle: null,
//   motivation: null,
//   inspiration: null,
//   tags: null,
//   profilePic: null,
// });
//
// export const ProfileMap = Immutable.OrderedMap;
