export default function Order({order}) {
   return (
        <tr className="tr_order">
            <td className="primeria_coluna">{order.name}</td>
            <td>{order.pedidos}</td>
            <td>{order.adress}</td>
            <td>{order.price}</td>
            <td><button className="btn_entregue">Entregue</button></td>
        </tr>
   ) 
}