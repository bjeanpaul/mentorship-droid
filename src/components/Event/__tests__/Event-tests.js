import React from 'react';
import Event from 'src/components/Event';


describe('Event', () => {
  it('should render the props', () => {
    expect(render(
      <Event
        date="2016-09-16T11:19:17.368442Z"
        icon="icon.png"
        title="pew pew pew"
        blurb="i am a blurb"
      />
    )).toMatchSnapshot();
  });

  it('should render a formatted date if the blurb is undefined', () => {
    expect(render(
      <Event
        date="2016-09-16T11:19:17.368442Z"
        icon="icon.png"
        title="pew pew pew"
      />
    )).toMatchSnapshot();
  });

});
