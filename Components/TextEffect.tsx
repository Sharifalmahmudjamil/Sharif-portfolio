import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Junior Frontend Developer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        ' Specialization in the MERN Stack',
        1500,
        'Programmer',
        1500,
        
      ]}
     
      speed={50}
      className='text-[2rem] md:text-[3rem] text-teal-300 font-bold'
      repeat={Infinity}
    />
  );
};
export default TextEffect ;