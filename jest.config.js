
module.exports = {
    transform: {
        '.(ts)': './node_modules/ts-jest/preprocessor.js'
    },
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|js)$',
    'moduleFileExtensions': [
        'ts',
        'js',
        'json'
    ],
    testURL: "http://localhost/",
    collectCoverage:true
};