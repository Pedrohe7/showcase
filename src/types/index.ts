export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    imageUrl?: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface CartStore {
    items: CartItem[];
    isOpen: boolean;
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    toggleCart: () => void;
    totalItems: () => number;
    totalPrice: () => number;
}
