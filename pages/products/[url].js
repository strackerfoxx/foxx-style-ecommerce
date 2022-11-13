import Layout from '../../components/layout'
import Image from 'next/image'
import { useState } from 'react'

export default function Producto({data, agregarCarrito}) {
    const { nombre, descripcion, precio, stock, imagen } = data?.attributes
    const { id } = data
    const image = imagen.data.attributes.url
    const [cantidad, setCantidad] = useState(0)

    function handleSubmit(e){
        e.preventDefault()
        
        if(cantidad < 1){
            alert('La cantidad minima es 1')
            return
        }

        const producto = {
            id,
            nombre, 
            precio, 
            stock, 
            imagen: image,
            cantidad
        }

        agregarCarrito(producto)
    }

    const arreglo = []
    for (let index = 1; index <= stock; index++) {
      arreglo.push(index);
    }

  return (
    <Layout title={nombre}>
         <div className='contenedor producto full'>
         <Image src={image} alt={`imagen del producto: ${nombre}`} width={500} height={500} />
           <div className="contenido" >
               <h1 className='heading'>{nombre}</h1>
               <p>Unidades en existencia:<p className='precio'> {stock}</p></p>
                 <p>Unidades en precio:<p className='precio'> {precio}</p></p>    
                 <a href="/" className='enlace'>Comprar ahora</a>  

                 <form onSubmit={handleSubmit} className='formulario' >
                    
                    <select onChange={ e => setCantidad(+e.target.value) } id='cantidad' >
                        <option value='0'>--Selecciona la Cantidad--</option>
                        {arreglo.map( i => (
                            <option value={i}>{i}</option>
                        ))}
                    </select> 
                    <input type='submit' value='Añadir al carrito' />
                 </form>
             </div>
         </div>
           <p>{descripcion}</p>
     </Layout>
  )
}

export async function getStaticPaths(){
  const respuesta = await fetch(`${process.env.API_URL}/products`)
  const {data} = await respuesta.json()
  
  const paths = data?.map( producto => ({
      params: {
        url: producto.id.toString()
      }
  }) )
  return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({params: {url}}){
  const id = parseInt(url)
  const respuesta = await fetch(`${process.env.API_URL}/products/${id}?populate=imagen`)
  const {data} = await respuesta.json()
  return {
      props: {
          data
      }
    }
}