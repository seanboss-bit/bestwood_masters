import React from "react";

const About = () => {
  return (
    <div id="about" className="px-4 md:px-0">
      <div className="container mx-auto py-4 my-8">
        <h3 className="text-center font-semibold text-3xl md:text-5xl mb-3 uppercase tracking-wide">
          About us
        </h3>
        <div className="md:grid md:grid-cols-2 gap-6 items-center flex flex-col-reverse">
          <div>
            <h2 className="my-3 uppercase text-2xl md:text-4xl font-semibold text-[#378c35]">
              Building Value in All Dimensions
            </h2>
            <p>
              Welcome to Bestwoodmaster Tech, where innovation meets
              sustainability in Nigeria's timber industry. We are a
              forward-thinking company dedicated to revolutionizing the log and
              wood processing sector through advanced technology, sustainable
              practices, and community engagement.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/1450078/pexels-photo-1450078.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="#wood_pic"
              className="w-fit md:h-[500px] rounded-lg border-[10px] object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-9">
          <div className="shadow-2xl p-5 rounded-xl h-fit">
            <h4 className="text-2xl font-semibold text-[#378c35] mb-3">
              Our mission
            </h4>
            <p className="text-[14px] tracking-wide">
              At Bestwoodmaster Tech, our mission is to lead the way in
              sustainable forest management, ensuring that our operations
              benefit both the environment and the local communities. We strive
              to enhance the timber industry's efficiency, reduce environmental
              impact, and promote economic growth through responsible practices.
            </p>
          </div>

          <div className="shadow-2xl p-5 rounded-xl">
            <h4 className="text-2xl font-semibold text-[#378c35] mb-3">
              Join us
            </h4>
            <p className="text-[14px] tracking-wide">
              At Bestwoodmaster Tech, we are always looking for passionate
              individuals and partners who share our vision of a sustainable and
              innovative timber industry. Whether you are a potential employee,
              a business partner, or a community member, we welcome you to join
              us in our journey towards a greener and more prosperous future.
            </p>
          </div>
        </div>
        <div className="my-6 rounded-2xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1179237/pexels-photo-1179237.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="#"
            className="w-full h-[300px] object-cover rou"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-9">
          <div className="shadow-2xl p-5 rounded-xl">
            <h4 className="text-2xl capitalize font-semibold text-[#378c35] mb-3">
              what we do
            </h4>
            <div className="text-[14px]">
              <ul>
                <li>
                  <span className="font-semibold mb-3">Licensed Logging:</span>{" "}
                  We prioritize environmentally responsible logging by ensuring
                  all activities are properly licensed and compliant with
                  regulations.
                </li>
                <li>
                  <span className="font-semibold mb-3">
                    Advanced Wood Processing:
                  </span>{" "}
                  Our state-of-the-art facilities and innovative technologies
                  maximize resource use and minimize waste.
                </li>
                <li>
                  <span className="font-semibold mb-3">
                    Environmental Conservation:
                  </span>{" "}
                  Through reforestation programs and conservation efforts, we
                  work to maintain the ecological balance and protect our
                  forests.
                </li>
                <li>
                  <span className="font-semibold mb-3">
                    Community Development
                  </span>{" "}
                  We engage with local communities to promote sustainable
                  forestry practices and invest in their development through
                  various projects.
                </li>
                <li>
                  <span className="font-semibold mb-3">
                    Economic Contribution:
                  </span>{" "}
                  By collaborating with the government and supporting local
                  businesses, we drive regional economic growth and create job
                  opportunities.
                </li>
              </ul>
            </div>
          </div>
          <div className="shadow-2xl p-5 rounded-xl">
            <h4 className="text-2xl capitalize font-semibold text-[#378c35] mb-3">
              our values
            </h4>
            <div className="text-[14px]">
              <ul>
                <li>
                  <span className="font-semibold mb-3">Sustainability: </span>{" "}
                  We are committed to preserving our natural resources for
                  future generations.
                </li>
                <li>
                  <span className="font-semibold mb-3">Innovation:</span> We
                  continuously seek new technologies and methods to improve our
                  operations and reduce our environmental footprint.
                </li>
                <li>
                  <span className="font-semibold mb-3">Community:</span> We
                  believe in giving back to the communities we operate in,
                  ensuring our growth benefits all stakeholders.
                </li>
                <li>
                  <span className="font-semibold mb-3">Transparency:</span> We
                  uphold the highest standards of corporate governance and
                  maintain transparency in all our dealings.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
