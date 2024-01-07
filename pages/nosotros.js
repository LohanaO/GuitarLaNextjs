import Image from "next/future/image"
import Layout from "../components/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
    return (
        <Layout
            title={'Nosotros'}
            description={'Sobre nosotros - GuitarLa, Tienda de música'}
        >
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>
                <div className={styles.contenido}>
                    <Image 
                    src="/img/nosotros.jpg" 
                    width={1000} height={800} 
                    alt="Imagen sobre nosotros"/>

                    <div>
                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sed molestie ante, ut viverra dui. Praesent elit eros, bibendum eu iaculis eu, efficitur egestas nibh. Nullam a mattis nisl, vitae interdum odio. Vivamus nec nulla eleifend, ullamcorper lacus in, posuere orci. </p>

                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sed molestie ante, ut viverra dui. Praesent elit eros, bibendum eu iaculis eu, efficitur egestas nibh. Nullam a mattis nisl, vitae interdum odio. Vivamus nec nulla eleifend, ullamcorper lacus in, posuere orci. Pellentesque placerat, nibh quis euismod fermentum, neque lectus consequat enim, ut aliquam nibh ante ac neque.</p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
