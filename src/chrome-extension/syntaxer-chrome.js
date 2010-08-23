
(function () {

    /**
     * Beautifies the JavaScript source
     */
    function preProcessJavaScript() {

        var source = $("body pre").html();
        source = js_beautify(source);
        $("body pre").html(source);
    }


    var EXPS = {
        "lang-js": /\.js/,
        "lang-css": /\.css/
    };


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
        preProcessJavaScript();
    }


    $("body pre").addClass(className);

    prettyPrint();

})();