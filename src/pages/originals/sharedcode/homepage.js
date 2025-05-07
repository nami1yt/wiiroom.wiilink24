	// if only I didn't have to use nothing.png. Thanks Wii Room Browser.

var images = [
    { src: "graphics/nothing.png", caption: "Welcome to Wii Room!", weight: 9 },
    { src: "graphics/nothing.png", caption: "Video on demand?!", weight: 8 },
    { src: "graphics/nothing.png", caption: "Please change your Primary and Secondary DNS!", weight: 5 },
    { src: "graphics/nothing.png", caption: "I could go for some Domino's", weight: 7 },
    { src: "graphics/nothing.png", caption: "You'd appreciate an overclock", weight: 4 },
    { src: "graphics/nothing.png", caption: "Spill the Homebrew Tea!", weight: 7 },
    { src: "graphics/nothing.png", caption: "You can’t find it anywhere else!", weight: 8 },
    { src: "graphics/Logos/sudomemo.png", caption: "Happy Flipnoting!", weight: 6 },
    { src: "graphics/nothing.png", caption: "High or normal quality?", weight: 8 },
    { src: "graphics/nothing.png", caption: "SVGs scare me...", weight: 6 },
    { src: "graphics/Logos/diskette.png", caption: "Hiya! I’m Discette!", weight: 6 },
    { src: "graphics/nothing.png", caption: "Wow, thanks for that ngrok...", weight: 2 },
    { src: "graphics/Logos/mayro.png", caption: "Website by KingMayro!", weight: 2 },
    { src: "graphics/nothing.png", caption: "It doesn’t include Adobe Flash?", weight: 3 },
    { src: "graphics/nothing.png", caption: "The Red Room", weight: 1 },	
    { src: "graphics/nothing.png", caption: "I'm not gonna sugarcoat it", weight: 1 },		


    { src: "graphics/nothing.png", caption: "Rediscover your Wii!", weight: 9 },

    { src: "graphics/nothing.png", caption: "Wii would like to play, again", weight: 9 },
    { src: "graphics/nothing.png", caption: "Link back to Nintendo's golden age!", weight: 9 },
    { src: "graphics/nothing.png", caption: "Get Connected back to the Wii's past once again!", weight: 9 },
    { src: "graphics/nothing.png", caption: "The realest Wii network revival service", weight: 9 },

    { src: "graphics/nothing.png", caption: "Linking the world, one Wii at a time!", weight: 9 },
    { src: "graphics/nothing.png", caption: "Your childhood memories, connected to our servers!", weight: 9 },
    { src: "graphics/nothing.png", caption: "One of Nintendo's biggest steps in multiplayer gaming, Revived!", weight: 9 },
    { src: "graphics/nothing.png", caption: "As seen on Scott The Woz!", weight: 9 },
    { src: "graphics/nothing.png", caption: "You can do more with a Wii than just losing in Mario Kart!", weight: 9 },

    { src: "graphics/nothing.png", caption: "Play as if you were back in your childhood!", weight: 9 },
    { src: "graphics/nothing.png", caption: "Fans do what Nintendon't", weight: 9 },

    { src: "graphics/nothing.png", caption: "The Return of the Legendary WiiConnect24", weight: 9 }
];



var totalWeight = 0;
for (var i = 0; i < images.length; i++) {
    totalWeight += images[i].weight;
}

var randomNumber = Math.floor(Math.random() * totalWeight) + 1;


var selectedImage;
for (var i = 0; i < images.length; i++) {
    randomNumber -= images[i].weight;
    if (randomNumber <= 0) {
        selectedImage = images[i];
        break;
    }
}


document.getElementById("randomImage").src = selectedImage.src;
document.getElementById("imageCaption").textContent = selectedImage.caption;



var images = document.getElementsByTagName('img');


for (var i = 0; i < images.length; i++) {
    var img = images[i];
    
    if (img.getAttribute('src') === 'nothing.png') {
        img.setAttribute('width', '1px');
        img.setAttribute('height', '1px');
    }
}



        (function() {
            var hoverBox = document.getElementById('hoverbox');
            var container = document.getElementById('wavecontainer');
            var text = container.innerText || container.textContent;
            var letters = text.split('');
            container.innerHTML = '';

            for (var i = 0; i < letters.length; i++) {
                var span = document.createElement('span');
                span.innerHTML = letters[i];
                container.appendChild(span);
            }

            var waveHeight = 12;
            var waveLength = 26; 
            var speed = 45;
            var angle = 6;
            var isHovering = false;
            var animationInterval;

            function animateWave() {
                var spans = container.getElementsByTagName('span');
                for (var i = 0; i < spans.length; i++) {
                    spans[i].style.top = Math.sin((angle + i) / waveLength * 2 * Math.PI) * waveHeight + 'px';
                }
                angle += 1;
            }

            hoverBox.onmouseover = function() {
                if (!isHovering) {
                    isHovering = true;
                    animationInterval = setInterval(animateWave, speed);
                }
            };

            hoverBox.onmouseout = function(e) {
                var target = e.relatedTarget || e.toElement;
                if (!hoverBox.contains(target)) {
                    isHovering = false;
                    clearInterval(animationInterval);
                    var spans = container.getElementsByTagName('span');
                    for (var i = 0; i < spans.length; i++) {
                        spans[i].style.top = '0';
                    }
                }
            };
        })();