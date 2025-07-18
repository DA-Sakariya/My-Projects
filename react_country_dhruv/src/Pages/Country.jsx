import { useState, useTransition, useEffect } from "react"
import { getCountryData } from "../api/PostApi";
import { Loader } from "../Component/UI/Loader";
import { CountryCard } from "../Component/UI/CountryCard";
import { SearchFilter } from "../Component/UI/SearchFilter";

export const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([])

    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("all")

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData()
            // console.log(res);
            setCountries(res.data)
        })
    }, [])

    if (isPending) return <Loader />

    const searchCountry = (country) => {
        if (search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase())
        }
        return country
    }

    const filterRegion = (country) => {
        if (filter === "all") return country;
        return country.region === filter
    }


    const filterCountries = countries.filter(
        (country) => searchCountry(country) && filterRegion(country)
    )


    return <section className="country-section">
        <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries} />
        <ul className="grid grid-four-cols">
            {
                filterCountries.map((curCountry, index) => {
                    return <CountryCard country={curCountry} key={index} />
                })
            }
        </ul>
    </section>
}