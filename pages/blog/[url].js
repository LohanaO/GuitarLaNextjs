import Layout from "../../components/layout"
import { formatearFecha } from "../../utils/helpers"
import styles from '../../styles/blog.module.css'
import Image from "next/future/image"

export default function Post({ post }) {
  const { titulo, contenido, imagen, publishedAt } = post[0].attributes
    const texto = contenido.map((parrafo) =>{
      return  parrafo.children.map((p)=>{
        return p.text
      })
    })
   
  
  return (
    <Layout title={titulo}>
   <article className={`${styles.post} ${styles['mt-3']}`}>
            <Image src={imagen.data.attributes.url}
             alt={`Imagen blog ${titulo}`}
             width={1000} height={400} />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.texto}>{texto}</p>
            </div>
        </article>
    </Layout>
  )
}

export async function getServerSideProps({ query: { url } }) {
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    const { data: post } = await respuesta.json()
    return {
        props: {
            post
        }
    }
}