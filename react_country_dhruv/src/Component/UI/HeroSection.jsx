import { FaLongArrowAltRight } from "react-icons/fa"
import { Link } from "react-router-dom"

export const HeroSection = () => {
    return (
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore the World, One Country at a time
                    </h1>
                    <p className="paragraph">
                        Discover the History, Culture, and Beauty of every nation. Sort, Search, and filter through countries to find the Details you need.
                    </p>
                    <Link to="/country">
                        <button className="btn btn-darken btn-inline bg-white-box">
                            Start Exploring <FaLongArrowAltRight />
                        </button>
                    </Link>
                </div>
                <div className="hero-image">
                    <img src="/Images/world.png" alt="World Image" className="banner-image" />
                </div>
            </div>
        </main>
    )
}