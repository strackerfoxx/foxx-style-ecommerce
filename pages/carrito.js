import Layout from "../components/layout";

export default function Carrito({carrito}) {
  return (
    <Layout title="carrito">
        {carrito.length === 0 ? 'esta kk no tiene nada' : (
          carrito?.map( producto => (
            <div key={producto.id}>
                <p>{producto.nombre}</p>
            </div>
          ))
        )}
    </Layout>
  )
}
