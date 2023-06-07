$(window).on('resize', function () {
        if($(window).width() >= 1024) {
            $("header").headroom({
			  "offset": 50,
			  "tolerance": 5,
			  "classes": {
				"initial": "animated",
				"pinned": "swingInX",
    			"unpinned": "swingOutX"
			  }
			});
        } else {
            $('header').removeClass("animated");
        }
    }).resize();