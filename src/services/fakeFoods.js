const foods = [
    {
        _id: 1,
        name: "ash",
        price: 2500,
        category: {
            _id: '222c',
            name: 'nahar',
        }
    },
    {
        _id: 2,
        name: "milk sheyk",
        price: 600,
        category: {
            _id: '222c',
            name: 'nahar',
        }
    },
    {
        _id: 3,
        name: "balal",
        price: 998,
        category: {
            _id: '111c',
            name: 'sobhane',
        }
    },
    {
        _id: 4,
        name: "lobia",
        price: 6744,
        category: {
            _id: '111c',
            name: 'sobhane',
        }
    },
    {
        _id: 5,
        name: "chaii",
        price: 2500,
        category: {
            _id: '222c',
            name: 'nahar',
        }
    },
    {
        _id: 6,
        name: "pankeyk",
        price: 500,
        category: {
            _id: '111c',
            name: 'sobhane',
        }
    },
    {
        _id: 7,
        name: "nimro",
        price: 1000,
        category: {
            _id: '333c',
            name: 'sham',
        }
    },
    {
        _id: 8,
        name: "qorme",
        price: 7822,
        category: {
            _id: '222c',
            name: 'nahar',
        }
    },
    {
        _id: 9,
        name: "fesenjon",
        price: 999999,
        category: {
            _id: '333c',
            name: 'sham',
        }
    },
    {
        _id: 10,
        name: "pizza",
        price: 4534,
        category: {
            _id: '333c',
            name: 'sham',
        }
    }
];

export const getFoods = () => {
    return foods;
}