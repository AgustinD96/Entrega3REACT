const products = [
    {id:1, 
     name:"Porta Maceta", 
     description:"Porta maceta colgante para decorar los rincones de tu hogar", 
     img:"img/IMG_20230716_183352530.jpg", 
     price:1200, 
     stock:8, 
     category:"macetas"
    },
    {id:2, 
     name:"Porta Maceta", 
     description:"Porta maceta colgante para decorar los rincones de tu hogar", 
     img:"img/IMG_20230716_183223496.jpg", 
     price:1200, 
     stock:8, 
     category:"macetas"
    },
    {id:3, 
     name:"Cuencos", 
     description:"Cuencos personalizados", 
     img:"img/IMG_20230716_180911154.jpg", 
     price:2000, 
     stock:10, 
     category:"cuencos"
    },
    {id:4, 
     name:"Cuenco acuarela", 
     description:"Cuencos personalizados", 
     img:"img/IMG_20230716_183044888.jpg", 
     price:1800, 
     stock:10, 
     category:"cuencos"
    },
    {id:5, 
     name:"Tazas Chinas", 
     description:"Combo de 3 tazas chinas personalizadas", 
     img:"img/IMG_20230716_175653190.jpg",
     price:2600,
     stock:6,
     category:"tazas"
    },
    {id:6,
     name:"Tazas",
     description:"Juego de taza y plato",
     img:"img/IMG_20230716_181620123.jpg",
     price:1000,
     stock:6,
     category:"tazas"
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products);
        }, 300);
    });
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products.find (prod => prod.id === productId))
        }, 300)
    })
}