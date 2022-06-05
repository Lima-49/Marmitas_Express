export default function Order({order}) {
   return (
        <tr>
            <td>{order.clientName}</td>
            <td>{order.order}</td>
            <td>{order.address}</td>
            <td>{order.totalPrice}</td>
            <td><button>Entregue</button></td>
        </tr>
   ) 
}