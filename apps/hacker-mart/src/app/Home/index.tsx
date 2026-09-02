import { products } from '../data/products'
import { item } from '../types'

interface Props {
    addToCart: (item: item) => void;
    cart: item[];
}

export default function Home(props: Props) {
    const {addToCart, cart} = props

    return (
        <div>
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
                        products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>
                                    <button 
                                        onClick={() => addToCart(product)}
                                        disabled={cart.some((item: item) => item.id === product.id)}
                                    >
                                        Add to cart
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}