import gigalogo from "../../assets/giga-logo.png";

const BlogsCard = () => {
  return (
    <>
      <div className="bg-blogCardBG w-96 rounded mb-8">
        <div className="p-3">
          <div>
            <img src={gigalogo} alt="" className="block h-60 w-full" />
          </div>
          <span className="text-techColor ml-5 p-1 bg-topicBG rounded-lg inline-block my-1.5">
            Technology
          </span>
          <p className="text-lg mb-1.5 font-medium">
            The impact of Technology on the Workplace: How Technology is
            Changing
          </p>
          <div className="flex flex-row gap-3 items-center text-sx">
            <span>
              <img
                src={gigalogo}
                alt=""
                className="w-9 text-blogUserName rounded-full"
              />
            </span>
            <span className="text-blogUserName">Tracey Wilson</span>
            <span className="text-blogUserName">Auguest 20, 2022</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsCard;
