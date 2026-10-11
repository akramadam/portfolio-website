import { NavLink } from "react-router";



export default function Navbar () {
    return (
    <nav className='navbar'> 
        <NavLink className="navbar_link_name" to="/" end>
             <h1 className='navbar_name'>Akram Adam</h1>
        </NavLink>
       
        <div className='navbar_page_select'>
            <NavLink /*className="navbar_link"*/ to="/" className={({isActive})=> isActive ? "navbar_link_active" : "navbar_link"} end>
                <span className="navbar_button">Home</span>
            </NavLink>
            <NavLink /*className="navbar_link"*/ to="/projects" className={({isActive})=> isActive ? "navbar_link_active" : "navbar_link"} end>
                <span className="navbar_button">Projekte</span>
            </NavLink  >
            { "" ?  <NavLink to="/contact" className={({isActive})=> isActive ? "navbar_link_active" : "navbar_link navbar_mobile"} end>
                <span className="navbar_button">Kontakt</span>
            </NavLink> : ""}
        </div>
    </nav>
    )
}