import Order from "../Order/Order"

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