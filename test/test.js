var metalSmith = require('metalsmith');
var replace = require('..');

describe('metalsmith-replace', function(){
    it('one replace object str', function(done){
        var metalsmith = metalSmith(__dirname);
        metalsmith
            .source('post')
            .use(replace({
                title:{
                    from: 'aaa',
                    to: 'bbb'
                }
            }))
            .read(function(err, files){
                should.not.exist(err);
                metalsmith.run(files, function(err, files){
                    should.not.exist(err);
                    files['a.md'].title.should.equal('a.md test title bbb');
                    done();
                });
            });
    });

    it('one replace object regex', function(done){
        var metalsmith = metalSmith(__dirname);
        metalsmith
            .source('post')
            .use(replace({
                title:{
                    from: /aaa/,
                    to: 'bbb'
                }
            }))
            .read(function(err, files){
                should.not.exist(err);
                metalsmith.run(files, function(err, files){
                    should.not.exist(err);
                    files['a.md'].title.should.equal('a.md test title bbb');
                    done();
                });
            });
    });

    it('multi replace object', function(done){
        var metalsmith = metalSmith(__dirname);
        metalsmith
            .source('post')
            .use(replace({
                title: [{
                    from: 'aaa',
                    to: 'bbb'
                },{
                    from: 'a.md',
                    to: 'b.md'
                }]
            }))
            .read(function(err, files){
                should.not.exist(err);
                metalsmith.run(files, function(err, files){
                    should.not.exist(err);
                    files['a.md'].title.should.equal('b.md test title bbb');
                    done();
                });
            });
    });

    it('one replace function', function(done){
        var metalsmith = metalSmith(__dirname);
        metalsmith
            .source('post')
            .use(replace({
                title: function(title){
                    return title.replace('aaa', 'bbb');
                }
            }))
            .read(function(err, files){
                should.not.exist(err);
                metalsmith.run(files, function(err, files){
                    should.not.exist(err);
                    files['a.md'].title.should.equal('a.md test title bbb');
                    done();
                });
            });
    });

    it('multi replace function', function(done){
        var metalsmith = metalSmith(__dirname);
        metalsmith
            .source('post')
            .use(replace({
                title: [function(title){
                    return title.replace('aaa', 'bbb');
                }, function(title){
                    return title.replace('a.md', 'b.md');
                }]
            }))
            .read(function(err, files){
                should.not.exist(err);
                metalsmith.run(files, function(err, files){
                    should.not.exist(err);
                    files['a.md'].title.should.equal('b.md test title bbb');
                    done();
                });
            });
    });

    it('mixed replace option', function(done){
        var metalsmith = metalSmith(__dirname);
        metalsmith
            .source('post')
            .use(replace({
                title: [{
                    from: 'aaa',
                    to: 'bbb'
                }, function(title){
                    return title.replace('a.md', 'b.md');
                }]
            }))
            .read(function(err, files){
                should.not.exist(err);
                metalsmith.run(files, function(err, files){
                    should.not.exist(err);
                    files['a.md'].title.should.equal('b.md test title bbb');
                    done();
                });
            });
    });
});