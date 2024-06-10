import React from "react";

import Slidbar from "../../components/Slidebar/Slidbar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex h-[350px] sm:h-[450px] md:h-[550px]  rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Slidbar />
      <MessageContainer />
    </div>
  );
};

export default Home;
