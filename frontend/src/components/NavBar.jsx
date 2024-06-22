import { NavLink } from "react-router-dom"
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from "react-icons/md"

const NavBar = ({ containerStyles }) => {
    return (
        <nav className={`${containerStyles}`}>
            <NavLink td={'/'}><div className="flexCenter gap-x-1"><MdHomeFilled />Home</div></NavLink>
            <NavLink td={'/mens'}><div className="flexCenter gap-x-1"><MdCategory />Men's</div></NavLink>
            <NavLink td={'/womens'}><div className="flexCenter gap-x-1"><MdShop2 />Women's</div></NavLink>
            <NavLink td={'/kids'}><div className="flexCenter gap-x-1"><MdContacts />Kid's</div></NavLink>
        </nav>
    )
}

export default NavBar