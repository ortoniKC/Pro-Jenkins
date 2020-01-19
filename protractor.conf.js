require("babel-register")({
    presets: ["es2015"]
});
exports.config = {
    framework: 'jasmine',
    directConnect: true,
    specs: ['./smoke/SuperCalculator.js'],
    capabilities: {
        "browserName": "chrome",
        'chromeOptions': {
            'debuggerAddress': '127.0.0.1:59638'
        }
    }
}