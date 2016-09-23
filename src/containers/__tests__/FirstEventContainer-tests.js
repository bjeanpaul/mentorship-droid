import { mapStateToProps } from 'src/containers/FirstEventContainer';
import { fakeState, fakeProfile } from 'app/scripts/helpers';

describe('FirstEventContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide the firstName', () => {
      const state = fakeState({
        auth: {
          profileId: 999,
        },
        entities: {
          profiles: {
            999: fakeProfile({
              id: 999,
              firstName: 'Yo yo bangles',
            }),
          },
        },
      });
      expect(mapStateToProps(state).firstName).toEqual('Yo yo bangles');
    });
  });
});
