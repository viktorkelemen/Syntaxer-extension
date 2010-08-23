
(function () {

    /**
     * Beautifies the JavaScript source
     */
    function preProcessJavaScript(target) {

        var source = target.innerHTML;
        source = js_beautify(source);
        target.innerHTML = source;
    }

    // currently supported languages
    var EXPS = {
        "lang-js": /\.js/,
        "lang-css": /\.css/
    };
    
    // get the pre element
    var pres = document.body.getElementsByTagName("pre"),
        target;

    if (pres.length > 0) {
        target = pres[0];
    }

    // selecting the className
    var path = window.location.pathname,
        className = "prettyprint",
        key;

    for (key in EXPS) {
        if (EXPS[key].test(path)) {
            className += " " + key;
            break;
        }
    }

    // if it's JavaScript
    if (EXPS["lang-js"].test(path)) {

        // beautifier
        preProcessJavaScript(target);
    }

    target.className = className;

    prettyPrint();

})();