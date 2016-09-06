jest.mock('src/constants/routes', () => ({
  STACKS_TO_NAV_TABS: {
    FOO: 'NAV_TAB_FOO',
  },
}));


import React from 'react';
import { View } from 'react-native';
import { mapStateToProps } from 'src/containers/NavigatorContainer';


describe('NavigatorContainer', () => {
  describe('mapStateToProps', () => {
    it('should map the current stack as the active tab', () => {
      expect(mapStateToProps({
        routes: {
          currentStack: 'FOO',
        },
      }, {
        children: <View />,
        hideNav: false,
      }))
      .toEqual(jasmine.objectContaining({
        activeTab: 'NAV_TAB_FOO',
      }));
    });

    it('should set the active tab to null if the current stack has no tab', () => {
      expect(mapStateToProps({
        routes: {
          currentStack: 'BAR',
        },
      }, {
        hideNav: false,
      }))
      .toEqual(jasmine.objectContaining({
        activeTab: null,
      }));
    });

    it('should set the active tab to null hideNav prop is true', () => {
      expect(mapStateToProps({
        routes: {
          currentStack: 'FOO',
        },
      }, {
        hideNav: true,
      }))
      .toEqual(jasmine.objectContaining({
        activeTab: null,
      }));
    });
  });
});
