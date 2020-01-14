let SpecReporter = require("jasmine-spec-reporter").SpecReporter;
var HtmlReporter = require("protractor-beautiful-reporter");
require("babel-register")({
    presets: ["es2015"]
});
const date = new Date();
exports.config = {
    framework: 'jasmine',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['C:\\Users\\dell\\Documents\\protractorWs\\pom\\test\\tc001.js'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 999999
    },
    capabilities: {
        'browserName': 'chrome',
        // 'chromeOptions': {
        //     'args': ['--headless']
        // },
        shardTestFiles: true,
        maxInstances: 2
    },
    // multiCapabilities: [
    //     // {
    //     //     'browserName': 'MicrosoftEdge',
    //     //     shardTestFiles: true
    //     // },
    //     {
    //         'browserName': 'chrome',
    //         shardTestFiles: true
    //     }
    // ],
    suites: {
        smoke: ['smoke/*.js'],
        sanity: 'week2/day2/*.js',
        regression: ['regression/posse.js', 'regression/Map.js']
    },
    onPrepare: () => {
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(
            new HtmlReporter({
                baseDirectory: "Reports/" + date.getTime().toString()
                , docTitle: 'Posse'
            }).getJasmine2Reporter()
        );
        jasmine.getEnv().addReporter(
            new SpecReporter({
                displayFailuresSummary: true,
                displayFailuredSpec: true,
                displaySuiteNumber: true,
                displaySpecDuration: true
            })
        );
    }
}