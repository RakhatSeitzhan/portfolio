import React from 'react'
import './css/Contacts.css'
function Contacts() {
    return (
        <div id = "Contacts" className = "container-fluid bg-main text-light">
            <br/><br/><br/><br/><br/><br/><br/>
            <div className = "container p-5 w-75 d-flex flex-column align-items-center text-center">
                <svg className = "my-logo mb-5" width="436" height="440" viewBox="0 0 436 440" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M332.5 50.8523C189 -41.6476 51 63.8523 24.5 152.852H157M19 276.352C95 522.352 486 448.352 411.5 152.852H300" stroke="currentColor" stroke-width="30" stroke-linecap="square"/>
                    <path d="M165 343.287V229.286M165 229.286V92.2865C208.667 86.2865 296.2 90.7865 297 156.787C297.8 222.787 210 229.286 165 229.286ZM165 229.286C210 229.286 297 242.487 297 343.287" stroke="currentColor" stroke-width="30" stroke-linecap="square"/>
                </svg>
                <div className = "h5">Do not leave for tomorrow what you can do today</div>
            </div>
            
            <div className = "container d-flex justify-content-center">
                <a href="https://www.instagram.com/seitzhan.r/">
                    <svg className = "logo" height="60px" width="60px" version="1.1" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg">
                        <circle className = "logo-background" cx="255.999" cy="256" r="246.455"/>
                        <path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm0,96c-43.453,0 -48.902,0.184 -65.968,0.963c-17.03,0.777 -28.661,3.482 -38.839,7.437c-10.521,4.089 -19.444,9.56 -28.339,18.455c-8.895,8.895 -14.366,17.818 -18.455,28.339c-3.955,10.177 -6.659,21.808 -7.437,38.838c-0.778,17.066 -0.962,22.515 -0.962,65.968c0,43.453 0.184,48.902 0.962,65.968c0.778,17.03 3.482,28.661 7.437,38.838c4.089,10.521 9.56,19.444 18.455,28.34c8.895,8.895 17.818,14.366 28.339,18.455c10.178,3.954 21.809,6.659 38.839,7.436c17.066,0.779 22.515,0.963 65.968,0.963c43.453,0 48.902,-0.184 65.968,-0.963c17.03,-0.777 28.661,-3.482 38.838,-7.436c10.521,-4.089 19.444,-9.56 28.34,-18.455c8.895,-8.896 14.366,-17.819 18.455,-28.34c3.954,-10.177 6.659,-21.808 7.436,-38.838c0.779,-17.066 0.963,-22.515 0.963,-65.968c0,-43.453 -0.184,-48.902 -0.963,-65.968c-0.777,-17.03 -3.482,-28.661 -7.436,-38.838c-4.089,-10.521 -9.56,-19.444 -18.455,-28.339c-8.896,-8.895 -17.819,-14.366 -28.34,-18.455c-10.177,-3.955 -21.808,-6.66 -38.838,-7.437c-17.066,-0.779 -22.515,-0.963 -65.968,-0.963Zm0,28.829c42.722,0 47.782,0.163 64.654,0.933c15.6,0.712 24.071,3.318 29.709,5.509c7.469,2.902 12.799,6.37 18.397,11.969c5.6,5.598 9.067,10.929 11.969,18.397c2.191,5.638 4.798,14.109 5.509,29.709c0.77,16.872 0.933,21.932 0.933,64.654c0,42.722 -0.163,47.782 -0.933,64.654c-0.711,15.6 -3.318,24.071 -5.509,29.709c-2.902,7.469 -6.369,12.799 -11.969,18.397c-5.598,5.6 -10.928,9.067 -18.397,11.969c-5.638,2.191 -14.109,4.798 -29.709,5.509c-16.869,0.77 -21.929,0.933 -64.654,0.933c-42.725,0 -47.784,-0.163 -64.654,-0.933c-15.6,-0.711 -24.071,-3.318 -29.709,-5.509c-7.469,-2.902 -12.799,-6.369 -18.398,-11.969c-5.599,-5.598 -9.066,-10.928 -11.968,-18.397c-2.191,-5.638 -4.798,-14.109 -5.51,-29.709c-0.77,-16.872 -0.932,-21.932 -0.932,-64.654c0,-42.722 0.162,-47.782 0.932,-64.654c0.712,-15.6 3.319,-24.071 5.51,-29.709c2.902,-7.468 6.369,-12.799 11.968,-18.397c5.599,-5.599 10.929,-9.067 18.398,-11.969c5.638,-2.191 14.109,-4.797 29.709,-5.509c16.872,-0.77 21.932,-0.933 64.654,-0.933Zm0,49.009c-45.377,0 -82.162,36.785 -82.162,82.162c0,45.377 36.785,82.162 82.162,82.162c45.377,0 82.162,-36.785 82.162,-82.162c0,-45.377 -36.785,-82.162 -82.162,-82.162Zm0,135.495c-29.455,0 -53.333,-23.878 -53.333,-53.333c0,-29.455 23.878,-53.333 53.333,-53.333c29.455,0 53.333,23.878 53.333,53.333c0,29.455 -23.878,53.333 -53.333,53.333Zm104.609,-138.741c0,10.604 -8.597,19.199 -19.201,19.199c-10.603,0 -19.199,-8.595 -19.199,-19.199c0,-10.604 8.596,-19.2 19.199,-19.2c10.604,0 19.201,8.596 19.201,19.2Z"/>
                    </svg>
                </a>
                <a href="mailto:r.seitzhan.r@gmail.com">
                    <svg className = "logo mx-5" height="60px" width="60px" version="1.1" viewBox="0 0 512 512"  xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <circle  cx="255.999" cy="256" r="257"/>
                        <path className = "logo-background" d="M384,128H128c-17.602,0-32,14.406-32,32v192c0,17.594,14.398,32,32,32h256     c17.594,0,32-14.406,32-32V160C416,142.406,401.594,128,384,128L384,128z M384,352h-32V211.203L256,272l-96-60.797V352h-32V160 h19.203L256,227.203L364.797,160H384V352L384,352z"/>
                    </svg>
                </a>
                <a href="https://github.com/RakhatSeitzhan">
                    <svg className = "logo" height="60px" width="60px" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <circle className = "logo-background" cx="16" cy="16" r="15"/>
                        <path d="M16,0C7.163,0,0,7.163,0,16c0,8.837,7.164,16,16,16c8.837,0,16-7.163,16-16C32,7.163,24.837,0,16,0z M18.067,18.96    c0.333,0.289,0.592,1.308,0.592,1.776v4.144h-2.365h-2.368c0,0,0.007-1.405,0-2.368c-3.24,0.697-4.144-1.776-4.144-1.776    C9.19,19.552,8.598,18.96,8.598,18.96c-1.184-0.703,0-0.592,0-0.592c1.184,0,1.776,1.184,1.776,1.184    c1.039,1.764,2.888,1.48,3.552,1.184c0-0.592,0.259-1.487,0.592-1.776c-2.586-0.291-4.738-1.776-4.738-4.736    c0-2.96,0.594-3.552,1.186-4.144c-0.12-0.292-0.615-1.37,0.018-2.96c0,0,1.163,0,2.347,1.776c0.587-0.587,2.368-0.592,2.961-0.592    c0.591,0,2.373,0.005,2.959,0.592c1.184-1.776,2.35-1.776,2.35-1.776c0.633,1.59,0.138,2.668,0.018,2.96    c0.592,0.592,1.184,1.184,1.184,4.144C22.804,17.184,20.654,18.669,18.067,18.96z"/>
                    </svg>
                </a>
            </div>
            <br/><br/><br/><br/><br/><br/><br/>
            <div className = "text-center pb-5">Built from scratch by me :)</div>
        </div>
    )
}

export default Contacts
