import { mapStateToProps } from 'src/containers/MessagesContainer';
import { fakeState, fakeMessage } from 'app/scripts/helpers';


describe('MessagesContainer', () => {
  it('should provide messages', () => {
    const message1 = fakeMessage({
      id: 1,
      timeSent: '2016-11-30T09:43:20.311Z',
    });

    const message2 = fakeMessage({
      id: 2,
      timeSent: '2016-11-31T09:43:20.311Z',
    });

    const state = fakeState({
      entities: {
        messages: {
          1: message1,
          2: message2,
        },
      },
    });

    expect(mapStateToProps(state)).toEqual(jasmine.objectContaining({
      groups: [{
        messages: [message1, message2],
      }],
    }));
  });
});
