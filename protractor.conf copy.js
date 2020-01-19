require("babel-register")({
    presets: ["es2015"]
});
const SpecReporter = require("jasmine-spec-reporter").SpecReporter;
const HtmlReporter = require("protractor-beautiful-reporter");
const date = new Date();
opt = {
    "debuggerAddress": 'localhost:57179'
}
exports.config = {
    framework: 'jasmine',
    directConnect: true,
    // './smoke/LearnAlert.js', /
    specs: ['./smoke/SuperCalculator.js'],
    jasmineNodeOpts: {
        showColors: true,
        // defaultTimeoutInterval: 100000
    },
    // headless
    capabilities: {
        "browserName": "chrome",
        'chromeOptions': {
            'debuggerAddress': '127.0.0.1:58627'
        }
    },
    // To run in
    // multiCapabilities: [{
    //     'browserName': 'MicrosoftEdge',
    //     // shardTestFiles: !true,
    //     maxInstances: 2
    // },
    // {
    //     'browserName': 'chrome',
    //     // shardTestFiles: true,
    //     maxInstances: 2
    // }],
    suites: {
        smoke: ['./smoke/*.js'],
        reg: ['./reg/*.js']
    },
    params: {
        url: 'https://erail.in/trains-between-stations/new-delhi-NDLS/mumbai-central-BCT'
    },

    onPrepare: () => {
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(
            new HtmlReporter({
                takeScreenShotsOnlyForFailedSpecs: true,
                baseDirectory: "Reports/" + date.getTime().toString()
                , docTitle: 'Protractor test automation report'
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