import React from "react";

const Showcase = () => {
  return (
    <div className="bg-[url('https://media.istockphoto.com/id/1446199740/photo/path-through-a-sunlit-forest.jpg?b=1&s=612x612&w=0&k=20&c=NpE36tHehURP087LKhhNauryOkJuCNYTZZEBqPiN90o=')] h-[90vh] md:h-screen bg-no-repeat w-[100%] bg-cover bg-center flex items-center relative before:w-full before:h-full before:bg-black/60 before:absolute before:top-0 before:left-0 px-4 md:px-0">
      <div className="relative z-[6] container mx-auto">
        <h2 className="md:max-w-[50%] text-5xl text-white tracking-wide font-medium">The Art snd Science of Wood mastery.</h2>
        <p  className="md:max-w-[70%] text-2xl mt-[70px] text-white tracking-wide font-semibold">Nigeria’s leading timber and wood industry since 2003</p>
      </div>
    </div>
  );
};

export default Showcase;
