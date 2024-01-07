import Link from "next/link";
import Layout from "../components/layout";
import Guitarra from "../components/guitarra";
import Post from "./post";
import styles from "../styles/grid.module.css";
import Curso from "../components/curso";

export default function Home({ guitarras, posts, curso }) {
  return (
    <Layout
      title={'Inicio'}
      description={' Blog de música, Venta de Guitarras y más '}
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <div className={styles.grid}>
          {guitarras?.map(guitarra => (
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra.attributes} />
          ))}
        </div>
      </main>
      <Curso curso = {curso.attributes} />
      <section className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={styles.grid}>
          {posts?.map(post => (
            <Post key={post.id}
              post={post} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPost = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`
  const [resGuitarras, resPost, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPost),
    fetch(urlCurso)
  ])
  const [{ data: guitarras }, { data: posts }, {data: curso}] = await Promise.all([
    resGuitarras.json(),
    resPost.json(),
    resCurso.json()

  ])
  return {
    props: {
      guitarras,
      posts,
      curso
    }
  }
}