import Link from 'next/link'
import Image from 'next/image'

export default function Post({post}) {
    const {titulo, contenido, imagen, updatedAt} = post.attributes
    const { id } = post
    const imgM = imagen.data.attributes.formats.medium.url
  return (
    <div>
        <div className='producto'>
      <div className='contenido'>
        <h3>{titulo}</h3>
        <Image src={imgM} alt={`imagen del producto: ${titulo}`} width={230} height={10} />
        <p className='descripcion' >{contenido}</p>
        <Link className='enlace' href={`/posts/${id}`}>Ver producto</Link>
      </div>
    </div>
    </div>
  )
}
