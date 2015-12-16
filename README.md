## metalsmith-replace
[![NPM version](https://badge.fury.io/js/metalsmith-replace.png)](http://badge.fury.io/js/metalsmith-replace) [![Dependencies Status](https://david-dm.org/Treri/metalsmith-replace.png)](https://david-dm.org/Treri/metalsmith-replace)

An attribute's value replace plugin for metalsmith

use [Applause](https://github.com/outaTiME/applause) to replace.

### Install
[![metalsmith-replace](https://nodei.co/npm/metalsmith-replace.png?compact=true)](https://nodei.co/npm/metalsmith-replace)

### Usage
```js
var metalSmith = require('metalsmith');
var replace = require('metalsmith-replace');

var metalsmith = metalSmith(__dirname);
metalsmith
    .source('post')
    .use(replace({
        title: {
            patterns: [{
                match: 'aaa',
                replacement: 'bbb'
            }]
        },
        content: {
            patterns: [{
                match: 'str1',
                replacement: function() {
                    return 'str2';
                }
            }]
        }
    }))
    .use(replace({
        title: {
            patterns: [{
                match: 'a.md',
                replacement: 'b.md'
            }]
        }
    }))
    .build();
```

### Options

see [Applause](https://github.com/outaTiME/applause)

### License
MIT
