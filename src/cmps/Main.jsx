import Post1 from '../img/post1.png'
import Post2 from '../img/post2.png'
import Post3 from '../img/post3.png'


export function Main() {

    return(
        <>
            <div className="main">
                <span className="space"></span>
                <span className="content">

                    <div className="post">
                        <span className="image">
                            <img src={Post1}></img>
                        </span>
                        <span className="post-content">
                            <h1>Duis aute irure dolor in henderit in voluptate.</h1>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</p>
                            <button className="continue-reading">Continue Reading</button>
                        </span>
                    </div>

                    <div className="post">
                        <span className="image">
                            <img src={Post2}></img>
                        </span>
                        <span className="post-content">
                            <h1>Duis aute irure dolor in henderit in voluptate.</h1>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</p>
                            <button className="continue-reading">Continue Reading</button>
                        </span>
                    </div>

                    <div className="post">
                        <span className="image">
                            <img src={Post3}></img>
                        </span>
                        <span className="post-content">
                            <h1>Duis aute irure dolor in henderit in voluptate.</h1>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</p>
                            <button className="continue-reading">Continue Reading</button>
                        </span>
                    </div> 

                </span>
                <span className="space"></span>
            </div>
        
        
        </>
    )
}