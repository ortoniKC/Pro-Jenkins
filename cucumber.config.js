require("babel-register")({
    presets: ["es2015"]
});
exports.config = {
    // set to "custom" instead of cucumber.
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // require feature files
    specs: [
        './feature/*.feature' // accepts a glob
    ],

    cucumberOpts: {
        // require step definitions
        require: [
            './steps/*.steps.js' // accepts a glob
        ]
    }
};