import { mapStateToProps } from 'src/containers/TopNavigationContainer';


describe('TopNavigationContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide top-level navigation state', () => {
      expect(mapStateToProps({
        navigation: { top: 'TOP_STACK' },
      }))
      .toEqual(jasmine.objectContaining({
        navigationState: 'TOP_STACK',
      }));
    });
  });
});
