const getProducts =async () =>{
    const params=new URLSearchParams(window.location.search);
    const category=params.get('category');

    const {data} = axios.get(`https://dummyjson.com/products/category/${category} `);
    console.log(data); 
    return data;

}

const displayProduct =async () =>{
    const data =await getProduct();
    const result = data.products.map( (product)=>{
     return 
    `<div class=products>
    <img src="${product.thumbnail}" alt="${product.description}"/>  
    <h3> ${product.title}</h3>
    <h2>${product.price}</h2>
    </div>
 `
} ).join( ' ');

 document.querySelector(".product .row").innerHTML=result; 

}
  

displayProduct();