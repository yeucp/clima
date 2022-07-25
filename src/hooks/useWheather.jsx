import { useContext } from "react"
import WheatherContext from "../context/WheatherProvider"

const useWheater = () => {
    return useContext(WheatherContext)
}

export default useWheater