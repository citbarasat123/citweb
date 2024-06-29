const about = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#ff88dd3a] from-3% via-[#ffffff8e] via-60% to-[#4a5bf148] to-100%">
        <div className="pb-[12rem]">
          <div className="bg-[url(/about-head.png)]">
            <div className="container mx-auto">
              <div className="font-nunito text-[2.25rem] text-white py-8">
                About Us ...
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-[5rem]">
            <div className="font-nunito text-center space-y-4">
              <div className="flex justify-center items-center">
                <div className="rounded-full bg-white p-5 drop-shadow-xl">
                  <img
                    src="/Logo-min.png.webp"
                    alt=""
                    className=""
                    width={100}
                  />
                </div>
              </div>
              <div className="text-[2rem] text-[#1536AD] font-bold">
                Central Institute of Technology™ (CIT)
              </div>
              <div className="text-[#1f337b86]">
                Central Institute of Technology (C.I.T.) is a Computer and
                Personality Development Training Institute, which is a gratuity
                to the modern technical world. This institute is mostly popular
                as CIT. Registered under the Public Trust Act under section 60
                and rule 69. Vide registration no. IV-190302517 for the year
                2017. It is approved by Ministry of Human Resource Development
                under Cr. Act .An ISO 9001:2015 Certified Autonomous
                Organization. The journey of gifting a world class institute for
                the next generation was starting from 2009 but works as
                autonomous body from 2017. The object of the institute is to
                establish, develop, maintain, run and to do all kinds of
                education programs, take part in state government and central
                government programs, like NSPC(national skill development
                corporation), WBMDFC, WBBCDF, SUDA, MSME, DIC, STVT, NDLM,
                AICTE, NCT and any other programs. After completing every
                professional course the successful candidates get scope to work
                with our professionals. We provide training in various types of
                professional courses like Web Design, Digital Marketing,
                Accounts and Tally, GST, TDS, IT, ROC, Hardware and Networking ,
                Design and Graphics by experienced professional trainers. We
                also provide services like Tax consultant, Tax file submission,
                Registration of society, Trust, Trademark, Copyright etc.
              </div>
              <div className="flex justify-center items-center py-[5rem]">
                <img src="/about-hero.png" alt="" />
              </div>

              <div className="flex justify-center items-center">
                <img src="/about-mid.png" alt="" />
              </div>

              <div className="flex justify-center items-center">
                <div className="bg-[#ffffff5d] rounded-2xl p-6">
                  <img src="/about-member.png" alt="" />
                </div>
              </div>

              <div className="py-[6rem]">
                <div className="font-nunito font-bold text-[2.25rem] text-[#1536AD]">
                  Our Clients
                </div>
                <div className="font-nunito text-[#1f337b78]">
                  Meet Our Happy Clients
                </div>
                <div className="flex justify-around items-center mt-7">
                  <span>
                    {" "}
                    <img src="/sbi.png" alt="" width={130} />
                  </span>
                  <span>
                    {" "}
                    <img src="/svf.png" alt="" width={100} />
                  </span>
                  <span>
                    {" "}
                    <img src="/lic.png" alt="" width={130} />
                  </span>
                  <span>
                    {" "}
                    <img src="/hero.png" alt="" width={130} />
                  </span>
                </div>
              </div>
              <div className="flex justify-center mt-[6rem]">
                <img src="/google-review.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
