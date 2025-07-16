import countryFacts from "../api/CountryData.json"

export const About = () => {
    return (
        <section className="section-about container">
            <h2 className="container-title">
                Here are th intrestng Facts
                <br />
                we're proud of
            </h2>
            <div className="gradient-cards">
                {
                    countryFacts.map((country) => {
                        const {id,countryName,capital,population,interestingFact} = country
                        return (
                            <div className="card" key={id}>
                                <div className="container-card bg-green-box">
                                    <p className="card-title">{countryName}</p>
                                    <p>
                                        <span className="card-description">Capital:</span>
                                        {capital}
                                    </p>
                                    <p>
                                        <span className="card-description">Population:</span>
                                        {population}
                                    </p>
                                    <p>
                                        <span className="card-description">Intesting Facts:</span>
                                        {interestingFact}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}