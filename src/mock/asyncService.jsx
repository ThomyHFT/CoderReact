
const products=[
    {
        id:"1",
        name:"",
        price: 0,
        description:"",
        stock:0,
        category:"",
        img:""
    },
    {
        id:"2",
        name:"",
        price: 0,
        description:"",
        stock:0,
        category:"",
        img:""
    },
    {
        id:"3",
        name:"",
        price: 0,
        description:"",
        stock:0,
        category:"",
        img:""
    },
    {
        id:"4",
        name:"",
        price: 0,
        description:"",
        stock:0,
        category:"",
        img:""
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