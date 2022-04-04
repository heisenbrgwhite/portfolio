import { Parallax } from 'react-parallax';
import Im3 from "../Images/Im3.png";


const Img3= (props) => (
    <Parallax  className="h-screen flex-col items-center" bgImage= {Im3} strength={200}>
        {props.children}
    </Parallax>
);

export default Img3;