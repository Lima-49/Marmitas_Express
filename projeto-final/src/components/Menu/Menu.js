import Item from "../Item/Item";

export default function Menu() {
    return (
        <ul>
            <li><Item name="Feijoada e Frango" descripition="Marmita com feijoada e frango." price="R$ 14,00" /></li>
            <li><Item name="Macarronada com Frando" descripition="Marmita de macarronada com frango." price="R$ 15,00" /></li>
            <li><Item name="Beef" descripition="Marmita com beef grande." price="R$ 14,00" /></li>
        </ul>
    )
}