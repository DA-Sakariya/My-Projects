import Headers from "../UI/Headers"
import Footer from "../UI/Footer"
import { Outlet } from "react-router-dom"

export const AppLayout = () => {
    return (
        <div className="page-wrapper">
            <Headers />
            <main className="main-content">
                <Outlet /> {/* or your page components */}
            </main>
            <Footer />
        </div>
    )
}