import Layout from "../components/layout";
import Post from "./post";


import styles from '../styles/grid.module.css'
export default function Blog({posts}) {
  return (
    <Layout
    title={'Nuestro Blog'}
    description={'Blog de música, venta de guitarras, consejos, GuitarLA'}
    >
      <h1 className="heading">Blog</h1>
      <div className={styles.grid}>
      {posts?.map(post => (
        <Post key={post.id} 
        post={post} />
      ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const {data: posts} = await respuesta.json()
  return{
    props:{
        posts
    }
  }
  
}