
const products=[
    {
        id:"1",
        name:"Uñas Gel Basicas",
        price: 15000,
        description:"Uñas de polygel con un diseño basico",
        stock:3,
        category:"basicas",
        img:"https://gelify.cl/cdn/shop/files/NewMarshmallow.webp?v=1700002587"
    },
    {
        id:"2",
        name:"Uñas gel con diseño",
        price: 18000,
        description:"Uñas de gel con diseño basico personalizado",
        stock:2,
        category:"personalizadas",
        img:"https://content.instyle.es/medio/2025/01/22/unas-de-gel_5f59cf74_1080_250122115907_1280x1600.webp"
    },
    {
        id:"3",
        name:"Uñas Gel Diseño Detallado",
        price: 0,
        description:"Uñas gen con un diseño mas avanzado",
        stock:0,
        category:"profesionales",
        img:"https://crisnail.es/wp-content/uploads/2020/08/shutterstock_597854270-2-300x300.jpg"
    },
    {
        id:"4",
        name:"Uñas Gel Diseño Detallado",
        price: 0,
        description:"Uñas gen con un diseño mas avanzado",
        stock:0,
        category:"profesionales",
        img:"https://www.noticiasdemexico.mx/u/fotografias/m/2023/4/18/f850x638-24586_102075_5050.jpg"
    }
]


//promesa

export const getProducts=()=>{
    return new Promise((resolve,reject)=>{
        let error =false

        setTimeout(()=>{
            if(error){
                reject("No hay productos disponibles")
            }else{
                resolve(products)
            }
        },3000)
    })
}