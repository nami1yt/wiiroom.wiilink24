		var images = [
            "http://wiiroom.wiilink24.com/graphics/bg/cottoncandy.jpg", "http://wiiroom.wiilink24.com/graphics/bg/cottoncandy.jpg", "http://wiiroom.wiilink24.com/graphics/bg/herbaltea.jpg",
            "http://wiiroom.wiilink24.com/graphics/bg/herbaltea.jpg", "http://wiiroom.wiilink24.com/graphics/bg/herbaltea.jpg", "http://wiiroom.wiilink24.com/graphics/bg/cottoncandy.jpg",
            "http://wiiroom.wiilink24.com/graphics/bg/tropicalfruit.jpg", "http://wiiroom.wiilink24.com/graphics/bg/cottoncandy.jpg", "http://wiiroom.wiilink24.com/graphics/bg/tropicalfruit.jpg"
        ];

        function getRandomFooter() {
            var randomIndex = Math.floor(Math.random() * images.length);
            return images[randomIndex];
        }

        function setRandomFooter() {
            var randomFooter = getRandomFooter();
            var imageUrl = randomFooter + '?rand=' + Math.random();
            document.getElementById('footerImage').src = imageUrl;
        }

        setRandomFooter();
		
		
		
		
		
		function refreshPage() {
            location.reload();
        }

        function goBack() {
            history.back();
        }

        function goForward() {
            history.forward();
        }
		


	// not working rn
		(function() {
			var disableRedirection = true;

			if (!disableRedirection) {
				var userAgent = navigator.userAgent;
				var exactUserAgent = "Opera/9.00 (Nintendo Wii; U; ; 1038-58; WM/14125/100923141009/En/1664590732533275; en)";
				var WiiLinkPC = "http://www.wiilink24.com/"; // redirect if not Wii and not Wii Room
				var WiiLinkWii = "http://www.wiilink24.com/wii"; // redirect if Wii but not Wii Room

				if (userAgent !== exactUserAgent) {
					if (userAgent.indexOf("Nintendo Wii") !== -1) {
						window.location.href = WiiLinkWii;
					} else {
						window.location.href = WiiLinkPC;
					}
				}
			}
		})();
		
	// temp fix
	if (window.innerWidth > 458) {
    window.location.href = "https://www.wiilink24.com";
	}
		
		
		
