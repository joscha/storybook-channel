# Storybook Channel Mock

[![Build Status](https://travis-ci.org/joscha/storybook-channel-mock.svg?branch=master)](https://travis-ci.org/joscha/storybook-channel-mock)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


Storybook Channel Mock allows you to mock a storybook channel in your unit tests.

## Usage in your tests

```js
import addons from '@kadira/storybook-addons'
import createMockChannel from 'storybook-channel-mock';


describe('some storybook add-on', () => {
  let channel;

  beforeEach(() => {
    channel = createMockChannel();
    addons.setChannel(channel);
  });

  it('should be possible to message', () => {
      // channel.emit('my/type', { ... });
      // or your code that uses addons.getChannel()
  });
});
```
