import Image from "next/image";
import iconList from "../../public/assets/icon-list.svg";
import Form from "./Form/form";

export default function Home() {
  return (
    <main className="main">
      <section>
        <div className="firtsText">
          <h1>Stay Updated!</h1>
          <p>
            Join 60,000+ product managers receiving monthly
            <br /> updates on:
          </p>
        </div>
        <div className="list">
          <ul>
            <li>
              <Image src={iconList} alt="iconlist" />
              <p>Product discovery and building what matters</p>
            </li>
            <li>
              <Image src={iconList} alt="iconlist" />
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li>
              <Image src={iconList} alt="iconlist" />
              <p>And much more!</p>
            </li>
          </ul>
        </div>
        <section>
          <Form />
        </section>
      </section>
      <div>
        <div className="img"></div>
      </div>
    </main>
  );
}
