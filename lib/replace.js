var is = require('jistype');

module.exports = function(options){
    Object.keys(options).forEach(function(attr){
        var replace = options[attr];

        if(is.isFunction(replace) || is.isObject(replace)){
            options[attr] = [replace];
        }

        if(!is.isArray(options[attr])){
            throw new Error('replace option error');
        }
    });

    return function(files, metalsmith, done){
        Object.keys(files).forEach(function(key){
            var file = files[key];
            Object.keys(options).forEach(function(attr){
                if(file[attr]){
                    options[attr].forEach(function(replacement){
                        if(is.isFunction(replacement)){
                            file[attr] = replacement(file[attr]);
                        }else if(is.isObject(replacement)){
                            file[attr] = file[attr].replace(replacement.from, replacement.to);
                        }
                    });
                }
            });
        });
        done();
    };
};