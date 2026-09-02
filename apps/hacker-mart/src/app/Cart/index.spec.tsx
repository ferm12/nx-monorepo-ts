import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cart from './index';

describe('Cart', () => {
    it('renders the Shopping Cart heading', () => {
        render(<Cart />)
        expect(screen.getByTestId('cart-heading')).toBeInTheDocument()
    })

    it('shows the empty cart message', () => {
        render(<Cart />)
        expect(screen.getByTestId('empty-cart-message')).toBeInTheDocument()
    })
})