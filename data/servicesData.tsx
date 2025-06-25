import { basePath } from '@/next.config';
import Carousel from 'react-multi-carousel';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const servicesData = [
  {
    id: 1,
    no: '01',
    title: 'Pepperstone Public Site',
    url: 'https://pepperstone.com/',
    text: `Contribute in Pepperstone site migration to Next.js, boosting speed, dependability and optimizing multilingual conten`,
    showCase: (
      <div className="image">
        <div
          className="main"
          style={{
            backgroundImage: `url(${basePath}/img/gigs/pepperstone.jpeg)`,
          }}
        ></div>
      </div>
    ),
    largeTitle: 'Indexing And Search',
    descriptions: (
      <>
        <p>
          In my role as a frontend developer, I played a key role in
          transitioning the Pepperstone public site from Gatsby to Next.js. This
          shift significantly enhanced the site&apos;s dependability,
          accelerated its speed, and implemented an efficient caching mechanism,
          thanks to the capabilities of Next.js. Given the site&apos;s
          multilingual nature and the need for various license-related
          translations, optimization became crucial as it has thousands of
          pages.
        </p>

        <p>
          Beyond that, our efforts were acknowledged by the Publisher team for
          consistently delivering enhancements and improvements.
        </p>
      </>
    ),
  },
  {
    id: 2,
    no: '02',
    title: 'Pepperstone Web Trading',
    url: 'https://registration.pepperstone.com/',
    text: `A trading platform with monitoring tools, KYC: ID verification, user feedback system for an improved user experience and enhanced security.`,
    showCase: (
      <div className="image">
        <div
          className="main"
          style={{
            backgroundImage: `url(${basePath}/img/gigs/pepperstone2.jpeg)`,
          }}
        ></div>
      </div>
    ),
    largeTitle: 'To The Moon!',
    descriptions: (
      <>
        <p>
          The comprehensive revamp and re-architecture of Pepperstone Web
          Trading, elevating its functionality and user experience. By
          implementing robust monitoring mechanisms, we ensured a seamless user
          journey by closely monitoring and collecting client interactions
          within the application. This involved deploying heatmap technology and
          behavior analytic tools to gain valuable insights into user behavior,
          enabling us to make data-driven improvements.
        </p>

        <p>
          To enhance the platform&apos;s security and regulatory compliance, we
          integrated KYC (Know Your Customer) verification through Sumsub, a
          leading identity verification solution. This addition not only
          fortified the platform against potential risks but also streamlined
          the onboarding process for users.
        </p>

        <p>
          Furthermore, recognizing the importance of user feedback, we
          incorporated a system for collecting surveys from our user base. This
          not only provided valuable insights into user satisfaction and
          preferences but also empowered us to address specific pain points and
          refine the platform iteratively.
        </p>
      </>
    ),
  },
  {
    id: 3,
    no: '03',
    title: 'Pepperstone Client Onboarding',
    url: 'https://secure.pepperstone.com/register/',
    text: `A streamlined onboarding process designed for fast account setup, KYC compliance, and secure identity verification, ensuring a smooth start for new clients.`,
    showCase: (
      <div className="image">
        <div
          className="main"
          style={{
            backgroundImage: `url(${basePath}/img/gigs/pepperstone3.png)`,
          }}
        ></div>
      </div>
    ),
    descriptions: (
      <>
        <p>
          The Pepperstone Client Onboarding experience was meticulously designed
          to simplify and accelerate the process of opening a trading account.
          With a strong focus on speed, compliance, and security, this system
          ensures that new users can get started with confidence and minimal
          friction.
        </p>

        <p>
          At the core of the onboarding process is the seamless integration of
          KYC (Know Your Customer) compliance. By leveraging powerful identity
          verification tools like Sumsub, we provided a robust framework for
          securely verifying client identities while maintaining a smooth user
          experience. This helps protect both the platform and its users by
          ensuring regulatory compliance from the outset.
        </p>

        <p>
          From intuitive user flows to optimized form structures, every detail
          of the onboarding journey was crafted with usability in mind. The
          result is a streamlined, secure, and efficient path for new clients to
          enter the Pepperstone ecosystem—ready to trade with confidence.
        </p>
      </>
    ),
  },
  {
    id: 4,
    no: '04',
    title: 'Common Libray: Form Component',
    url: 'https://common-library-demo.web.app/test/validatorExpectedResult',
    text: `Crafted an exclusive NPM package – a highly customizable form component library with robust validation, ensuring seamless and accurate data input.`,
    showCase: (
      <div className="image">
        <div
          className="main"
          style={{
            backgroundImage: `url(${basePath}/img/gigs/cl.png)`,
          }}
        ></div>
      </div>
    ),
    largeTitle: 'Form Wizard',
    descriptions: (
      <>
        <p>
          NPM package tailored exclusively for our client&apos;s unique needs.
          This private library revolves around the creation of dynamic form
          components, enriched with robust validation capabilities. These form
          components not only provide a seamless developer experience but also
          ensure data integrity through meticulous validation handling.
        </p>

        <p>
          One of the standout features of this library lies in its high level of
          customization. Each form component can be tailored to suit specific
          design requirements and user interface preferences. From the layout to
          the styling, every aspect is fine-tuned to align with the
          client&apos;s branding and aesthetic vision. This adaptability ensures
          that the form components seamlessly integrate into diverse projects
          with varying design languages.
        </p>

        <p>
          Moreover, the validation handling mechanism incorporated into the
          library adds an extra layer of reliability to the data input process.
          From simple input checks to complex conditional validations, the
          components ensure that the end-users submit accurate information.
        </p>
      </>
    ),
  },
  {
    id: 5,
    no: '05',
    title: 'Project Gueridon: Smart Table',
    url: '',
    text: `An integrated system, showcasing an interactive and innovative way of restaurant business procedures, an extraordinary dining experience.`,
    showCase: (
      <div className="image">
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          ssr={false}
          infinite={true}
          autoPlay={true}
          keyBoardControl={true}
          customTransition="all 3"
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div
            className="main"
            style={{
              backgroundImage: `url(${basePath}/img/gigs/pgueridon1.jpg)`,
            }}
          ></div>
          <div
            className="main"
            style={{
              backgroundImage: `url(${basePath}/img/gigs/pgueridon2.png)`,
            }}
          ></div>
          <div
            className="main"
            style={{
              backgroundImage: `url(${basePath}/img/gigs/pgueridon3.png)`,
            }}
          ></div>
          <div
            className="main"
            style={{
              backgroundImage: `url(${basePath}/img/gigs/pgueridon4.png)`,
            }}
          ></div>
        </Carousel>
        ;
      </div>
    ),
    largeTitle: 'Form Wizard',
    descriptions: (
      <>
        <p>
          NPM package tailored exclusively for our client&apos;s unique needs.
          This private library revolves around the creation of dynamic form
          components, enriched with robust validation capabilities. These form
          components not only provide a seamless developer experience but also
          ensure data integrity through meticulous validation handling.
        </p>

        <p>
          One of the standout features of this library lies in its high level of
          customization. Each form component can be tailored to suit specific
          design requirements and user interface preferences. From the layout to
          the styling, every aspect is fine-tuned to align with the
          client&apos;s branding and aesthetic vision. This adaptability ensures
          that the form components seamlessly integrate into diverse projects
          with varying design languages.
        </p>

        <p>
          Moreover, the validation handling mechanism incorporated into the
          library adds an extra layer of reliability to the data input process.
          From simple input checks to complex conditional validations, the
          components ensure that the end-users submit accurate information.
        </p>
      </>
    ),
  },
];
