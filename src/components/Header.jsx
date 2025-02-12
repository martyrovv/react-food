import { Link} from "react-router-dom";

function Header() {
    return <nav>
        <div className="options nav-wrapper">
            <Link to="/" className="logo">React Cooking</Link>
            <ul id="nav-mobile" className="right ">
            <li className="li">
                <Link to="/about">About</Link>
                </li>
            <li className="li">
                <Link to="/contacts">Contacts</Link>
                </li>
            </ul>
        </div>
    </nav>
}

export { Header }