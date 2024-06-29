const Footer = () => {
  return (
    <>
      <div className="bg-[url('/footer-bg.png')] min-h-full bg-no-repeat bg-cover bg-top bg-blend-overlay text-white mt-[-7rem] ">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-[8rem] py-7">
            <div className="flex justify-center items-center gap-3">
              <div className="">
                <img src="/ei_like.png" alt="" />
              </div>
              <div className="font-noto text-[2.25rem] bg-gradient-to-br from-[#fd99e1b4] to-white 100% text-transparent bg-clip-text">
                Build Your Career with Us (CIT)
              </div>
            </div>

            <div className="">
              <button className="flex items-center text-white gap-2 bg-bg-gra-light rounded-full py-2 px-4 font-nunito drop-shadow-[0px_4px_21px_#0011AC] animate-pulse">
                <span>
                  <img src="/bxs_phone-call.png" alt="" />
                </span>
                Helpline @ 9614142256
              </button>
            </div>
          </div>

          <div className="mx-[2rem] ">
            <div className="flex justify-between py-9">
              <div className="space-y-3 w-full">
                <img src="/logo.png" alt="" />
                <div className="font-nunito text-[.75rem] text-white w-[60%]">
                  CIT is a Computer & Personality Development Training Institute
                  in Kolkata, India approved by MSME, Which is a gratuity to the
                  modern technical world.{" "}
                  <span className="text-[#D653B1]">Learn More …</span>
                </div>
                <div className="flex gap-3">
                  <img src="/iso-1.png" alt="" />
                  <img src="/Group.png" alt="" />
                  <img src="/bi_cloud-check.png" alt="" />
                </div>
              </div>
              <div className="flex justify-between w-full">
                <div className="space-y-3">
                  <div className="font-noto font-bold">
                    Top Trending Courses
                  </div>
                  <div className="text-[.75rem] ms-5 space-y-1">
                    <div className="list-item">Full Stack on Web</div>
                    <div className="list-item">Tally with GST</div>
                    <div className="list-item">Digital Marketing</div>
                    <div className="list-item">Graphics Design</div>
                    <div className="list-item">Web Design & Development</div>
                    <div className="list-item">Spoken English</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="font-noto font-bold">Usefull Links</div>
                  <div className="text-[.75rem] ms-5 space-y-1">
                    <div className="list-item">Latest Updates</div>
                    <div className="list-item">Placements</div>
                    <div className="list-item">Upcoming Batch</div>
                    <div className="list-item">Crash Courses</div>
                    <div className="list-item">Full time Courses</div>
                    <div className="list-item">About Franchise</div>
                    <div className="list-item">Certificate Verify</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="font-noto font-bold">Contact Us</div>
                  <div className="text-[.75rem] ms-5 space-y-1">
                    <div className="list-item">Dumdum Branch</div>
                    <div className="list-item">Garia Branch</div>
                    <div className="list-item">Barasat Branch</div>
                    <div className="list-item">Baduria Branch</div>
                    <div className="list-item">Matia Branch</div>
                    <div className="list-item">Kholapota Branch</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between py-4">
              <div className="font-nunito text-[.75rem]">
                Copyright @2023 CIT. All Rights Reserved | Design & Developed by
                SpectraWeb
              </div>
              <div className="font-nunito text-[.75rem]">
                Privacy Policy | Terms of Services
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
