export const SearchFilter = ({ search, setSearch, filter, setFilter, setCountries, countries }) => {
    const handleInputChange = (event) => {
        event.preventDefault()
        setSearch(event.target.value)
    }
    const handleSelectChange = (event) => {
        event.preventDefault()
        setFilter(event.target.value)

    }

    const sortCountries = (value)=>{
        const sortCountry = [...countries].sort((a,b)=>{
            return value === "asc" ? a.name.common.localeCompare(b.name.common) : b.name.common.localeCompare(a.name.common);
        })
        setCountries(sortCountry)
    }
    return (
        <section className="section-searchFilter container">
            <input type="text" placeholder="Search Country" value={search} onChange={handleInputChange} />

            <div>
                <button onClick={()=> sortCountries("asc")}>Asc</button>
            </div>
            <div>
                <button onClick={()=>sortCountries("des")}>Desc</button>
            </div>

            <div>
                <select value={filter} className="select-section" onChange={handleSelectChange}>
                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    )
}