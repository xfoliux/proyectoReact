export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarButtonsExample" aria-expanded="false" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <a className="navbar-brand" href="#">
                    <img src= "https://static.vecteezy.com/system/resources/previews/019/766/241/non_2x/adidas-logo-adidas-icon-transparent-free-png.png" width="50" />
                    </a>
                <div className="collapse navbar-collapse" id="navbarButtonsExample">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link text-white fs-4" aria-current="page" href="#">DevAcademy</a>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center ms-auto">
                        <ul className="navbar-nav d-flex flex-row">
                            <li className="nav-item me-3 me-lg-0">
                                <a className="nav-link position-relative" href="#">
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-danger">
                                    0</span>
                                    <i className="bi bi-cart text-warning"></i>
                                </a>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <a className="nav-link" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                                        <path
                                        fillRule="evenodd"
                                        d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <div id="actions_navbar">
                        </div>
                            <a className="btn btn-subtle px-3"
                            href="https://github.com/mdbootstrap/mdb-ui-kit"
                            role="button">
                                <i className="fab fa-github"></i>
                            </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}