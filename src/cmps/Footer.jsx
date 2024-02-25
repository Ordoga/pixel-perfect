import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'
import be from '../img/be.png'
import basketball from '../img/basketball.png'

export function Footer() {


    return(
        <>
            <div className="footer-container">

                <span className="space"></span>

                <div className="footer-content">
                    <div className="footer-logo">
                        <span className="blogin">Blogin</span>
                        <span className="dot">.</span>
                    </div>

                    <div className="rights">
                        <span>© 2014 Blogin.com - All Rights Reserved - Find more free Templates at </span><span className="pixelhint">Pixelhint.com</span>
                    </div>

                    <div className="footer-links">
                        <div className="link facebook"><img src={facebook}></img></div>
                        <div className="link twitter"><img src={twitter}></img></div>
                        <div className="link be"> <img src={be}></img></div>
                        <div className="link basketball"> <img src={basketball}></img></div>
                    </div>
                </div>

                <span className="space"></span>

            </div>
        
        
        
        
        
        </>
    )
}