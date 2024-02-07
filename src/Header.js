import "./Header.css";

function Header() {
    return (
        <>
            <div className="Header">
                <a href="#" className="logo">
                    <img src="/christmas_2019.jpg" />
                </a>
                <div className="headerRight">
                    <a className="active" href="landingview">
                        Home
                    </a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
        </>
    );
}

export default Header;