import { mapStateToProps } from 'src/containers/NavigatorContainer';
import * as constants from 'src/constants/navigation';


describe('NavigatorContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide the active tab', () => {
      expect(mapStateToProps({
        navigation: {
          navigator: {
            activeTab: constants.NAV_TAB_JOURNEY,
          },
        },
      }))
      .toEqual(jasmine.objectContaining({
        activeTab: constants.NAV_TAB_JOURNEY,
      }));
    });
  });
});
