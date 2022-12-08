export const Product = [
    {
        id: '1',
        title: 'Cubo Rubik 2x2 Cobra Profesional Fibra De Carbono Speed Cube',
        precio: 400,
        img: 'https://http2.mlstatic.com/D_NQ_NP_756416-MLM44473940235_012021-O.webp',
        stock: '10'
    },
    {
        id: '2',
        title: 'Cubo Rubik 3x3 Cobra Profesional Fibra De Carbono Speed Cube',
        precio: 500,
        img: 'https://http2.mlstatic.com/D_NQ_NP_899310-MLM51451501709_092022-O.webp',
        stock: '10'
    },
    {
        id: '3',
        title: 'Cubo Rubik 4x4 Cobra Profesional Fibra De Carbono Speed Cube',
        precio: 700,
        img: 'https://http2.mlstatic.com/D_NQ_NP_992011-MLM44473755990_012021-O.webp',
        stock: '10'
    },
    {
        id: '4',
        title: 'Cubo D-fantix Moyu Cubing Aula Mf6 5x5 Velocidad 5x5x5 Cubo',
        precio: 800,
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSc7P2Q25_81wdmaf9ig-Vp8n--6pRo6ka7dVZ9IHWRBPYQFO-C1y_18maljDOcH9qI0KHsYnjDXi8KW_YzzAEXHvxMzKG4EZo_IFAuzsJgavg-pwU7cdInT8U&usqp=CAE',
        stock: '10'
    },
    {
        id: '5',
        title: 'Cubo D-fantix Moyu Cubing Aula Mf6 6x6 Velocidad 6x6x6 Cubo ',
        precio: 800,
        img: 'https://http2.mlstatic.com/D_NQ_NP_622695-MLM40078996984_122019-O.webp',
        stock: '10'
    },
    {
        id: '6',
        title: 'Cubo D-fantix Moyu Cubing Aula Mf6 7x7 Velocidad 7x7x7 Cubo',
        precio: 800,
        img: 'https://http2.mlstatic.com/D_NQ_NP_895164-CBT49492577218_032022-O.webp',
        stock: '10'
    }
];

export const getProduct = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Product)
        }, 800);
    })
};

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Product.find(object => object.id === id))
        }, 800);
    })
};