import useWheater from "../hooks/useWheather";
import Form from "./Form";
import Result from "./Result";
import Spinner from "./Spinner";

const WheaterApp = () => {
    const { result, loading, noResult } = useWheater()
    return (
        <>
            <header>
                <h1>Buscador de clima</h1>
            </header>
            <main className="dos-columnas">
                <Form/>
                {
                    loading ? <Spinner/> :
                    result?.name ? <Result/> :
                    noResult && <p>{noResult}</p>
                }
            </main> 
        </>
    );
};

export default WheaterApp;