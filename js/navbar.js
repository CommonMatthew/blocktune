const navbarBT = {
    openMenuBtn: document.getElementById('openMenu'),
    closeMenuBtn: document.getElementById('closeMenu'),
    linksContainer: document.getElementsByClassName('links')[0],
    openMobileLinks: document.getElementsByClassName('navbarLinksTransition'),

    openMenu: () => {
        navbarBT.linksContainer.style.marginTop = "0";
        let reverseCounter = navbarBT.openMobileLinks.length - 1;
        for (let i = 0; i < navbarBT.openMobileLinks.length; i++) {
            setTimeout(() => {
                navbarBT.openMobileLinks[reverseCounter].style.opacity = 1;
                --reverseCounter;
            }, 300);
        }
    },

    closeMenu: () => {
        let reverseCounter = navbarBT.openMobileLinks.length - 1;
        for (let i = 0; i < navbarBT.openMobileLinks.length; i++) {
            setTimeout(() => {
                navbarBT.openMobileLinks[reverseCounter].style.opacity = 0;
                --reverseCounter;
            }, 50);
        }
        navbarBT.linksContainer.style.marginTop = "-500px";
    },

    setMobileMenu: () => {
        navbarBT.linksContainer.style.opacity = '1';
    },

    setDesktopMenu: () => {

    }
}

navbarBT.openMenuBtn.addEventListener('click', () => {
    navbarBT.openMenu();
});
navbarBT.closeMenuBtn.addEventListener('click', () => {
    navbarBT.closeMenu();
});

let viewportWidthTracker = window.innerWidth;

window.addEventListener('resize', () => {
    const viewportWidth = window.innerWidth;
    const linksContainer = document.getElementsByClassName('links')[0];

    if (viewportWidth !== viewportWidthTracker && viewportWidth > 992) {
        const opacityOnLinks = document.getElementsByClassName('navbarLinksTransition');
        linksContainer.style.marginTop = "80px";

        for (let i = 0; i < opacityOnLinks.length; i++) {
            opacityOnLinks[i].style.opacity = '1';
        }

        viewportWidthTracker = viewportWidth;
    }
    else if (viewportWidth !== viewportWidthTracker && viewportWidth < 992) {
        linksContainer.style.opacity = '0';
        linksContainer.style.marginTop = '-500px';

        setTimeout(() => {
            linksContainer.style.opacity = '1';
        }, 2000);
    }
});