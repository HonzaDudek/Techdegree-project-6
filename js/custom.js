$('video').mediaelementplayer({
    features: ["playpause", "current", "progress", "duration", "timedtranscript", "volume", "fullscreen"],
    stretching: "responsive",

});

// Create variable that holds the video element
const vid = document.getElementById("main-video_html5");
// Create variable that holds all captions in array
const captions = document.getElementsByClassName("caption");

// Selects captions within wrapper__text div
const captionSection = document.querySelector(".wrapper__text");

let currentTime = vid.currentTime;


// Ads event listener to variable vid when the time of video is updated
    vid.addEventListener('timeupdate', () => {

    // Cycles through all captions
    for (let i = 0; i < captions.length; i += 1) {
        // Saves current time of a video to currentTime variable
        let currentTime = vid.currentTime;
        let currentCaption = captions[i];
        // CaptionStart and CaptionEnd gets data atributes from each caption
        let captionStart = currentCaption.getAttribute("data-starttime");
        let captionEnd = currentCaption.getAttribute("data-endtime");

        // If current time is in range between captionStart and captionEnd "highlighted" class is added to caption, else,
        // "highlighted" is removed.
        if (currentTime >= captionStart && currentTime <= captionEnd) {
            currentCaption.classList.add("highlighted");
        }
        else {
            currentCaption.classList.remove("highlighted");
        }
    }
});

    captionSection.addEventListener("click", (event) => {

            if (event.target.className === "caption") {

                //
                let captionStart = event.target;
                console.log(captionStart);

                let setTime = captionStart.getAttribute("data-starttime");
                console.log(setTime);

                vid.currentTime = setTime;
                console.log(vid.currentTime);
            }

    });