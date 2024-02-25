export function Header() {

    return(
        <>
            <div className="header-container">
                <span className="space"></span>
                <span className="header">
                    <span className="logo">
                        <span className="blogin">Blogin</span><span className="dot">.</span>
                    </span>

                    <span className="nav-items">
                        <span className="nav-item journal">
                            <div className="text">Journal</div>
                        </span>
                        <span className="nav-item about">
                            <div className="text">About</div>
                        </span>
                        <span className="nav-item work">
                            <div className="text">Work</div>   
                        </span>
                        <span className="nav-item contact">
                            <div className="text">Contact</div>
                        </span>

                    </span>
                </span>
                <span className="space"></span>
            </div>
        </>
    )
}