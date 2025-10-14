import { IoDiamondOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";

const Phase2 = () => {
  return (
    <div className="container phase2box py-5">
      <div className="row justify-content-center g-4">
        
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          <section className="card w-100 text-center p-3">
            <IoDiamondOutline size={65} className="text-primary mb-3" />
            <h4 className="topichead card-subtitle mb-2">DESIGN</h4>
            <p className="topicpara card-text">
              Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth.
            </p>
            
          </section>
        </div>

        
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          <section className="card w-100 text-center p-3">
            <FaCode size={72} className="text-primary mb-3" />
            <h4 className="topichead card-subtitle mb-2">DEVELOPMENT</h4>
            <p className="topicpara card-text">
              I can code my own designs or even use the customer's design as base. My focus is to generate clean code that's well structured for reliability.
            </p>
          </section>
        </div>

        
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          <section className="card w-100 text-center p-3">
            <HiComputerDesktop size={72} className="text-primary mb-3" />
            <h4 className="topichead card-subtitle mb-2">BASIC SEO</h4>
            <p className="topicpara card-text">
              I can setup your project to use basic SEO principles which will push your project to the first page on search engines and save you ads money.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Phase2;
