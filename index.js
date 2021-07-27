#!/usr/bin/env node

import keyboardListener from './src/listener.js';

new keyboardListener().onKeypress((keyId, deviceName) => {
    console.log("keyboardListener", keyId, deviceName);
})
