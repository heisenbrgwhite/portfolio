import { FaArrowRight } from 'react-icons/fa';

export default function ContactMe() {
  return (
    <div className=" w-full text-center mt-10 pt-36 pb-10 bg-transparent" id="contactme">
      <h1 className="text-4xl text-white">Interested in working together?</h1>
      <a href="mailto:me.sarkar099@outlook.com">
        <span className="mt-10 inline-block w-auto bg-transparent font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer hover:bg-slate-300 hover:text-black">
          <div className="flex flex-row items-center">
            <span className="mr-3 ">Get in touch</span>
            <FaArrowRight color="inherit" />
          </div>
        </span>
      </a>
    </div>
  );
}