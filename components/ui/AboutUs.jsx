import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="p-8 bg-gray-900 text-white">
      <section className="mb-16">
        <h1 className="text-5xl font-bold mb-6 text-center">ABOUT US</h1>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="flex flex-col items-start gap-4">
            <a href="https://www.instagram.com/acmbitm" target="_blank" rel="noopener noreferrer" className="text-yellow-500">
              @acmbitmesra
            </a>
            <div className="flex gap-4">
              <Image src="/acm_chapter_logo.jpg" alt="ACM Logo" width={50} height={50} className="rounded-full border-2 border-white" />
              <Image src="/bit-logo.png" alt="BIT Logo" width={50} height={50} className="rounded-full border-2 border-white" />
            </div>
          </div>
          <div className="flex justify-end lg:justify-start w-full lg:w-auto">
            <Image src="/path-to-image.jpg" alt="Top Right Image" width={300} height={150} className="rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mt-8">
          <div className="flex justify-center lg:justify-start w-full lg:w-auto order-2 lg:order-1">
            <Image src="/path-to-poster.jpg" alt="DSA Workshop Poster" width={300} height={400} className="rounded-lg" />
          </div>
          <div className="max-w-xl text-left order-1 lg:order-2">
            <h2 className="text-2xl font-semibold mb-4">Subheading</h2>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur. Nulla id nisl pellentesque cum. Eros pellentesque aliquam cursus dignissim.
              Pulvinar et id arcu nibh tristique. Vitae at volutpat scelerisque e a cras sit nibh purus. Diam posuere vulputate eu
              nunc integer. Consequat mattis id eu nam id. Eros sed bibendum diam etiam penatibus amet. Netus elit id nec id non sed in ac.
              Ornare eget sagittis pellentesque id.Lorem ipsum dolor sit amet consectetur. Nulla id nisl pellentesque cum. Eros pellentesque aliquam cursus dignissim.
              Pulvinar et id arcu nibh tristique. Vitae at volutpat scelerisque e a cras sit nibh purus. Diam posuere vulputate eu
              nunc integer. Consequat mattis id eu nam id. Eros sed bibendum diam etiam penatibus amet. Netus elit id nec id non sed in ac.
              Ornare eget sagittis pellentesque id.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <a href="https://www.facebook.com/groups/157383867625779" target="_blank" rel="noopener noreferrer">
            <Image src="/path-to-facebook-icon.png" alt="Facebook" width={30} height={30} />
          </a>
          <a href="https://www.instagram.com/acmbitm" target="_blank" rel="noopener noreferrer">
            <Image src="/path-to-instagram-icon.png" alt="Instagram" width={30} height={30} />
          </a>
          <a href="https://www.linkedin.com/company/acmbitm/" target="_blank" rel="noopener noreferrer">
            <Image src="/path-to-linkedin-icon.png" alt="LinkedIn" width={30} height={30} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
