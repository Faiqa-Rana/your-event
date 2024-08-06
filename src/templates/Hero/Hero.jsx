import { Container } from '../../components';
import { FaLocationDot } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section className="relative flex px-8 text-white">
      <img
        src="/hero-bg.jpg"
        alt="hero-bg"
        className="h-[750px] w-full rounded-lg object-cover"
      />
      <div className="absolute px-10 left-0 right-0 top-1/2 -translate-y-1/2">
        <Container>
          <div className="w-1/2">
            <h1 className="text-6xl font-semibold leading-tight">
              Outside Lands Music and Arts Festival
            </h1>

            <div className="mt-8 flex items-center gap-8">
              <div className="flex w-max flex-col items-center rounded-md bg-white p-2 px-6 text-black">
                <span className="border-b-2 border-black text-3xl font-semibold">
                  21
                </span>
                <span>OTC</span>
                <span>2024</span>
              </div>
              <h3 className="w-2/5 text-3xl leading-snug">
                Amazing line-up world tour 2024
              </h3>
            </div>

            <div className="text-mg mt-32 flex w-2/4 items-start gap-2">
              <FaLocationDot color="#f6699e" size={20} />
              <p>Brigton Hall, 2715 Ash Dr. San Jose, South Dakota 83475</p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
