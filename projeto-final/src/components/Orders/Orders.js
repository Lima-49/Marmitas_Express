import Order from "../Order/Order"
import './index.css'

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

    return (
        <table>
            <thead>
                <tr>
                    <th>Nome do usuário</th>
                    <th>Pedido</th>
                    <th>Endereço</th>
                    <th>Total do Pedido</th>
                    <th>Marcar como Entregue</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map(order => <Order order={order} />)
                }
            </tbody>
        </table>
    )
}