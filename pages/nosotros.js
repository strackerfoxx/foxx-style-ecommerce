import Image from 'next/image'
import Layout from "../components/layout"

export default function Nosotros() {
  return (
    <Layout title={'about us'} >
      
      <div className='columnas center'>
        
          <h1>About us</h1>
            <Image src="/img/about.jpeg" width={800} height={170}  alt="logo de la marca" />
       
        <p>
            Mauris scelerisque diam et egestas condimentum. Vivamus auctor massa nec suscipit 
            congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ante 
            ligula, condimentum egestas magna tempus, rhoncus semper ante. Etiam at volutpat 
            sapien. Curabitur mattis purus eget sem convallis varius. Quisque in egestas ipsum.
            Integer nec enim a urna rhoncus tincidunt. Phasellus vehicula egestas ligula, sed 
            scelerisque urna tempor sit amet. Sed sodales, sem nec condimentum condimentum, dui 
            dui fermentum sapien, a ullamcorper mauris tellus in sem. Quisque a pretium felis. 
            <br/>
            Cras tellus enim, facilisis id efficitur et, tempor ut nisl. Ut vestibulum mi vitae 
            dignissim lacinia. Integer dolor mi, interdum id pharetra nec, aliquet eu lorem. 
            Integer mattis, tortor sollicitudin laoreet bibendum, ex ante fringilla erat, eu 
            pellentesque arcu orci a justo. Nulla suscipit ac dui vitae malesuada. Phasellus 
            pellentesque leo ac neque porta congue. Nulla facilisi. Nullam convallis nunc 
            tempor lorem bibendum, nec elementum quam aliquam.
          </p>
      </div>
    </Layout>
    
  )
}
