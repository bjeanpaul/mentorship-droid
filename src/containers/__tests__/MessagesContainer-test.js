import { mapStateToProps } from 'src/containers/MessagesContainer';
import { fakeState, fakeMessage, fakePendingMessage } from 'app/scripts/helpers';
import { getAuthUserProfile } from 'src/store/helpers';


describe('MessagesContainer', () => {
  it('should provide messages', () => {
    const state = fakeState();
    const msg1 = fakeMessage({ id: 1 });
    const msg2 = fakeMessage({ id: 2 });
    const msg3 = fakePendingMessage({ id: 3 });

    state.entities.messages = {
      1: msg1,
      2: msg2,
    };

    state.entities.pendingMessages = {
      3: msg3,
    };

    expect(mapStateToProps(state)).toEqual(jasmine.objectContaining({
      messages: [msg1, msg2, msg3],
    }));
  });

  it('should provide the authed users profile', () => {
    const state = fakeState();

    expect(mapStateToProps(state)).toEqual(jasmine.objectContaining({
      profile: getAuthUserProfile(state),
    }));
  });
});
