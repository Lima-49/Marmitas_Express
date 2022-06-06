export default function Order({order}) {
   return (
        <tr className="tr_order">
            <td className="primeria_coluna">{order.clientName}</td>
            <td>{order.order}</td>
            <td>{order.address}</td>
            <td>{order.totalPrice}</td>
            <td><button className="btn_entregue">Entregue</button></td>
        </tr>
   ) 
}