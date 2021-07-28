



const buttons = {};

buttons["KEY_ESC"] = 1;
buttons["KEY_1"] = 2;
buttons["KEY_2"] = 3;
buttons["KEY_3"] = 4;
buttons["KEY_4"] = 5;
buttons["KEY_5"] = 6;
buttons["KEY_6"] = 7;
buttons["KEY_7"] = 8;
buttons["KEY_8"] = 9;
buttons["KEY_9"] = 10;
buttons["KEY_0"] = 11;
buttons["KEY_MINUS"] = 12;
buttons["KEY_EQUAL"] = 13;
buttons["KEY_BACKSPACE"] = 14;
buttons["KEY_TAB"] = 15;
buttons["KEY_Q"] = 16;
buttons["KEY_W"] = 17;
buttons["KEY_E"] = 18;
buttons["KEY_R"] = 19;
buttons["KEY_T"] = 20;
buttons["KEY_Y"] = 21;
buttons["KEY_U"] = 22;
buttons["KEY_I"] = 23;
buttons["KEY_O"] = 24;
buttons["KEY_P"] = 25;
buttons["KEY_LEFTBRACE"] = 26;
buttons["KEY_RIGHTBRACE"] = 27;
buttons["KEY_ENTER"] = 28;
buttons["KEY_LEFTCTRL"] = 29;
buttons["KEY_A"] = 30;
buttons["KEY_S"] = 31;
buttons["KEY_D"] = 32;
buttons["KEY_F"] = 33;
buttons["KEY_G"] = 34;
buttons["KEY_H"] = 35;
buttons["KEY_J"] = 36;
buttons["KEY_K"] = 37;
buttons["KEY_L"] = 38;
buttons["KEY_SEMICOLON"] = 39;
buttons["KEY_APOSTROPHE"] = 40;
buttons["KEY_GRAVE"] = 41;
buttons["KEY_LEFTSHIFT"] = 42;
buttons["KEY_BACKSLASH"] = 43;
buttons["KEY_Z"] = 44;
buttons["KEY_X"] = 45;
buttons["KEY_C"] = 46;
buttons["KEY_V"] = 47;
buttons["KEY_B"] = 48;
buttons["KEY_N"] = 49;
buttons["KEY_M"] = 50;
buttons["KEY_COMMA"] = 51;
buttons["KEY_DOT"] = 52;
buttons["KEY_SLASH"] = 53;
buttons["KEY_RIGHTSHIFT"] = 54;
buttons["KEY_KPASTERISK"] = 55;
buttons["KEY_LEFTALT"] = 56;
buttons["KEY_SPACE"] = 57;
buttons["KEY_CAPSLOCK"] = 58;
buttons["KEY_F1"] = 59;
buttons["KEY_F2"] = 60;
buttons["KEY_F3"] = 61;
buttons["KEY_F4"] = 62;
buttons["KEY_F5"] = 63;
buttons["KEY_F6"] = 64;
buttons["KEY_F7"] = 65;
buttons["KEY_F8"] = 66;
buttons["KEY_F9"] = 67;
buttons["KEY_F10"] = 68;
buttons["KEY_NUMLOCK"] = 69;
buttons["KEY_SCROLLLOCK"] = 70;
buttons["KEY_KP7"] = 71;
buttons["KEY_KP8"] = 72;
buttons["KEY_KP9"] = 73;
buttons["KEY_KPMINUS"] = 74;
buttons["KEY_KP4"] = 75;
buttons["KEY_KP5"] = 76;
buttons["KEY_KP6"] = 77;
buttons["KEY_KPPLUS"] = 78;
buttons["KEY_KP1"] = 79;
buttons["KEY_KP2"] = 80;
buttons["KEY_KP3"] = 81;
buttons["KEY_KP0"] = 82;
buttons["KEY_KPDOT"] = 83;
buttons["KEY_ZENKAKUHANKAKU"] = 85;
buttons["KEY_102ND"] = 86;
buttons["KEY_F11"] = 87;
buttons["KEY_F12"] = 88;
buttons["KEY_RO"] = 89;
buttons["KEY_KATAKANA"] = 90;
buttons["KEY_HIRAGANA"] = 91;
buttons["KEY_HENKAN"] = 92;
buttons["KEY_KATAKANAHIRAGANA"] = 93;
buttons["KEY_MUHENKAN"] = 94;
buttons["KEY_KPJPCOMMA"] = 95;
buttons["KEY_KPENTER"] = 96;
buttons["KEY_RIGHTCTRL"] = 97;
buttons["KEY_KPSLASH"] = 98;
buttons["KEY_SYSRQ"] = 99;
buttons["KEY_RIGHTALT"] = 100;
buttons["KEY_HOME"] = 102;
buttons["KEY_UP"] = 103;
buttons["KEY_PAGEUP"] = 104;
buttons["KEY_LEFT"] = 105;
buttons["KEY_RIGHT"] = 106;
buttons["KEY_END"] = 107;
buttons["KEY_DOWN"] = 108;
buttons["KEY_PAGEDOWN"] = 109;
buttons["KEY_INSERT"] = 110;
buttons["KEY_DELETE"] = 111;
buttons["KEY_MUTE"] = 113;
buttons["KEY_VOLUMEDOWN"] = 114;
buttons["KEY_VOLUMEUP"] = 115;
buttons["KEY_POWER"] = 116;
buttons["KEY_KPEQUAL"] = 117;
buttons["KEY_PAUSE"] = 119;
buttons["KEY_KPCOMMA"] = 121;
buttons["KEY_HANGUEL"] = 122;
buttons["KEY_HANJA"] = 123;
buttons["KEY_YEN"] = 124;
buttons["KEY_LEFTMETA"] = 125;
buttons["KEY_RIGHTMETA"] = 126;
buttons["KEY_COMPOSE"] = 127;
buttons["KEY_STOP"] = 128;
buttons["KEY_AGAIN"] = 129;
buttons["KEY_PROPS"] = 130;
buttons["KEY_UNDO"] = 131;
buttons["KEY_FRONT"] = 132;
buttons["KEY_COPY"] = 133;
buttons["KEY_OPEN"] = 134;
buttons["KEY_PASTE"] = 135;
buttons["KEY_FIND"] = 136;
buttons["KEY_CUT"] = 137;
buttons["KEY_HELP"] = 138;

buttons["KEY_BUTTONHOME"] = 172;
buttons["KEY_BROWSERHOME"] = 150;

buttons["KEY_F13"] = 183;
buttons["KEY_F14"] = 184;
buttons["KEY_F15"] = 185;
buttons["KEY_F16"] = 186;
buttons["KEY_F17"] = 187;
buttons["KEY_F18"] = 188;
buttons["KEY_F19"] = 189;
buttons["KEY_F20"] = 190;
buttons["KEY_F21"] = 191;
buttons["KEY_F22"] = 192;
buttons["KEY_F23"] = 193;
buttons["KEY_F24"] = 194;
buttons["KEY_UNKNOWN"] = 240;

buttons["BTN_0"] = 0x100;
buttons["BTN_1"] = 0x101;
buttons["BTN_2"] = 0x102;
buttons["BTN_3"] = 0x103;
buttons["BTN_4"] = 0x104;
buttons["BTN_5"] = 0x105;
buttons["BTN_6"] = 0x106;
buttons["BTN_7"] = 0x107;
buttons["BTN_8"] = 0x108;
buttons["BTN_9"] = 0x109;

buttons["BTN_MOUSE"] = 0x110;
buttons["BTN_LEFT"] = 0x110;
buttons["BTN_RIGHT"] = 0x111;
buttons["BTN_MIDDLE"] = 0x112;
buttons["BTN_SIDE"] = 0x113;
buttons["BTN_EXTRA"] = 0x114;
buttons["BTN_FORWARD"] = 0x115;
buttons["BTN_BACK"] = 0x116;
buttons["BTN_TASK"] = 0x117;

buttons["BTN_JOYSTICK"] = 0x120;
buttons["BTN_TRIGGER"] = 0x120;
buttons["BTN_THUMB"] = 0x121;
buttons["BTN_THUMB2"] = 0x122;
buttons["BTN_TOP"] = 0x123;
buttons["BTN_TOP2"] = 0x124;
buttons["BTN_PINKIE"] = 0x125;
buttons["BTN_BASE"] = 0x126;
buttons["BTN_BASE2"] = 0x127;
buttons["BTN_BASE3"] = 0x128;
buttons["BTN_BASE4"] = 0x129;
buttons["BTN_BASE5"] = 0x12a;
buttons["BTN_BASE6"] = 0x12b;
buttons["BTN_DEAD"] = 0x12f;

buttons["BTN_GAMEPAD"] = 0x130;
buttons["BTN_A"] = 0x130;
buttons["BTN_B"] = 0x131;
buttons["BTN_C"] = 0x132;
buttons["BTN_X"] = 0x133;
buttons["BTN_Y"] = 0x134;
buttons["BTN_Z"] = 0x135;
buttons["BTN_TL"] = 0x136;
buttons["BTN_TR"] = 0x137;
buttons["BTN_TL2"] = 0x138;
buttons["BTN_TR2"] = 0x139;
buttons["BTN_SELECT"] = 0x13a;
buttons["BTN_START"] = 0x13b;
buttons["BTN_MODE"] = 0x13c;
buttons["BTN_THUMBL"] = 0x13d;
buttons["BTN_THUMBR"] = 0x13e;

buttons["BTN_DIGI"] = 0x140;
buttons["BTN_TOOL_PEN"] = 0x140;
buttons["BTN_TOOL_RUBBER"] = 0x141;
buttons["BTN_TOOL_BRUSH"] = 0x142;
buttons["BTN_TOOL_PENCIL"] = 0x143;
buttons["BTN_TOOL_AIRBRUSH"] = 0x144;
buttons["BTN_TOOL_FINGER"] = 0x145;
buttons["BTN_TOOL_MOUSE"] = 0x146;
buttons["BTN_TOOL_LENS"] = 0x147;
buttons["BTN_TOOL_QUINTTAP"] = 0x148; /* Five fingers on trackpad */
buttons["BTN_TOUCH"] = 0x14a;
buttons["BTN_STYLUS"] = 0x14b;
buttons["BTN_STYLUS2"] = 0x14c;
buttons["BTN_TOOL_DOUBLETAP"] = 0x14d;
buttons["BTN_TOOL_TRIPLETAP"] = 0x14e;
buttons["BTN_TOOL_QUADTAP"] = 0x14f; /* Four fingers on trackpad */

buttons["BTN_WHEEL"] = 0x150;
buttons["BTN_GEAR_DOWN"] = 0x150;
buttons["BTN_GEAR_UP"] = 0x151;

const keys = buttons;

keys["KEY_ESC"] = 1;
keys["KEY_1"] = 2;
keys["KEY_2"] = 3;
keys["KEY_3"] = 4;
keys["KEY_4"] = 5;
keys["KEY_5"] = 6;
keys["KEY_6"] = 7;
keys["KEY_7"] = 8;
keys["KEY_8"] = 9;
keys["KEY_9"] = 10;
keys["KEY_0"] = 11;
keys["KEY_MINUS"] = 12;
keys["KEY_EQUAL"] = 13;
keys["KEY_BACKSPACE"] = 14;
keys["KEY_TAB"] = 15;
keys["KEY_Q"] = 16;
keys["KEY_W"] = 17;
keys["KEY_E"] = 18;
keys["KEY_R"] = 19;
keys["KEY_T"] = 20;
keys["KEY_Y"] = 21;
keys["KEY_U"] = 22;
keys["KEY_I"] = 23;
keys["KEY_O"] = 24;
keys["KEY_P"] = 25;
keys["KEY_LEFTBRACE"] = 26;
keys["KEY_RIGHTBRACE"] = 27;
keys["KEY_ENTER"] = 28;
keys["KEY_LEFTCTRL"] = 29;
keys["KEY_A"] = 30;
keys["KEY_S"] = 31;
keys["KEY_D"] = 32;
keys["KEY_F"] = 33;
keys["KEY_G"] = 34;
keys["KEY_H"] = 35;
keys["KEY_J"] = 36;
keys["KEY_K"] = 37;
keys["KEY_L"] = 38;
keys["KEY_SEMICOLON"] = 39;
keys["KEY_APOSTROPHE"] = 40;
keys["KEY_GRAVE"] = 41;
keys["KEY_LEFTSHIFT"] = 42;
keys["KEY_BACKSLASH"] = 43;
keys["KEY_Z"] = 44;
keys["KEY_X"] = 45;
keys["KEY_C"] = 46;
keys["KEY_V"] = 47;
keys["KEY_B"] = 48;
keys["KEY_N"] = 49;
keys["KEY_M"] = 50;
keys["KEY_COMMA"] = 51;
keys["KEY_DOT"] = 52;
keys["KEY_SLASH"] = 53;
keys["KEY_RIGHTSHIFT"] = 54;
keys["KEY_KPASTERISK"] = 55;
keys["KEY_LEFTALT"] = 56;
keys["KEY_SPACE"] = 57;
keys["KEY_CAPSLOCK"] = 58;
keys["KEY_F1"] = 59;
keys["KEY_F2"] = 60;
keys["KEY_F3"] = 61;
keys["KEY_F4"] = 62;
keys["KEY_F5"] = 63;
keys["KEY_F6"] = 64;
keys["KEY_F7"] = 65;
keys["KEY_F8"] = 66;
keys["KEY_F9"] = 67;
keys["KEY_F10"] = 68;
keys["KEY_NUMLOCK"] = 69;
keys["KEY_SCROLLLOCK"] = 70;
keys["KEY_KP7"] = 71;
keys["KEY_KP8"] = 72;
keys["KEY_KP9"] = 73;
keys["KEY_KPMINUS"] = 74;
keys["KEY_KP4"] = 75;
keys["KEY_KP5"] = 76;
keys["KEY_KP6"] = 77;
keys["KEY_KPPLUS"] = 78;
keys["KEY_KP1"] = 79;
keys["KEY_KP2"] = 80;
keys["KEY_KP3"] = 81;
keys["KEY_KP0"] = 82;
keys["KEY_KPDOT"] = 83;
keys["KEY_ZENKAKUHANKAKU"] = 85;
keys["KEY_102ND"] = 86;
keys["KEY_F11"] = 87;
keys["KEY_F12"] = 88;
keys["KEY_RO"] = 89;
keys["KEY_KATAKANA"] = 90;
keys["KEY_HIRAGANA"] = 91;
keys["KEY_HENKAN"] = 92;
keys["KEY_KATAKANAHIRAGANA"] = 93;
keys["KEY_MUHENKAN"] = 94;
keys["KEY_KPJPCOMMA"] = 95;
keys["KEY_KPENTER"] = 96;
keys["KEY_RIGHTCTRL"] = 97;
keys["KEY_KPSLASH"] = 98;
keys["KEY_SYSRQ"] = 99;
keys["KEY_RIGHTALT"] = 100;
keys["KEY_HOME"] = 102;
keys["KEY_UP"] = 103;
keys["KEY_PAGEUP"] = 104;
keys["KEY_LEFT"] = 105;
keys["KEY_RIGHT"] = 106;
keys["KEY_END"] = 107;
keys["KEY_DOWN"] = 108;
keys["KEY_PAGEDOWN"] = 109;
keys["KEY_INSERT"] = 110;
keys["KEY_DELETE"] = 111;
keys["KEY_MUTE"] = 113;
keys["KEY_VOLUMEDOWN"] = 114;
keys["KEY_VOLUMEUP"] = 115;
keys["KEY_POWER"] = 116;
keys["KEY_KPEQUAL"] = 117;
keys["KEY_PAUSE"] = 119;
keys["KEY_KPCOMMA"] = 121;
keys["KEY_HANGUEL"] = 122;
keys["KEY_HANJA"] = 123;
keys["KEY_YEN"] = 124;
keys["KEY_LEFTMETA"] = 125;
keys["KEY_RIGHTMETA"] = 126;
keys["KEY_COMPOSE"] = 127;
keys["KEY_STOP"] = 128;
keys["KEY_AGAIN"] = 129;
keys["KEY_PROPS"] = 130;
keys["KEY_UNDO"] = 131;
keys["KEY_FRONT"] = 132;
keys["KEY_COPY"] = 133;
keys["KEY_OPEN"] = 134;
keys["KEY_PASTE"] = 135;
keys["KEY_FIND"] = 136;
keys["KEY_CUT"] = 137;
keys["KEY_HELP"] = 138;
keys["KEY_F13"] = 183;
keys["KEY_F14"] = 184;
keys["KEY_F15"] = 185;
keys["KEY_F16"] = 186;
keys["KEY_F17"] = 187;
keys["KEY_F18"] = 188;
keys["KEY_F19"] = 189;
keys["KEY_F20"] = 190;
keys["KEY_F21"] = 191;
keys["KEY_F22"] = 192;
keys["KEY_F23"] = 193;
keys["KEY_F24"] = 194;
keys["KEY_UNKNOWN"] = 240;

const axes = {};

axes["REL_X"] = 0x00;
axes["REL_Y"] = 0x01;
axes["REL_Z"] = 0x02;
axes["REL_RX"] = 0x03;
axes["REL_RY"] = 0x04;
axes["REL_RZ"] = 0x05;
axes["REL_HWHEEL"] = 0x06;
axes["REL_DIAL"] = 0x07;
axes["REL_WHEEL"] = 0x08;
axes["REL_MISC"] = 0x09;















const buttonsIndex = {};
for (let key in buttons) {
  buttonsIndex[buttons[key]] = key;
}

const axesIndex = {};
for (let key in axes) {
  axesIndex[axes[key]] = key;
}
















    const inputEventTypes = [
      {
        id: 0x00,
        event: 'EV_SYN',
        description: 'Used as markers to separate events. Events may be separated in time or in space, such as with the multitouch protocol.',
        events: [ 'SYN_REPORT', 'SYN_CONFIG', 'SYN_MT_REPORT', 'SYN_DROPPED' ],
        states: [],
      },
      {
        id: 0x01,
        event: 'EV_KEY',
        description: 'Used to describe state changes of keyboards, buttons, or other key-like devices.',
        events: buttonsIndex,
        states: [ 'KEYUP', 'KEYPRESS', 'KEYDOWN_AUTOREPEAT' ],
      },
      {
        id: 0x02,
        event: 'EV_REL',
        description: 'Used to describe relative axis value changes, e.g. moving the mouse 5 units to the left.',
        events: axesIndex,
        states: [],
      },
      {
        id: 0x03,
        event: 'EV_ABS',
        description: 'Used to describe absolute axis value changes, e.g. describing the coordinates of a touch on a touchscreen.',
        events: axesIndex,
        states: [],
      },
      {
        id: 0x04,
        event: 'EV_MSC',
        description: 'Used to describe miscellaneous input data that do not fit into other types.',
        events: [ 'MSC_SERIAL', 'MSC_PULSELED', 'MSC_GESTURE', 'MSC_RAW', 'MSC_SCAN', 'MSC_TIMESTAMP' ],
        states: [],
        // MSC_SERIAL		0x00
        // MSC_PULSELED		0x01
        // MSC_GESTURE		0x02
        // MSC_RAW			0x03
        // MSC_SCAN		0x04
        // MSC_TIMESTAMP		0x05



      },
      {
        id: 0x05,
        event: 'EV_SW',
        description: 'Used to describe binary state input switches.',
        events: [],
        states: [],
      },
      {
        id: 0x11,
        event: 'EV_LED',
        description: 'Used to turn LEDs on devices on and off.',
        events: [],
        states: [],
      },
      {
        id: 0x12,
        event: 'EV_SND',
        description: 'Used to output sound to devices.',
        events: [],
        states: [],
      },
      {
        id: 0x14,
        event: 'EV_REP',
        description: 'Used for autorepeating devices.',
        events: [],
        states: [],
      },
      {
        id: 0x15,
        event: 'EV_FF',
        description: 'Used to send force feedback commands to an input device.',
        events: [],
        states: [],
      },
      {
        id: 0x16,
        event: 'EV_PWR',
        description: 'A special type for power button and switch input.',
        events: [],
        states: [],
      },
      {
        id: 0x17,
        event: 'EV_FF_STATUS',
        description: 'Used to receive force feedback device status.',
        events: [],
        states: [],
      }
    ];







    const inputEventTypesIndex = {};
    for (let entry of inputEventTypes) {
      inputEventTypesIndex[entry.id] = entry;
    }






export default {
  buttons,
  buttonsIndex,
  axes,
  axesIndex,
  inputEventTypes,
  inputEventTypesIndex,

};
