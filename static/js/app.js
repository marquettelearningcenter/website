(function(){
    // Menu Bar & Nav Toggle (see .menu-bar and .main-nav in app.css)
    var mainNav = document.getElementById('main-nav');
    if (mainNav) {
        var isNavShowing = false;
        // Add classname to main nav
        mainNav.className += ' main-nav';// hides nav
        var mainNavClassName = mainNav.className;
        // Create menu toggle
        var menuToggle = document.createElement('a');
        menuToggle.appendChild(document.createTextNode('Menu'));
        menuToggle.href = '#';
        menuToggle.addEventListener('click', function(e){
            e.preventDefault();
            mainNav.className = isNavShowing ? mainNavClassName : mainNavClassName + ' show';
            isNavShowing = ! isNavShowing;
        });
        // Create menu bar
        var menuBar = document.createElement('div');
        menuBar.className = 'menu-bar';
        menuBar.appendChild(menuToggle);
        // Insert menu bar before main nav
        mainNav.parentNode.insertBefore(menuBar, mainNav);
    }
    /*
    Result:
    <div class="menu-bar"><a href="#">Menu</a></div>
    <nav id="main-nav" class="nav main-nav">...
    */
}());
