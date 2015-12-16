var metalSmith = require('metalsmith');
var replace = require('..');

describe('metalsmith-replace', function() {
    it('should match @@ and replace with string', function(done) {
        var metalsmith = metalSmith(__dirname);
        metalsmith
            .source('post')
            .use(replace({
                title: {
                    patterns: [{
                        match: 'aaa',
                        replacement: 'bbb'
                    }]
                }
            }))
            .read(function(err, files) {
                should.not.exist(err);
                metalsmith.run(files, function(err, files) {
                    should.not.exist(err);
                    files['a.md'].title.should.equal('a.md test title aaa bbb');
                    done();
                });
            });
    });

    it('should match @@ and replace with function', function(done) {
        var metalsmith = metalSmith(__dirname);
        metalsmith
            .source('post')
            .use(replace({
                title: {
                    patterns: [{
                        match: 'aaa',
                        replacement: function(){
                            return 'bbb';
                        }
                    }]
                }
            }))
            .read(function(err, files) {
                should.not.exist(err);
                metalsmith.run(files, function(err, files) {
                    should.not.exist(err);
                    files['a.md'].title.should.equal('a.md test title aaa bbb');
                    done();
                });
            });
    });

    it('should match regex and replace with string', function(done) {
        var metalsmith = metalSmith(__dirname);
        metalsmith
            .source('post')
            .use(replace({
                title: {
                    patterns: [{
                        match: /aaa/g,
                        replacement: 'bbb'
                    }]
                }
            }))
            .read(function(err, files) {
                should.not.exist(err);
                metalsmith.run(files, function(err, files) {
                    should.not.exist(err);
                    files['a.md'].title.should.equal('a.md test title bbb @@bbb');
                    done();
                });
            });
    });

    it('should match regex and replace with function', function(done) {
        var metalsmith = metalSmith(__dirname);
        metalsmith
            .source('post')
            .use(replace({
                title: {
                    patterns: [{
                        match: /aaa/g,
                        replacement: function(){
                            return 'bbb'
                        }
                    }]
                }
            }))
            .read(function(err, files) {
                should.not.exist(err);
                metalsmith.run(files, function(err, files) {
                    should.not.exist(err);
                    files['a.md'].title.should.equal('a.md test title bbb @@bbb');
                    done();
                });
            });
    });
});
