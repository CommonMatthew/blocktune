const scrollingFx = {
    scrollPosition: 0,
    scrollState: 0,
    stopFX: 970,
    phone: {
        element: document.getElementById("demoMobile"),
        styleTop: 25,
        scrollDown: () => {
            if (scrollingFx.scrollPosition < 300 && scrollingFx.phone.styleTop > 15) {
                let speed = scrollingFx.phone.styleTop - 0.25;
                scrollingFx.phone.styleTop = speed;
                scrollingFx.phone.element.style.top = "-" + speed + "%";
            }
        },
        scrollUp: () => {
            if (scrollingFx.scrollPosition > 500 && scrollingFx.phone.styleTop < 25) {
                let speed = scrollingFx.phone.styleTop + 0.25;
                scrollingFx.phone.styleTop = speed;
                scrollingFx.phone.element.style.top = "-" + speed + "%";
            }
        }
    },
    laptop: {
        element: document.getElementById("demoLaptop"),
        minScrollRange: 0,
        maxScrollRange: 0,
        marginTop: 300,
        maxMarginTop: 400,
        minMagingTop: 200,
        increment: 5,
        decrement: 5,
        scrollDown: () => {
            if (scrollingFx.scrollPosition < 1826 && scrollingFx.laptop.marginTop < scrollingFx.laptop.maxMarginTop) {
                let decrementBy = scrollingFx.laptop.marginTop + scrollingFx.laptop.decrement;
                scrollingFx.laptop.marginTop = decrementBy;
                scrollingFx.laptop.element.style.marginTop = decrementBy + "px";
            }
        },
        scrollUp: () => {
            if (scrollingFx.scrollPosition > 500 && scrollingFx.laptop.marginTop > scrollingFx.laptop.minMagingTop) {
                let incrementBy = scrollingFx.laptop.marginTop - scrollingFx.laptop.increment;
                scrollingFx.laptop.marginTop = incrementBy;
                scrollingFx.laptop.element.style.marginTop = incrementBy + "px";
            }
        }
    }
}

window.addEventListener("scroll", () => {
    if (window.innerWidth > scrollingFx.stopFX) {
        console.log("window.innerWidth:", window.innerWidth)
        scrollingFx.scrollPosition = window.pageYOffset;

        // Scrolling Down
        if (scrollingFx.scrollPosition > scrollingFx.scrollState) {
            scrollingFx.scrollState = scrollingFx.scrollPosition;
            scrollingFx.phone.scrollDown();
            scrollingFx.laptop.scrollUp();
        } else {
            // Scrolling Up
            scrollingFx.scrollState = scrollingFx.scrollPosition;
            scrollingFx.phone.scrollUp();
            scrollingFx.laptop.scrollDown();
        }
    }
});