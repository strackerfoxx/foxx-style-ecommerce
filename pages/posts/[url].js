import Image from 'next/image'
import Layout from '../../components/layout'

export default function Post({data}) {
    const {titulo, contenido, imagen} = data.attributes
    const image = imagen.data.attributes.url
  return (
    <Layout title={titulo}>
        <div className='contenedor producto full'>
         <Image src={image} alt={`imagen del producto: ${titulo}`} width={500} height={500} />
           <div className="contenido" >
               <h1 className='heading'>{titulo}</h1>
             </div>
         </div>
         <p>{contenido}</p>
    </Layout>
  )
}

export async function getStaticPaths(){
    const respuesta = await fetch(`${process.env.API_URL}/posts`)
    const {data} = await respuesta.json()
    const paths = data?.map( post => ({
        params: {
            url: post.id.toString()
        } 
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {url}}){
    const id = parseInt(url)
    const respuesta = await fetch(`${process.env.API_URL}/posts/${id}?populate=imagen`)
    const {data} = await respuesta.json()
    return {
        props: {
            data
        }
    }
}