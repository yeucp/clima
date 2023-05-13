import { useState } from "react";
import useWheater from "../hooks/useWheather";


const Form = () => {
    const [alert, setAlert] = useState('') 
    const {search, searchData, getWheather} = useWheater()
    const {city, country} = search

    const handleSubmit = e => {
        e.preventDefault()
        if(Object.values(search).includes('')){
            setAlert('Todos los campos son obligatorios')
            return
        }
        setAlert('')
        getWheather(search)
    }
    return (
        <div className="contenedor">
            {alert && <p>{alert}</p>}
            <form
                onSubmit={handleSubmit}
            >
                <div className="campo">
                    <label htmlFor="city">Ciudad</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={city}
                        onChange={searchData}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="country">País</label>
                    <select 
                        id="country"  
                        name="country"
                        value={country}
                        onChange={searchData}
                    >
                        <option value="">Seleccione un país</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>
                </div>
                <input type="submit" value="Consultar clima" />
            </form>
        </div>
    );
};

export default Form;