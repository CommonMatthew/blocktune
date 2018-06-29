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
