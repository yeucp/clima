import useWheater from "../hooks/useWheather";

const Result = () => {
    const { result } = useWheater()
    const { name,  main} = result

    const kelvin = 273.15
    return (
        
        <div className="contenedor clima">
            <h2>El clima de {name} es: </h2>
            <p>
                {(main.temp - kelvin).toFixed(2)} <span>&#x2103;</span>
            </p>
            <div className="temp_min_max">
                <p>
                    Mín: {(main.temp_min - kelvin).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p>
                    Máx: {(main.temp_max - kelvin).toFixed(2)} <span>&#x2103;</span>
                </p>
            </div>
        </div>
    );
};

export default Result;