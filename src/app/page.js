import Image from "next/image";
import img from "../../public/assets/illustration-desktop.svg";
import iconList from "../../public/assets/icon-list.svg";

export default function Home() {
  return (
    <main className="main">
        <section>
          <article>
            <h1>Stay Updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
          </article>
          <acrticle>
            <ul>
              <li>
                <Image src={iconList} alt="iconlist"/>
                <p>Product discovery and building what matters</p>  
              </li>
              <li>
                <Image src={iconList} alt="iconlist"/>
                <p>Measuring to ensure updates are a success</p>
              </li>
              <li>
                <Image src={iconList} alt="iconlist"/>
                <p>And much more!</p>
              </li>
            </ul>
          </acrticle>
        </section>
        <figure>
          <figcaption>
            <Image src={img} alt="newslatterimage"/>
          </figcaption>
        </figure>
    </main>
  );
}
