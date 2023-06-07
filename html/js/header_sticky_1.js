$(window).on('resize', function () {
        if($(window).width() >= 1024) {
            $("header").headroom({
			  "offset": 0,
			  "tolerance": 5,
			  "classes": {
				"initial": "animated",
				"pinned": "slideDown",
				"unpinned": "slideUp"
			  }
			});
        } else {
            $('header').removeClass("animated");
        }
    }).resize();