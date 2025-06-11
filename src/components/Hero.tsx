import downloadcv from "/cv.svg"
import cvpdf from "/cv.pdf"
import github from "/github.svg"
import linkedin from "/linkedin.svg"
import hero from "/hero.png"

function Hero() {
  return (
    <>
    <div>
      <div className="hero-content h-auto mt-30 container mx-auto px-4 flex flex-col md:flex-row items-center cursor-default">
        <div className="hero-left p-4 ">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Hi, I'm Dheeraj — Data Analyst
          </h1>
          <p className="mt-4 text-lg md:text-xl text-center max-w-2xl">
            I turn raw data into powerful insights that drive smarter business
            decisions. Passionate about data storytelling, predictive analytics,
            and making sense of complexity with clarity.
          </p>
          
          <div className="flex flex-row space-x-10 mt-6 align-middle items-center max-w-2xl">
            <div className="px-24">
              {/* <a
            href="#projects"
            className="px-6 py-3 bg-gray-300 text-white rounded-lg hover:bg-blue-400 transition font-bold"
          >
            Explore My Work
          </a> */}
            </div>
            <a href={cvpdf} title="save icons" download>
              <img src={downloadcv} className="h-10 w-10" />
            </a>
            <a href="https://github.com/dvcodebase">
              <img src={github} className="w-10 h-10" />
            </a>
            <a href="https://www.linkedin.com/in/-dheeraj-verma/">
              <img src={linkedin} className="w-10 h-10" />
            </a>
          </div>
        </div>
        <div className="hero-right flex flex-col items-center justify-center p-4">
          <div>
            <img src={hero} className="h-100 w-100" />
          </div>
          
        </div>
      </div>
      </div>
    </>
  );
}

export default Hero;
