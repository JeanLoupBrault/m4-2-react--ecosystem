export const sellers = {
    alice: {
        id: 'alice',
        storeName: "Alice's Fruit Store",
        description: "Fruits n' stuff",
        avatarSrc: '/assets/alice.jpg',
    },
    bob: {
        id: 'bob',
        storeName: 'Fruit Bazaar, by Bob',
        description: 'Imported fruit from across the world!',
        avatarSrc: '/assets/bob.jpg',
    },
};

export default {
    currentSellers: [sellers.alice, sellers.bob],
    items:
        [
            {
                id: 'a',
                name: 'Avocado',
                latinName: 'Persea americana',
                description:
                    "An oddly creamy fruit. Surprisingly high in protein. Has a big pit in the middle.  You're not supposed to eat the rind. Millenials like to put it on toast, for reasons not entirely understood.",
                imageSrc: '/assets/avocado.jpg',
                countryOfOrigin: 'Mexico',
                sellerId: 'alice',
                price: 8,
                quantity: 2,
            },
            {
                id: 'b',
                name: 'Banana',
                latinName: 'Musa acuminata',
                description: 'A mushy, mealy fruit 🤢',
                imageSrc: '/assets/banana.jpg',
                countryOfOrigin: 'Ecuador',
                sellerId: 'bob',
                price: 5,
                quantity: 500,
            },
            {
                id: 'c',
                name: 'Cherry',
                latinName: 'Prunus avium',
                description: "You're a big winner if you get 3 of these on a slot machine!",
                imageSrc: '/assets/cherry.jpg',
                countryOfOrigin: 'Turkey',
                sellerId: 'bob',
                price: 3.49,
                quantity: 0,
            },
            {
                id: 'd',
                name: 'Lime',
                latinName: 'Citrus aurantiifolia',
                description: 'The most underrated citrus.',
                imageSrc: '/assets/lime.jpg',
                countryOfOrigin: 'Spain',
                sellerId: 'alice',
                price: 0.99,
                quantity: 5,
            },
            {
                id: 'e',
                name: 'Orange',
                latinName: 'Citrus × sinensis',
                description: 'Frequently turned into juice.',
                imageSrc: '/assets/orange.jpg',
                countryOfOrigin: 'United States',
                sellerId: 'alice',
                price: 1.49,
                quantity: 28,
            },
            {
                id: 'f',
                name: 'Blue Lemon',
                latinName: 'Citrus limon caeruleum',
                description:
                    'Fantastical, mythological item. Exists only in other universes',
                imageSrc: '/assets/blue-lemon.jpg',
                countryOfOrigin: 'Valhalla',
                sellerId: 'bob',
                price: 400,
                quantity: 0,
            },
        ]

};
