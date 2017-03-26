(function() {
    var sc = window.sc;

    var dirs = [
        'data:/',
        //'offline:/', //crashes
        //'sd:/', //crashes
        //'sdcard:/', //crashes
        //'saveuser:/', //crashes
        //'savecommon:/', //crashes
        'blacklist:/',
        'shareddata:/',
        'oceanShared:/',
    ];

    dirs.forEach(function(dir) {
	    sc.dirlist(dir);
    });
})();

// vim: ff=dos
