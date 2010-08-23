
$( function () {
        
        
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
        
    
    $("body pre").addClass(className);

    prettyPrint();

});