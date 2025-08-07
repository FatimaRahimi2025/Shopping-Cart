const productList = [
    {
        id:'1',
        title:'ایرپادز',
        price:'199',
        image:'/public/images/erpadiz.jpg'
    },
     {
        id:'2',
        title:'آیپد',
        price:'499',
        image:'/public/images/ipad.jpg'
    },
     {
        id:'3',
        title:'مک بوک',
        price:'1999',
        image:'/public/images/mak book.jpg'
    },
     {
        id:'4',
        title:'آیفون',
        price:'899',
        image:'/public/images/iphone.jpg'
    },
    {
        id:'5',
        title:'هدفون',
        price:'599',
        image:'/public/images/Headfone.jpg'
    }
    ,
    {
        id:'6',
        title:'ماوس',
        price:'299',
        image:'/public/images/mouse.jpg'
    },
    {
        id:"7",
        title:'اپل واچ',
        price:"499",
        image:"/public/images/Clock.jpg"
    },
    {
        id:"8",
        title:"میکروفون",
        price:"699",
        image:"/public/images/Microphone.jpg"
    }
]

function getProductData(id){
  let productData =  productList.find((item) => item.id === id)
  return productData
}

export {productList, getProductData}