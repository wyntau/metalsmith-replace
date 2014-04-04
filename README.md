## metalsmith-replace

An attribute's value replace plugin for metalsmith

### Install

    npm install metalsmith-replace

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
        },
        content: function(content){
            return content.replace('str1', 'str2');
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

The keys of options is the attribute name of your files, and value should to
be a `object`, `function`, or `array` which contains `object` or `function`;

when `object`, it should have attribute `from` and `to`, and the value of `from` can be `string` or `regex`

when `function`, the signature is `function(oldValue){}`, and the function should return the new value

when `array`, it should contains `object` or `function` above

### License
MIT