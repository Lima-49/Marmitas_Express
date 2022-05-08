import { useContext } from "react"
import { ClientContext } from "../../ClientContext"

export default function Item({ name, descripition, price }) {
    const {clientName, setClientName,
           clientPhone, setClientPhone,
           clientAddress, setClientAddress} = useContext(ClientContext)

    function orderFood() {
        alert(name + ' ' + clientName)
    }
    
    return (
        <>
            <p>{name}</p>
            <p>{price}</p>
            <p>{descripition}</p>
            <button onClick={orderFood}>Pedir</button>
        </>
    )
}