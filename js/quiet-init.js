var QuietInitializer = (function() {
    Quiet.init({
        profilesPrefix: "js/",
        memoryInitializerPrefix: "js/",
        libfecPrefix: "js/"
    });

    function onDOMLoad() {
        var host = "quiet.github.io";
        if ((host == window.location.host) && (window.location.protocol != "https:"))
            window.location.protocol = "https";
    };

    document.addEventListener("DOMContentLoaded", onDOMLoad);
})();
