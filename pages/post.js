import styles from '../styles/blog.module.css'
import Link from 'next/link'
import { formatearFecha } from '../utils/helpers'
import Image from 'next/future/image'

export default function Post({ post }) {
    const { titulo, contenido, imagen, url, publishedAt } = post.attributes
    return (
        <article className={styles.post}>
           <Image src={imagen.data.attributes.url}
             alt={`Imagen blog ${titulo}`}
             width={600} height={400} />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{contenido[0].children[0].text}</p>
                <Link href={`/blog/${url}`}>
                    <a
                        className={styles.enlace}>Leer Post
                    </a>
                </Link>
            </div>
        </article>
    )
}
