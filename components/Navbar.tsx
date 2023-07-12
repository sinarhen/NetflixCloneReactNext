const Navbar = () => {
    return (
        <nav className="w-full fixed z-40">
            <div className="
                px-4
                md:px-16
                py-6
                flex
                flex-row
                items-center
                transition
                duration-500
                bg-zinc-900
                bg-opacity-90
            ">
                <img src='/images/logo.png' alt="Profile"/>
            </div>
        </nav>
    )
};

export default Navbar;