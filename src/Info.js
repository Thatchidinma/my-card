import infoImgage from "./img/info-image.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import{faEnvelope} from "@fortawesome/free-solid-svg-icons"


export function Info() {
  return (
    <div className="flex flex-col justify-center">
      <div className=" h-auto">
        <img src={infoImgage} alt="infoImage" className="w-full h-[300px] object-cover "/>
      </div>
      <h1 className="text-center pt-4 pd-2">Ndukuba Chidinma</h1>
      <h3 className="text-center pb-2 text-[#F3BF99]">Frontend developer</h3>
      <a href="https://my-portfolio-thatchidinma.vercel.app/" className="text-center hover:text-lg">ndukubachidinma.website</a>
      <div className=" flex justify-center gap-5 lg:justify-around lg:gap-0 px-16 py-4 align-middle ">
        <a href="mailto:ndukubachidinma@gmail.com?subject=I%20">
          <button className="px-4 lg:px-8 py-2 rounded-lg bg-white text-[#1E1F26] flex ">
            <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8 p-1"/>
            <div className="py-1 m-auto">Email</div>
          </button>
        </a>
        <a href="http://linkedin.com/in/ndukubachidinma" target="blank">
          <button className="px-4 lg:px-8 py-2 rounded-lg bg-[#5093E2] text-white flex">
            <FontAwesomeIcon icon={faLinkedin}  className="w-8 h-8 p-1" />
            <div className="py-1 m-auto">LinkedIn</div>
          </button>
        </a>
      </div>
    </div>
  );
}