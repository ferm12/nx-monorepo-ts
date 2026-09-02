import { item } from '../types'

interface Props {
    cart: item[];
    removeFromCart: (item: item) => void;
}

export default function Cart(props: Props) {
    const {cart, removeFromCart} = props;

    return  (
        <>
        {cart.length > 0 ? (
            <>
            <div>
                <h1>Shopping Cart</h1>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>description</th>
                        <th>action</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        cart.map(el => (
                            <tr key={el.id}>
                                <td>{el.id}</td>
                                <td>{el.name}</td>
                                <td>{el.price}</td>
                                <td>{el.description}</td>
                                <td>
                                    <button onClick={() => removeFromCart(el)}>Remove</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </>
        ) : (
            <div>
                <h1>No items in cart</h1>
            </div>
        )
        }
    </>
    )
}
