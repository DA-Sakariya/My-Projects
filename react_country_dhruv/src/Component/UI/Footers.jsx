import { MdPlace } from "react-icons/md"
import footerContact from "../../api/FooterApi.json"
import { IoCallSharp } from "react-icons/io5"
import { TbMailPlus } from "react-icons/tb"
import { NavLink } from "react-router-dom"

export const Footers = ()=>{

    const footerIcons = {
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp/>,
        TbMailPlus: <TbMailPlus/>
    }
    return (
        <footer className="footer-section">
            <div className="container grid grid-three-cols">
                {
                    footerContact.map((curdata,index)=>{
                        const { icon , title , details } = curdata
                        return (
                            <div className="footer-contact" key={index}>
                                <div className="icon">{footerIcons[icon]}</div>
                                <div className="footer-contact-text">
                                    <p>{title}</p>
                                    <p>{details}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="grid grid-two-cols">
                        <div className="copyright-text">
                            <p>
                                copyright &copy; 2024, All Right Reversed
                                <NavLink to="/" target="_blank">
                                    DhruvTecnical
                                </NavLink>
                            </p>
                        </div>
                        <div className="footer-menu">
                            <ul>
                                <li>
                                    <NavLink to="/" target="_blank">
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="https://www.instagram.com/dhruv.____13?utm_source=qr&igsh=cWwzcnZmdG1tMDQ0" target="_blank">
                                        Social
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" target="_blank">
                                        Source Code
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" target="_blank">
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}