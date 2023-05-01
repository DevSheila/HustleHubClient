const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Hustle-hub</h1>
            <div className="links">
            <a href="/Home">Home</a>
                <a href="/Login">Log In</a>
                <a href="/Form">Clients</a>
                <a href="/otp">OTP</a>
                <a href="/">Handymen</a>
            </div>
        </nav>
      );
}
 
export default Navbar;