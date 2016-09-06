import React from 'react';
import { View } from 'react-native';
import { mapStateToProps } from 'src/containers/NavigatorContainer';
import { NAV_TAB_ACTIVITIES } from 'src/constants/navigation';
import { STACK_ACTIVITIES } from 'src/constants/routes';


describe('NavigatorContainer', () => {
  describe('mapStateToProps', () => {
    it('should map the current stack as the active tab', () => {
      expect(mapStateToProps({
        routes: {
          currentStack: STACK_ACTIVITIES,
        },
      }, {
        children: <View />,
        hideNav: false,
      }))
      .toEqual(jasmine.objectContaining({
        activeTab: NAV_TAB_ACTIVITIES,
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
          currentStack: STACK_ACTIVITIES,
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
