import Image from "next/image";
import IconSuccess from '../../../public/assets/icon-success.svg'
import './styles.css'

export default function SubmitPage() {

    return <>
        <main className="all">
            <div className="content">
                <div>
                    <Image src={IconSuccess} alt="Checkimage"/>
                </div>
                <div className="maintext">
                    <h1>Thanks for<br/> subscribing</h1>
                </div>
                <div className="text">
                    <p>
                     A confirmation email has benn sent to <br/>
                     <b>ash@loremcompany.com</b>. Please open it and click<br/>
                        the buttoninside to confirm your subscription
                 </p>
                </div>
                <div>
                    <button className="btnback">Dismiss message</button>
                </div>
            </div>
            <div className="modal" ></div>
            
        </main>
    </>
}