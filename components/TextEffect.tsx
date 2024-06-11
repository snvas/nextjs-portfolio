import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Human Coder',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1500,
        'Front End Developer',
		1500,
        'Product Owner',
		1500,
        'Project Manager',
        1500,
      ]}
      speed={50}
	  className='text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase'
	  repeat={Infinity}
    />
  );
};

export default TextEffect;