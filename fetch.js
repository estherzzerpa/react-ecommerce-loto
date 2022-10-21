    //Fecth para detalle de producto
    
    
    
    // const getItem = async ()=>{

    //   try{
    //     const respuesta = await fetch(`https://fakestoreapi.com/products/${IdProducto}`)
    //     const data = await respuesta.json();
    //     const stockData = Math.floor(Math.random()  * 100)

    //     setProducto({...data, stockData});
    //     setStock(stockData)
      
    //   }
    //   catch{
    //     console.error("Algo salio mal")
    //   }
    //   finally{
    //     setLoading(false)
    //   }
    // }

    // getItem()
 

    // FETCH para visualizar todos los productos


// const URL_BASE = "https://fakestoreapi.com/products"
// const URL_CATEGORY = `https://fakestoreapi.com/products/category/${IdCategoria}`


  // fetch( `${resultado}`)
  //   .then((res) => res.json()
  //   )
  //   .then((data) =>{
           
  //     setListProduct(data)

  //  }
  //   )
  //   .catch((error) => {
  //     setError(true)
  //     console.log(error)
  //   })
  //     .finally(()=>{
  //       setLoading(false)
  //     });


// practica de spread


// const arrayObj = [{id:1, nombre:"esther"}, {id:2, nombre:"inge"}, {id:3, nombre:"vanessa"}]

  // const map = arrayObj.map((amiga)=>{
  //      return {
  //       ...amiga, edad:23
  //      }
  // })

  // const other = [...map, {id:4, name:"jeremy", edad:24}]
  // let prod = other.find((prod)=>{
  //   return prod.nombre
  // })

  // if(prod){
  //   console.log(prod.nombre);
  // }

  // console.log(map)
  // console.log(arrayObj)
  // console.log(other)