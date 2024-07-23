import React from "react";

const Map = () => {
  return (
    <div className="bg-[#004a61] py-7 px-4 md:px-0">
      <div className="container mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-5">
        <div>
          <h2 className="text-white text-3xl font-semibold my-6 text-center md:text-left">
            The Evolution of Nigeria's Timber Industry
          </h2>
          <p className="tracking-wide text-white mb-5">
            <span className="text-white font-bold uppercase tracking-wide">
              The Beginning:
            </span>{" "}
            The timber industry in Nigeria began to take shape in the early 20th
            century, around the 1920s, with the advent of colonial forestry
            practices. Initially focused on providing raw materials for local
            use and export, the industry laid its foundation through the
            establishment of various sawmills and logging operations.
          </p>
          <p className="tracking-wide text-white mb-5">
            <span className="text-white font-bold uppercase tracking-wide">
              Growth in Western Nigeria:
            </span>{" "}
            By the 1950s and 1960s, the timber industry began to gain
            significant traction, particularly in the western part of Nigeria.
            The region's abundant forests, especially in states like Ogun,
            Ekiti, and Ondo, became central to the industry due to their rich
            timber resources. Ogun State, in particular, emerged as a dominant
            force in the timber trade, thanks to its extensive forest cover and
            strategic location.
          </p>
          <p className="tracking-wide text-white mb-5">
            <span className="text-white font-bold uppercase tracking-wide">
              Challenges Faced:
            </span>{" "}
            Despite its growth, the timber industry in Western Nigeria faced
            several challenges. Deforestation, illegal logging, and inadequate
            infrastructure hindered sustainable development. Environmental
            degradation and the lack of modern technology led to inefficiencies
            and waste, impacting both the quality of timber and the local
            ecosystem.
          </p>
          <p className="tracking-wide text-white mb-5">
            <span className="text-white font-bold uppercase tracking-wide">
              Bestwoodmaster Tech's Role:
            </span>{" "}
            Bestwoodmaster Tech aims to address these issues through innovation
            and sustainability. By integrating advanced technology and
            sustainable forest management practices, Bestwoodmaster Tech is
            working to reduce environmental impact and improve efficiency in
            timber processing. Initiatives such as reforestation programs,
            better logging techniques, and the use of eco-friendly materials are
            at the core of their strategy. These efforts not only address
            environmental concerns but also create incentives for workers
            through improved job security and skill development.
          </p>
          <p className="tracking-wide text-white mb-5">
            Furthermore, by collaborating with the government on infrastructure
            projects and sustainability initiatives, Bestwoodmaster Tech is
            contributing to regional development, providing economic benefits to
            local communities, and supporting the growth of the timber industry
            in Western Nigeria.
          </p>
        </div>
        <div>
          <img
            src="/images/map.png"
            alt="map_img"
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Map;
