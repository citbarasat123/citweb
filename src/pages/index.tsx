import Coursecard from "@/components/Coursecard";
import Logoslide from "@/components/Logoslide";

const index = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#ff88dd3a] from-3% via-[#ffffff8e] via-60% to-[#4a5bf148] to-100%">
        <div className="container mx-auto">
          {/* hero Section */}

          <div className=" lg:flex justify-around py-[2rem] text-center lg:text-left ">
            {/* hero heading */}

            <div className="font-noto space-y-[3rem]">
              <div className="text-[3.5rem] font-bold bg-bg-gra-light text-transparent bg-clip-text">
                <div className="">#1 Computer Education</div>
                <div className="">By CIT</div>
              </div>

              <div className="text-[#1536AD] space-y-[.06rem]">
                <div className="">
                  CIT is one of the Best Computer Training Institute in Kolkata,
                  India
                </div>
                <div className="">
                  <span className="border-b-1 border-[#1536AD]">
                    Available Courses are :
                  </span>{" "}
                  <span className="font-bold">Full Stack on WEB</span>, Data
                  Science with AI & ML, Digital Marketing
                </div>
                <div className="">
                  Cyber Security,{" "}
                  <span className="font-bold">
                    Tax and Accounts, Graphics Design & Animation, Spoken
                    English
                  </span>
                </div>
              </div>

              <div className="flex gap-5 font-nunito ">
                <button className=" bg-bg-gra-light flex items-center gap-2 text-white rounded-full px-7 py-2">
                  <span>Course Details </span>
                  <span>
                    <img src="/bi_arrow-down-circle-fill.png" alt="" />
                  </span>
                </button>

                <button
                  type="button"
                  className="rounded-full bg-bg-gra-light p-[.08rem] animate-pulse "
                >
                  <div className="rounded-full bg-white flex items-center justify-center w-full h-full px-6 gap-2">
                    <span className="bg-bg-gra-deep text-transparent bg-clip-text font-semibold">
                      Helpline @ 9614142256{" "}
                    </span>
                    <span>
                      <img src="/el_phone-alt.png" alt="" />
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* hero heading */}

            {/* hero illustration */}

            <div className="">
              <img src="/ilustration.png" />
            </div>

            {/* hero illustration */}
          </div>

          {/* hero Section */}

          {/* why chose cit */}
          <div className="bg-[url(/Rectangle.svg)] bg-no-repeat bg-cover rounded-[4.75rem]  bg-center flex justify-center items-center flex-col py-20 drop-shadow-2xl pt-5">
            <div className="bg-[#ffffff13] rounded-full px-44 py-4 font-noto text-[2.187rem] text-[#DBDFFD] flex justify-center drop-shadow-lg">
              <div className="">
                Why you <span className="font-bold border-b-1">Choose CIT</span>{" "}
                ?
              </div>
            </div>
            <div className="font-nunito text-[#9BA3EB] mt-3">
              “Empowering Futures: Where Opportunities Meet Ambition.”
            </div>

            {/* vectors */}
            <div className="flex justify-around mt-7">
              <div className="text-center w-full">
                <div className="flex justify-center">
                  <img src="/la_chalkboard-teacher.png" alt="" />
                </div>
                <div className="font-noto text-[1.5rem] font-bold text-[#DBDFFD]">
                  Professional Teacher
                </div>
                <div className="font-nunito text-[#9BA3EB]">
                  Our Teachers & Trainers are really good at their work
                </div>
              </div>

              <div className="text-center w-full">
                <div className="flex justify-center ">
                  <img src="/Vector.png" alt="" />
                </div>
                <div className="font-noto text-[1.5rem] font-bold text-[#DBDFFD]">
                  7 day Open
                </div>
                <div className="font-nunito text-[#9BA3EB]">
                  Mon-Sun with Flexible Time Facility
                </div>
              </div>

              <div className="text-center w-full">
                <div className="flex justify-center ">
                  <img src="/bxs_book-reader.png" alt="" />
                </div>
                <div className="font-noto text-[1.5rem] font-bold text-[#DBDFFD]">
                  Online & Classroom
                </div>
                <div className="font-nunito text-[#9BA3EB]">
                  ebooks available according to courses
                </div>
              </div>

              <div className="text-center w-full">
                <div className="flex justify-center ">
                  <img src="/bx_support.png" alt="" />
                </div>
                <div className="font-noto text-[1.5rem] font-bold text-[#DBDFFD]">
                  Lifetime Support
                </div>
                <div className="font-nunito text-[#9BA3EB]">
                  Lifetime Online Support only for Our Students
                </div>
              </div>
            </div>
            {/* vectors */}

            <div className="flex gap-16 mt-9">
              <div className="bg-[#ffffff13] rounded-full px-12 py-3 font-nunito text-[1.5rem] text-[#ffffff] flex justify-center items-center gap-3 drop-shadow-lg">
                <span>
                  <img src="/majesticons_rupee-circle.png" alt="" />
                </span>
                <span>Most Affordable Fees</span>
              </div>

              <div className="bg-[#ffffff13] rounded-full px-12 py-3 font-nunito text-[1.5rem] text-[#ffffff] flex justify-center items-center gap-3 drop-shadow-lg">
                <span>
                  <img src="/akar-icons_google-contained-fill.png" alt="" />
                </span>
                <span>Top Rating on Google</span>
              </div>
            </div>
          </div>
          {/* why chose cit */}

          {/* CARD sECTION */}
          <div className="py-[7rem] flex justify-center gap-[6rem]">
            {/* left */}
            <div className="flex justify-end w-full">
              <div className="font-nunito text-right space-y-3">
                <button className="bg-bg-gra-light text-white rounded-full font-bold px-5 py-1  text-[1.5rem]">
                  Trending Courses
                </button>
                <div className="">
                  <div className="text-[#3F4B79] text-[2.25rem] font-bold ">
                    Don’t know where to{" "}
                  </div>
                  <div className="text-[#3F4B79] text-[2.25rem] font-bold ">
                    start from?
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="w-[80%] text-black ">
                    Check out all of our Top Trending courses and start your
                    growth journey with us.
                  </div>
                </div>
                <button className="bg-bg-gra-light text-white rounded-lg px-5 py-1">
                  view all course
                </button>
              </div>
            </div>
            {/* left */}

            {/* right */}
            <div className="space-y-5 w-full">
              <div className="flex gap-5 ">
                <Coursecard />
                <Coursecard />
              </div>
              <div className="flex gap-5">
                <Coursecard />
                <Coursecard />
              </div>
            </div>
            {/* right */}
          </div>
          {/* CARD sECTION */}
        </div>
        {/* sliding section */}
        <div className="bg-bg-gra-light py-8">
          <div className="container mx-auto">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-4">
              <div className="lg:w-[70%] w-[45%] lg:ms-7 mt-4 lg:py-3  ">
                <Logoslide />
              </div>
              <div className="text-white space-y-2 font-nunito ">
                <div className="font-bold text-[2.25rem] text-center lg:text-end  ">
                  Job / Placements
                </div>
                <div className="text-[.75rem] text-center lg:text-end tracking-[.1rem]">
                  ( OUR STUDENTS WORK HERE )
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sliding section */}

        {/* review section */}

        <div className="bg-gra-dark pb-[7rem]">
          <div className="container mx-auto">
            <div className="flex justify-between items-center gap-[6rem] py-[6rem]">
              <div className="flex justify-end w-full ">
                <div className="text-right space-y-8">
                  <div className="flex justify-end">
                    <div className="font-noto text-[2.25rem] font-semibold text-[#ABB5FF] w-[70%] ">
                      See for yourself what other think About Us
                    </div>
                  </div>
                  <div className="flex justify-end ">
                    <div className="font-nunito text-[1rem] font-semibold text-[#9BA3EB] w-[40%] ">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.{" "}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-[#ffffff13] rounded-full px-12 py-3 font-nunito text-[1.5rem] text-[#ffffff] flex justify-center items-center gap-3 drop-shadow-xl">
                      <span>
                        <img
                          src="/akar-icons_google-contained-fill.png"
                          alt=""
                        />
                      </span>
                      <span>Top Rating on Google</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full space-y-6">
                <div className="w-full">
                  <img src="/testimonial-1.png" alt="" />
                </div>
                <div className="ms-[6rem]">
                  <img src="/testimonial-2.png" alt="" />
                </div>
                <div className="">
                  <img src="/testimonial-3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* review section */}
      </div>
    </>
  );
};

export default index;
