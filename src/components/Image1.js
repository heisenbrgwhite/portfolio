
import { Parallax } from 'react-parallax';
import Im1 from "../Images/Im1.jpg";


const ImgOne= (props) => (
    <Parallax  className="h-screen w-full" bgImage= {Im1} strength={500}>
        {props.children}
    </Parallax>
);

export default ImgOne;