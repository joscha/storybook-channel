import { expect } from 'chai';
import sinon from 'sinon';
import Channel from '@kadira/storybook-channel';

import createMockChannel from '../';


describe('Channel Mock', function () {

  it('should be possible to create a mock channel', () => {
    const channel = createMockChannel();
    expect(channel).to.be.instanceof(Channel);
  });

  describe('messaging', () => {
    let channel;

    beforeEach(() => (channel = createMockChannel()));

    it('should be possible to message', () => {
      const topic = 'some/topic';
      const message = { some: 'message' };

      const spy = sinon.spy();

      channel.on(topic, spy);
      channel.emit(topic, message);

      expect(spy.calledOnce).to.be.true;
      expect(spy.firstCall.args).to.be.deep.equal([message]);
    });
  });
});
