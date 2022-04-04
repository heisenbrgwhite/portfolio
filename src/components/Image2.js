import { Parallax } from 'react-parallax';
import Im2 from "../Images/Im2.jpg";


const ImgTwo= (props) => (
    <Parallax  className="h-screen" bgImage= {Im2} strength={500}>
        {props.children}
    </Parallax>
);

export default ImgTwo;