import React from "react";

const History = () => {
  return (
    <div className="bg-[#005e74] px-4 md:px-0">
      <div className="container mx-auto py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-[#378c35] p-5 text-white rounded-2xl shadow-2xl">
            <h3 className="text-xl font-bold uppercase tracking-wide mb-3">
              history
            </h3>
            <p className="text-[14px]">
              Bestwoodmaster Tech started as a personal business known as
              Kudirat and Co Sawmills in 1986. Over the years, we have
              transformed into Bestwoodmaster Tech Ltd, partnering with industry
              experts to expand and improve our operations.
            </p>
          </div>
          <div className="bg-[#378c35] p-5 text-white rounded-2xl shadow-2xl">
            <h3 className="text-xl font-bold uppercase tracking-wide mb-3">
              Team
            </h3>
            <p className="text-[14px]">
              Our team is composed of 206 dedicated personnel working across the
              nation in various departments. Each member plays a vital role in
              ensuring the adequate supply of logs and the efficient performance
              of our major functions.
            </p>
          </div>
          <div className="bg-[#378c35] p-5 text-white rounded-2xl shadow-2xl">
            <h3 className="text-xl font-bold uppercase tracking-wide mb-3">
              Services
            </h3>
            <p className="text-[14px]">
              We provide businesses in the industry with high-quality timber
              products. We offer cutting (sawing) services, transforming logs
              from the forest into specific dimensions such as 2x2, 4x4, 2x4,
              etc. We assist businesses in ensuring reliable supply chains for
              their products, utilizing paperwork to cover and streamline the
              movement of goods
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
