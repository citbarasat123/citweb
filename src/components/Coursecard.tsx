const Coursecard = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-[#ff88dd59] from-3% via-[#ffffff8e] via-60% to-[#4a5bf148] to-100% shadow-[4px_4px_15px_0_#f6cbf7] rounded-lg p-4 flex gap-4 group hover:bg-bg-gra-light hover:shadow-[4px_4px_14px_0_#7587ff] ">
        <div className=" space-y-4">
          <div className="text-[.625rem] font-nunito text-[#646FD4] group-hover:er:text-[#DBDFFD]">
            Web, AI, ML, Coding, Data Science
          </div>
          <div className="font-noto font-bold text-[1.5rem] text-[#0011AC] group-hover:text-white">
            IT Programming
          </div>
          <div className="">
            <button className="group-hover:bg-bg-gra-light bg-[#646FD4] text-white rounded-lg px-5 py-1">
              view course
            </button>
          </div>
        </div>
        <div className="flex items-end">
          <img src="/fluent_desktop-edit-16-regular.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Coursecard;
