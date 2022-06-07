import { useEffect, useState } from "react"
import Order from "../Order/Order"
import './index_orders.css'

export default function Orders() {
    const orders = [
        {
            "clientName": "Eduardo",
            "order": "Macarrão",
            "address": "Rua rua",
            "totalPrice": "R$ 10.000,00"
        },
        {
            "clientName": "Eduardo",
            "order": "Macarrão",
            "address": "Rua rua",
            "totalPrice": "R$ 10.000,00"
        }
    ]

    const [orders2, setOrders2] = useState([])

    useEffect(() => {
        fetch('http://localhost:2121/api/user')
            .then(response => response.json())
            .then(json => setOrders2(json.data))
    }, [])

    return (
        <div className="body_order">
            <table className="table_order">
                <thead>
                    <tr className="titulos">
                        <th className="primeria_coluna">Nome do usuário</th>
                        <th>Pedido</th>
                        <th>Endereço</th>
                        <th>Total do Pedido</th>
                        <th>Marcar como Entregue</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders2.map(order => <Order order={order} />)
                    }
                </tbody>
            </table>
        </div>
    )
}