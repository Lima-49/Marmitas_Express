export default function Item({ name, descripition, price }) {
    return (
        <>
            <p>{name}</p>
            <p>{price}</p>
            <p>{descripition}</p>
            <button>Pedir</button>
        </>
    )
}