const tstm = {
    // Working
    currentSlide: 0,
    currentImage: 0,
    targetSlideNumber: 0,
    targetImageNo: 0,
    nextSlideDelay: 1000,

    contentList: document.getElementsByClassName("testimonialContent"),
    imagesList: document.getElementsByClassName("tstmImg"),

    righColTargetContainer: document.getElementById("testimonialContentContainer"),
    leftColTargetContainer: document.getElementById("tstmLeftCol"),

    initialContentLoad: () => {
        const content = tstm.contentList[0].textContent;
        tstm.righColTargetContainer.innerHTML = "<h1>" + content + "</h1>";
    },

    initialImageLoad: () => {
        const content = tstm.imagesList[0].innerHTML;
        tstm.leftColTargetContainer.innerHTML = content;
    },

    initialLoad: () => {
        tstm.initialContentLoad();
        tstm.initialImageLoad();
    },

    nextSlide: () => {
        tstm.rightCol.nextSlide();
        tstm.leftCol.nextSlide();
    },

    previousSlide: () => {
        tstm.leftCol.previousSlide();
    },

    rightCol: {

        slideOutContent: () => {
            const content = tstm.righColTargetContainer.textContent;
            tstm.righColTargetContainer.innerHTML = "";
            tstm.righColTargetContainer.classList.remove("slideInRight");
            tstm.righColTargetContainer.classList.add("slideOutRight");
            tstm.righColTargetContainer.innerHTML = "<h1>" + content + "</h1>";

            setTimeout(() => {
                tstm.righColTargetContainer.innerHTML = "";
            }, tstm.nextSlideDelay);
        },

        slideInPreviousSlide: () => {
            const content = tstm.righColTargetContainer.textContent;
            tstm.righColTargetContainer.innerHTML = "";
            tstm.righColTargetContainer.classList.remove("slideInRight");
            tstm.righColTargetContainer.classList.add("slideOutRight");
            tstm.righColTargetContainer.innerHTML = "<h1>" + content + "</h1>";

            setTimeout(() => {
                tstm.righColTargetContainer.innerHTML = "";
            }, tstm.nextSlideDelay);
        },

        getFirstSlideContent: (slideNumber) => {
            const content = tstm.contentList[0].innerHTML;
            tstm.righColTargetContainer.classList.remove("slideOutRight");
            tstm.righColTargetContainer.classList.add("slideInRight");
            tstm.righColTargetContainer.innerHTML = content;
            tstm.currentSlide = 0;
        },

        getNextSlideContent: () => {
            for (let i = 0; i < tstm.contentList.length; i++) {

                if (i === tstm.targetSlideNumber) {
                    const content = tstm.contentList[i].innerHTML;
                    tstm.righColTargetContainer.classList.remove("slideOutRight");
                    tstm.righColTargetContainer.classList.add("slideInRight");
                    tstm.righColTargetContainer.innerHTML = content;

                    tstm.currentSlide = i;
                }
            }
        },

        nextSlide: () => {
            tstm.rightCol.slideOutContent();
            setTimeout(() => {
                tstm.targetSlideNumber = tstm.currentSlide + 1;

                if (tstm.targetSlideNumber === tstm.contentList.length) {
                    tstm.rightCol.getFirstSlideContent(tstm.contentList.length);
                } else {
                    tstm.rightCol.getNextSlideContent();
                }
            }, tstm.nextSlideDelay);
        },

        getLastSlide: () => {
            const lastSlide = tstm.contentList.length - 1;
            for (let i = 0; i < tstm.contentList.length; i++) {

                if (i === lastSlide) {
                    const content = tstm.contentList[i].innerHTML;
                    tstm.righColTargetContainer.classList.remove("slideOutRight");
                    tstm.righColTargetContainer.classList.add("slideInRight");
                    tstm.righColTargetContainer.innerHTML = content;

                    tstm.currentSlide = i;
                }
            }
        },

        getPreviousSlide: () => {
            const previousSlideNumber = tstm.currentSlide - 1;
            for (let i = 0; i < tstm.contentList.length; i++) {

                if (i === previousSlideNumber) {
                    const content = tstm.contentList[i].innerHTML;
                    tstm.righColTargetContainer.classList.remove("slideOutRight");
                    tstm.righColTargetContainer.classList.add("slideInRight");
                    tstm.righColTargetContainer.innerHTML = content;

                    tstm.currentSlide = i;
                }
            }
        },

        slideInPreviousSlide: () => {
            tstm.rightCol.slideOutContent();
            setTimeout(() => {

                if (tstm.currentSlide === 0) {
                    tstm.rightCol.getLastSlide();
                } else {
                    tstm.rightCol.getPreviousSlide();
                }
            }, tstm.nextSlideDelay);
        }
    },

    leftCol: {

        slideOutContent: () => {
            const content = tstm.leftColTargetContainer.innerHTML;
            tstm.leftColTargetContainer.innerHTML = "";
            tstm.leftColTargetContainer.classList.remove("tstmSlideIn");
            tstm.leftColTargetContainer.classList.add("tstmSlideOut");
            tstm.leftColTargetContainer.innerHTML = content;

            setTimeout(() => {
                tstm.leftColTargetContainer.innerHTML = "";
            }, tstm.nextSlideDelay);
        },

        getFirstSlideContent: () => {
            const content = tstm.imagesList[0].innerHTML;
            tstm.leftColTargetContainer.classList.remove("tstmSlideOut");
            tstm.leftColTargetContainer.classList.add("tstmSlideIn");
            tstm.leftColTargetContainer.innerHTML = content;
            tstm.currentImage = 0;
        },

        getNextSlideContent: () => {

            const targetSlide = tstm.currentImage + 1;
            const content = tstm.imagesList[targetSlide].innerHTML;

            tstm.leftColTargetContainer.classList.remove("tstmSlideOut");
            tstm.leftColTargetContainer.classList.add("tstmSlideIn");
            tstm.leftColTargetContainer.innerHTML = content;

            tstm.currentImage = targetSlide;
        },

        getLastSlide: () => {

            const lastSlide = tstm.imagesList.length - 1;
            const content = tstm.imagesList[lastSlide].innerHTML;

            tstm.leftColTargetContainer.classList.remove("tstmSlideOut");
            tstm.leftColTargetContainer.classList.add("tstmSlideIn");
            tstm.leftColTargetContainer.innerHTML = content;

            tstm.currentImage = lastSlide;
        },

        getPreviousSlide: () => {
            const targetSlide = tstm.currentImage - 1;
            const content = tstm.imagesList[targetSlide].innerHTML;

            tstm.leftColTargetContainer.classList.remove("tstmSlideOut");
            tstm.leftColTargetContainer.classList.add("tstmSlideIn");
            tstm.leftColTargetContainer.innerHTML = content;

            tstm.currentImage = targetSlide;
        },

        previousSlide: () => {
            tstm.leftCol.slideOutContent();

            setTimeout(() => {

                if (tstm.currentImage === 0) {
                    tstm.leftCol.getLastSlide();
                } else {
                    tstm.leftCol.getPreviousSlide();
                }

            }, tstm.nextSlideDelay);
        },

        nextSlide: () => {
            tstm.leftCol.slideOutContent();

            setTimeout(() => {

                if (tstm.currentImage === tstm.imagesList.length - 1) {
                    tstm.leftCol.getFirstSlideContent();
                } else {
                    tstm.leftCol.getNextSlideContent();
                }
            }, tstm.nextSlideDelay);
        },
    },
}

const testimonialNextSlide = document.getElementById("arrowNextTestimonials");
testimonialNextSlide.addEventListener("click", () => {
    tstm.nextSlide();

    testimonialNextSlide.style.marginLeft = "11px";
    testimonialNextSlide.style.width = "90px"; 
    testimonialNextSlide.style.height = "90px"; 

    setTimeout( () => {
        testimonialNextSlide.style.marginLeft = "0px";
        testimonialNextSlide.style.width = "101px";
        testimonialNextSlide.style.height = "101px"; 
    }, 400);
});

const testimonialPreviousSlide = document.getElementById("arrowPreviousTestimonials");
testimonialPreviousSlide.addEventListener("click", () => {
    tstm.rightCol.slideInPreviousSlide();
    tstm.previousSlide();

    testimonialPreviousSlide.style.marginRight = "11px";
    testimonialPreviousSlide.style.height = "90px";
    testimonialPreviousSlide.style.width = "90px";

    setTimeout(() => {
        testimonialPreviousSlide.style.marginRight = "0px";
        testimonialPreviousSlide.style.width = "101px";
        testimonialPreviousSlide.style.height = "101px";
    }, 400);

});

tstm.initialLoad();