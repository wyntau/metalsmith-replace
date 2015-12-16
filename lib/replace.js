
function isObject(arg){
    return Object.prototype.toString.call(arg) === '[object Object]';
}

var Applause = require('applause');

module.exports = function(options){
    if(!isObject(options)){
        throw new Error('metalsmith-replace expect object option');
    }

    return function(files, metalsmith, done){
        Object.keys(files).forEach(function(key){
            var file = files[key];
            Object.keys(options).forEach(function(attr){

                if(file.hasOwnProperty(attr)){

                    var option = options[attr];
                    var applause = Applause.create(option);

                    var input = file[attr];
                    var output = applause.replace(input);

                    if(output.content){
                        file[attr] = output.content;
                    }
                }
            });
        });
        done();
    }
};
