$(window).on('resize', function () {
        if($(window).width() >= 1024) {
            $("header").headroom({
			  "offset": 50,
			  "tolerance": 5,
			  "classes": {
				"initial": "animated",
				"pinned": "flipInX",
    			"unpinned": "flipOutX"
			  }
			});
        } else {
            $('header').removeClass("animated");
        }
    }).resize();