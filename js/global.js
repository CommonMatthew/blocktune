const swipeOutCSSClasses = (element, classToRemove, classToAdd) => {
    element.classList.remove(classToRemove);
    element.classList.add(classToAdd);
}

const loginHTML = `
    <div class="login">
        <div class="line-ctn">
            <a href="https://dash.blocktune.io/login" target="_blank">
                <div> &nbsp;&nbsp;&nbsp;</div>
                <div></div>
            </a>
        </div>
        <div>
            <a href="https://dash.blocktune.io/login" target="_blank">
                Login
            </a>                
        </div>
    </div>
`;

const socialMedia = `
    <div class="socialmedia">
        <div>Follow</div>
        <div class="line">&nbsp;</div>
        <a href="https://www.facebook.com/commonedits" target="_blank">
            <img src="img/logo-facebook-20w-170B.png" alt="">
        </a>
        <a href="https://twitter.com/commonedits" target="_blank">
            <img src="img/logo-twitter-20w-333B.png" alt="">
        </a>
        <a href="https://www.instagram.com/commonedits/" target="_blank">
            <img src="img/logo-instagram-20w-247B.png" alt="">
        </a>   
    </div>
`;

const footerHTML = `
    <div class="logo-ctn">
        <a href="index.html">
            <img src="img/logo-blocktune-4a4a4a-263w-2kb.png" alt="BlockTune">
        </a>            
    </div>
    <div class="copyright">
            &#169; 2018 CommonEdits, Inc
    </div>
    <div class="links">
        <div>
            <a href="index.html">
                    Home
            </a>
        </div>
        <div>
            <a href="mailto:theblocktune@gmail.com">
                Contact
            </a>
        </div>
        <div>
            <a href="http://learn.commonedits.com/common-edits-privacy-policy-draft-1/" target="_blank">
                Privacy Policy
            </a>
        </div>
        <div>
            <a href="http://learn.commonedits.com/common-edits-eula-draft/" target="_blank">
                EULA
            </a>
        </div>            
    </div>
`;

const navbar = `
    <div class="nav-wrapper">
        <div class="ctn">
            <!-- Menu on the left side-->
            <div class="logo-n-hamburgerIcon">
                <!-- -->
                <img src="img/icon-hamburger-menu.svg" id="openMenu" alt="Menu">
                <a href="index.html" class="logo-desktop">
                    <img src="img/logo-block-tune-343w-10kb.png" alt="BlockTune">
                </a>  
            </div>
            <!-- Menu on the right side-->
             <div class="links">
                <!-- Mobile Logo -->
                <div class="hideOnDesktopShowOnMobile mobile-logo">
                    <a href="index.html">
                        <img src="img/logo-block-tune-227w-4a4a4a-5kb.jpg" class="navbarLinksTransition" alt="">
                    </a>
                </div
                <!-- Regular Links -->
                <div class="discover-ctn">
                    <a href="https://dash.blocktune.io/register/?r=/new" class="normalLinks navbarLinksTransition">Discover</a>
                </div>
                <div class="login-ctn">
                    <a href="https://dash.blocktune.io/login" class="normalLinks navbarLinksTransition">Log In</a>
                </div>
                <div class="tryitnow-ctn">
                    <a href="https://dash.blocktune.io/register/?r=/new" class="tryItOut navbarLinksTransition">Try It Now</a>
                </div>
                <!-- Social Media -->
                <div class="hideOnDesktopShowOnMobile socialMedia-ctn">
                    <a href="https://www.facebook.com/commonedits" target="_blank">
                        <img src="img/logo-facebook-4a4a4a.svg" class="navbarLinksTransition" alt="Facebook: BlockTune">
                    </a>
                    <a href="https://twitter.com/commonedits" target="_blank">
                        <img src="img/logo-twitter-4a4a4a.svg" class="navbarLinksTransition" alt="Twitter: BlockTune">
                    </a>
                    <a href="https://www.instagram.com/commonedits/" target="_blank">
                        <img src="img/logo-Instagram-4a4a4a.svg" class="navbarLinksTransition" alt="Instragram: BlockTune">
                    </a>
                </div>
                <!-- Close Menu -->
                <div class="hideOnDesktopShowOnMobile" id="closeMenu">
                    <img src="img/icon-close-menu-4a4a4a.svg" class="navbarLinksTransition"  alt="BlockTune: Close Menu">
                </div>
            </div>
        </div>
    </div>
`;

// const navbarBT = {
//     openMenuBtn: document.getElementById('openMenu'),
//     closeMenuBtn: document.getElementById('closeMenu'),
//     linksContainer: document.getElementsByClassName('links')[0],
//     openMobileLinks: document.getElementsByClassName('navbarLinksTransition'),

//     openMenu: () => {
//         navbarBT.linksContainer.style.marginTop = "0";
//         let reverseCounter = navbarBT.openMobileLinks.length - 1;
//         for (let i = 0; i < navbarBT.openMobileLinks.length; i++) {
//             setTimeout(() => {
//                 navbarBT.openMobileLinks[reverseCounter].style.opacity = 1;
//                 --reverseCounter;
//             }, 300);
//         }
//     },

//     closeMenu: () => {
//         let reverseCounter = navbarBT.openMobileLinks.length - 1;
//         for (let i = 0; i < navbarBT.openMobileLinks.length; i++) {
//             setTimeout(() => {
//                 navbarBT.openMobileLinks[reverseCounter].style.opacity = 0;
//                 --reverseCounter;
//             }, 50);
//         }
//         navbarBT.linksContainer.style.marginTop = "-500px";
//     },

//     setMobileMenu: () => {
//         navbarBT.linksContainer.style.opacity = '1';
//     },

//     setDesktopMenu: () => {

//     }
// }

// navbarBT.openMenuBtn.addEventListener('click', () => {
//     navbarBT.openMenu();
// });
// navbarBT.closeMenuBtn.addEventListener('click', () => {
//     navbarBT.closeMenu();
// });

// let viewportWidthTracker = window.innerWidth;

// window.addEventListener('resize', () => {
//     const viewportWidth = window.innerWidth;
//     const linksContainer = document.getElementsByClassName('links')[0];

//     if (viewportWidth !== viewportWidthTracker && viewportWidth > 992) {
//         const opacityOnLinks = document.getElementsByClassName('navbarLinksTransition');
//         linksContainer.style.marginTop = "80px";

//         for (let i = 0; i < opacityOnLinks.length; i++) {
//             opacityOnLinks[i].style.opacity = '1';
//         }

//         viewportWidthTracker = viewportWidth;
//     }
//     else if (viewportWidth !== viewportWidthTracker && viewportWidth < 992) {
//         linksContainer.style.opacity = '0';
//         linksContainer.style.marginTop = '-500px';

//         setTimeout(() => {
//             linksContainer.style.opacity = '1';
//         }, 2000);
//     }
// });