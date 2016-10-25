import Channel from '@kadira/storybook-channel';
import MockTransport from './MockTransport';

export default () => new Channel({ transport: new MockTransport() });
