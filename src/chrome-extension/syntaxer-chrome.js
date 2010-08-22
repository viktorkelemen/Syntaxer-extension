
$( function () {
        
        
    var EXPS = {
        "sh_javascript": /\.js/,
        "sh_css": /\.css/,
        "sh_php": /\.php/,
        "sh_python": /\.py/,
        "sh_ruby": /\.rb/,
        "sh_xml": /\.xml/
    };
        
    var path = window.location.pathname,
        className = "",
        key;

    for (key in EXPS) {
        
        if (EXPS[key].test(path)) {
            className = key;
            break;
        }
    }
        
    $("body pre").addClass(className);

    // slooow
    SHJS.highlight();

});