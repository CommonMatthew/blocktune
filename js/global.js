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