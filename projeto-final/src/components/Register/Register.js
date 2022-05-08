import { useContext } from "react"
import { ClientContext } from "../../ClientContext"

export function Register() {
    const {clientName, setClientName,
           clientPhone, setClientPhone,
           clientAddress, setClientAddress} = useContext(ClientContext)

    return (
        <form action="/">
            <label>Nome:</label>
            <input required type="text" value={clientName} onChange={e => setClientName(e.target.value)}/>
            <label>Telefone:</label>
            <input required type="text" value={clientPhone} onChange={e => setClientPhone(e.target.value)}/>
            <label>Endereço:</label>
            <input required type="text" value={clientAddress} onChange={e => setClientAddress(e.target.value)}/>

            <input type="submit" value="Eviar" />
        </form>
    )
}