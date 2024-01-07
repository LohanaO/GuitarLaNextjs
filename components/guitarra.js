import Image from "next/future/image"
import Link from "next/link"
import styles from '../styles/guitarras.module.css'
export default function Guitarra({ guitarra }) {
  const { nombre, precio, descripcion, imagen, url } = guitarra
  return (
    <div className={styles.guitarra}>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        alt={`Imagen guitarra ${nombre}`}
        width={600}
        height={400}
      />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion[0].children[0].text}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`/guitarras/${url}`}>
          <a className={styles.enlace}>
            Ver Producto
          </a>
        </Link>

      </div>
    </div>
  )
}
