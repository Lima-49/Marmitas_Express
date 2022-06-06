import Order from "../Order/Order"
import 'C:/Users/Vitor Augusto/Documents/Programas/Faculdade/Desenvolvimento Web/Marmitas_Express/projeto-final/src/components/Orders/index_orders.css'

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
                        orders.map(order => <Order order={order} />)
                    }
                </tbody>
            </table>
        </div>
    )
}