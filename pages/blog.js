import Layout from '../components/layout'
import Post from '../components/post'

export default function Blog({data}) {
  return (
    <Layout title={'Blog'} >
        <h1>Blog</h1>
        <div className='productos-grid'>
            {data.map( post => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    </Layout>
  )
}

export async function getStaticProps(){
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
    const {data} = await respuesta.json()
    return {
      props: {
        data
      }
    }
}