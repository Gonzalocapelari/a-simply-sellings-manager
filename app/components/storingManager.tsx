export interface productProps {
	id: number;
	p_name: string;
	p_price: number;
	p_bprice: number;
	p_description: string;
	p_stock: number;
}

const STORAGE_KEY = "productData";

export function storingManager(product: productProps): void {
	const savedData = localStorage.getItem(STORAGE_KEY);
    
	let savedCards: productProps[] = [];
	if (savedData) {
		savedCards = JSON.parse(savedData);
	}

	savedCards.push(product);
	localStorage.setItem(STORAGE_KEY, JSON.stringify(savedCards));
}

export function removeProduct(id: number): void {
	const savedData = localStorage.getItem(STORAGE_KEY);
	let savedCards: productProps[] = [];

	if (savedData) {
		savedCards = JSON.parse(savedData);
	}

	const remainingCards = savedCards.filter((product) => product.id !== id);
	localStorage.setItem(STORAGE_KEY, JSON.stringify(remainingCards));
}

export function load_Cards(): productProps[] {
	const savedData = localStorage.getItem(STORAGE_KEY);

	return (savedData) ? JSON.parse(savedData) as productProps[] : []; //simplier as 
}