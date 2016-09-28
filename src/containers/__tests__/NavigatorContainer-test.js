import { fromPairs } from 'lodash';
import { mapStateToProps, mapDispatchToProps } from 'src/containers/NavigatorContainer';
import * as constants from 'src/constants/navigation';


describe('NavigatorContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide navigation state for each tab', () => {
      expect(mapStateToProps({
        navigation: {
          activities: 'ACTIVITIES_STACK',
          journey: 'JOURNEY_STACK',
          scheduledCalls: 'SCHEDULED_CALLS_STACK',
        },
      }))
      .toEqual(jasmine.objectContaining({
        navigationStates: fromPairs([
          [constants.NAV_TAB_ACTIVITIES, 'ACTIVITIES_STACK'],
          [constants.NAV_TAB_JOURNEY, 'JOURNEY_STACK'],
          [constants.NAV_TAB_SCHEDULED_CALLS, 'SCHEDULED_CALLS_STACK'],
        ]),
      }));
    });
  });

  describe('mapDispatchToProps', () => {
    it('should dispatch the entered tab when a tab is selected', () => {
      const dispatch = jest.fn();
      const { tabDidChange } = mapDispatchToProps(dispatch, {});
      expect(dispatch.mock.calls).toEqual([]);
      tabDidChange(constants.NAV_TAB_JOURNEY);
      expect(dispatch.mock.calls).toEqual([
        [{ type: constants.NAV_TAB_JOURNEY_ENTERED }],
      ]);
    });

    it('should not dispatch if there isnt an associated enter constant', () => {
      const dispatch = jest.fn();
      const { tabDidChange } = mapDispatchToProps(dispatch, {});
      expect(dispatch.mock.calls).toEqual([]);
      tabDidChange('PEW');
      expect(dispatch.mock.calls).toEqual([]);
    });
  });
});
