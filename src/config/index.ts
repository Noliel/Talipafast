export const PRODUCT_CATEGORIES = [
    {
        label: "Veggies",
        value: "brands" as const,
        featured: [
            {
                name: 'Petchay',
                href: '#',
                imageSrc: '/nav/brands/petchay.jpg',
            },
            {
                name: 'Papait',
                href: '#',
                imageSrc: '/nav/brands/papait.jpg',
            },
            {
                name: 'Malunnggay',
                href: '#',
                imageSrc: '/nav/brands/malunggay.jpg',
            },
        ]
    },
    {
        label: "Fresh Goodies",
        value: "fresh" as const,
        featured: [
            {
                name: 'Fish',
                href: '#',
                imageSrc: '/nav/fresh/smile.jpg',
            },
            {
                name: 'Pig',
                href: '#',
                imageSrc: '/nav/fresh/pig.jpg',
            },
            {
                name: 'Cow',
                href: '#',
                imageSrc: '/nav/fresh/cow.jpg',
            },
        ]
    }
]