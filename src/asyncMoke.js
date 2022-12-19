export const Product = [
    {
        id: '1',
        title: 'Cubo Rubik 2x2 Cobra Profesional Fibra De Carbono Speed Cube',
        precio: 400,
        img: 'https://http2.mlstatic.com/D_NQ_NP_756416-MLM44473940235_012021-O.webp',
        stock: '10',
        category: 'Principiante'
    },
    {
        id: '2',
        title: 'Cubo Rubik 3x3 Cobra Profesional Fibra De Carbono Speed Cube',
        precio: 500,
        img: 'https://http2.mlstatic.com/D_NQ_NP_899310-MLM51451501709_092022-O.webp',
        stock: '10',
        category: 'Principiante'
    },
    {
        id: '3',
        title: 'Cubo Rubik 4x4 Cobra Profesional Fibra De Carbono Speed Cube',
        precio: 700,
        img: 'https://http2.mlstatic.com/D_NQ_NP_992011-MLM44473755990_012021-O.webp',
        stock: '10',
        category: 'Principiante'
    },
    {
        id: '4',
        title: 'Cubo D-fantix Moyu Cubing Aula Mf6 5x5 Velocidad 5x5x5 Cubo',
        precio: 800,
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSc7P2Q25_81wdmaf9ig-Vp8n--6pRo6ka7dVZ9IHWRBPYQFO-C1y_18maljDOcH9qI0KHsYnjDXi8KW_YzzAEXHvxMzKG4EZo_IFAuzsJgavg-pwU7cdInT8U&usqp=CAE',
        stock: '10',
        category: 'Intermedio'
    },
    {
        id: '5',
        title: 'Cubo D-fantix Moyu Cubing Aula Mf6 6x6 Velocidad 6x6x6 Cubo ',
        precio: 800,
        img: 'https://http2.mlstatic.com/D_NQ_NP_622695-MLM40078996984_122019-O.webp',
        stock: '10',
        category: 'Intermedio'
    },
    {
        id: '6',
        title: 'Cubo D-fantix Moyu Cubing Aula Mf6 7x7 Velocidad 7x7x7 Cubo',
        precio: 800,
        img: 'https://http2.mlstatic.com/D_NQ_NP_895164-CBT49492577218_032022-O.webp',
        stock: '10',
        category: 'Intermedio'
    },
    {
        id: '7',
        title: 'Cubo de Rubik (3x3x3, Megaminx) Base Negra',
        precio: 450,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_734532-MLM48931608275_012022-F.webp',
        stock: '10',
        category: 'Principiante'
    },
    {
        id: '8',
        title: 'Cubo de Rubik (3x3x3, Piramix) Base Negra',
        precio: 450,
        img: 'https://http2.mlstatic.com/D_NQ_NP_855661-MLM48931574693_012022-O.webp',
        stock: '10',
        category: 'Principiante'
    },
    {
        id: '9',
        title: 'Cubo Black Magic 3x3x3 YJ Axis',
        precio: 450,
        img: 'https://m.media-amazon.com/images/I/61GYqfbFkPL._AC_SL1200_.jpg',
        stock: '10',
        category: 'Avanzado'
    },
    {
        id: '10',
        title: 'Cubo 3x3x3 TANCH QIYI, Dissmorfismo Magic',
        precio: 450,
        img: 'https://m.media-amazon.com/images/I/61iF0bFTX3L._AC_SL1200_.jpg',
        stock: '10',
        category: 'Avanzado'
    },
    {
        id: '11',
        title: 'Cubo Rubik LeFun Time Machine Cobra',
        precio: 399,
        img: 'https://cuboscubik.com/image/cache/catalog/A%20Cobra/Time%20machine%20(5)-600x600.png',
        stock: '10',
        category: 'Avanzado'
    },
    {
        id: '12',
        title: 'Cubo Rubik Diansheng Hexagonal Pyraminx 3x3 Base Negra',
        precio: 249,
        img: 'https://cuboscubik.com/image/cache/catalog/DiangSheng/Cubo%20Rubik%20DiangSheng%20Hexagonal%20Negro%20Cubos%20Cubik%20(6)-600x600.png',
        stock: '10',
        category: 'Avanzado'
    },
    {
        id: '13',
        title: 'Cuberspeed Moyu Meilong 8x8 cubo de velocidad moyu 8x8 cubo mágico rompecabezas ',
        precio: 669,
        img: 'https://m.media-amazon.com/images/I/61E++XpKOIL._AC_SL1500_.jpg',
        stock: '10',
        category: 'Intermedio'
    },
    {
        id: '14',
        title: 'Cubo Rubik Moyu Meilong 9x9 Profesional',
        precio: 899,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_817419-MLM48360773345_112021-F.webp',
        stock: '10',
        category: 'Intermedio'
    },
    {
        id: '15',
        title: 'Cubo Rubik 10x10x10 Marca Shengshou',
        precio: 2899,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_610163-MLM48382947818_112021-F.webp',
        stock: '10',
        category: 'Intermedio'
    },
    {
        id: '16',
        title: 'Cubo Rubik Curvycopter Lan Lan Gran Desafio !!!',
        precio: 349,
        img: 'https://www.speedcubesmx.com/wp-content/uploads/2020/03/Curvy.jpg',
        stock: '10',
        category: 'Avanzado'
    }
];

export const getProduct = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Product)
        }, 900);
    })
};

export const getProductByCategory = (filterProduct) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Product.filter(product => product.category === filterProduct))
        }, 900);
    })
};

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Product.find(object => object.id === id))
        }, 900);
    })
};