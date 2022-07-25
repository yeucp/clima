import axios from "axios";
import { createContext, useState } from "react";


const WheatherContext = createContext()

const WheatherProvider = ({children}) => {
    const [search, setSearch] = useState({
        country: '',
        city: ''
    })

    const [result, setResult] = useState({})

    const [loading, setLoading] = useState(false)
    const [noResult, setNoResult] = useState(false)

    const searchData = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const getWheather = async search => {
        setLoading(true)
        setNoResult(false)
        try {
            const {city, country} = search
            const apiId = import.meta.env.VITE_API_KEY
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${apiId}`
            const {data}  = await axios(url)
            const {lon, lat}  = data[0]
            const wheatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiId}`
            const {data: wheather} =  await axios(wheatherUrl)
            setResult(wheather)
            setNoResult('')
        } catch (err) {
            setResult(null)
            setNoResult('No hay resultados')
        } finally{
            setLoading(false)
        }
    }

    return (
        <WheatherContext.Provider 
            value={{
                search,
                result,
                loading,
                noResult,
                searchData,
                getWheather
            }}
        >
            {children}
        </WheatherContext.Provider>
    )
}

export {
    WheatherProvider
}

export default WheatherContext