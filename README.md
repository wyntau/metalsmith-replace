## metalsmith-replace

a replace plugin for metalsmith

### Usage
```js
var metalSmith = require('metalsmith');
var replace = require('metalsmith-replace');

var metalsmith = metalSmith(__dirname);
metalsmith
    .source('post')
    .use(replace({
        title: function(title){
            return title.replace('aaa', 'bbb');
        }
    }))
    .use(replace({
        title: {
            from: 'a.md',
            to: 'b.md'
        }
    }))
    .build();
```

### Options

The keys of `options` is the attribute name of your files, and value should to
be a `object`, `function`, or `array` contains `object` or `function`;

when `object`, it should have `from` and `to`, and the value of `from` can be `string` or `regex`

when `function`, the signature is `function(oldValue){}`, and it should return the new value

when `array`, it should contains `object` or `function` above

### License
MIT