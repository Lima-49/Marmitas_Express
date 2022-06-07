export default function Order({order}) {

    function remover_elemento(elemento_clicado){
        console.log(elemento_clicado)
        elemento_clicado.closest("tr").remove()
    }
   return (
        <tr className="tr_order">
            <td className="primeria_coluna">{order.clientName}</td>
            <td>{order.order}</td>
            <td>{order.address}</td>
            <td>{order.totalPrice}</td>
            <td><button onClick={(e) => {remover_elemento(e.target)}} className="btn_entregue">Entregue</button></td>
        </tr>
   ) 
}