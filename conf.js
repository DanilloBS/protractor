var    Jasmine2HtmlReporter    =    require('protractor-jasmine2-html-reporter');
var reporter2=new Jasmine2HtmlReporter({
    takeScreenshots:    true,            
    fixedScreenshotName:    true
 });

exports.config = {
    seleniumAdress: 'http://localhost:4444/wd/hub',
    specs:['spec.js'],
    onPrepare:    function()    {
        jasmine.getEnv().addReporter(reporter2);
        //jasmine.getEnv().addReporter(reporter3);
     },
    getPageTimeout: 60000
}
