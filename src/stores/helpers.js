export const getContext = ({
  auth: {
    auth = null,
    profileId = null,
  },
  entities: {
    profiles,
  },
}) => ({
  auth,
  profile: profileId
    ? profiles[profileId]
    : null,
});
