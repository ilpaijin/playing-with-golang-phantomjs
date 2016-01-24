var sys = require('system');
var page = require("webpage").create();
var homePage = "https://localbitcoins.com/sell-bitcoins-online/.json";

page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36';

page.open(homePage, function (s) {
    // console.info('s: ', s);
});

// page.onNavigationRequested = function(url, type, willNavigate, main) {
//     var tmpUrl = ( url.substr(url.length - 1) != '/' ) ? url+'/' : url;
//     var tmpPageUrl = ( homePage.substr( homePage.length - 1) != '/' ) ? homePage+'/' : homePage;
//     console.log(tmpUrl,tmpPageUrl);
//     if (main && tmpUrl!=tmpPageUrl ) {
//         homePage = url;
//         sys.stdout.write(url+'\n');
//         setTimeout(forceExit,100 );
//     }
// };

page.onLoadFinished = function(status) {
    console.info(JSON.stringify(page.cookies));
    phantom.exit();
};

page.onError = function (msg, trace) {
    console.log("[ERRO]:"+msg);
    trace.forEach(function(item) {
    console.log('  ', item.file, ':', item.line);
    })
}


page.onResourceError = function(resourceError) {
    console.info('resource err');
    console.error(resourceError.url + ': ' + resourceError.errorString);
};

function forceExit(){
    phantom.exit(0);
}
