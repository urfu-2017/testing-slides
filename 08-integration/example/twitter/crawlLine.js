module.exports = function crawlLine(text, cb) {
    const letters = text.split('');

    function print() {
        if (!letters.length) return cb();

        process.stdout.write(letters.shift());
        setTimeout(print, 100);
    }

    print();
};