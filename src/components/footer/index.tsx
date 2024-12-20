import { SFooter } from "./styles";
import Face from "../../assets/face.png"
import Insta from "../../assets/insta.png"
import Linkedin from "../../assets/linkedin.png"
export function Footer() {
    return (
        <SFooter>
            <a href="https://facebook.com" target="_blank">
                <img src={Face} alt="Facebook" />
            </a>
            <img src={Insta} alt="Instagram" />
            <img src={Linkedin} alt="Linkedin" />
        </SFooter>
    )
}