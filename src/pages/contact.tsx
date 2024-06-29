import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";

const contact = () => {
  return (
    <>
      <div className="">
        <div className="bg-[url(/helpdesk.jpg)] bg-opacity-55 backdrop-blur-3xl bg-cover bg-center bg-no-repeat">
          <div className="bg-bg-gra-light opacity-75 min-h-[500px]">
            <div className="container mx-auto">
              <div className="font-noto font-bold text-white text-[3rem] pt-[5rem]">
                Support
              </div>
              <div className="text-white font-nunito w-[50%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                quas quis natus fugiat molestias dignissimos optio? Provident in
                quam asperiores alias, magnam reprehenderit pariatur odit.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#ff88dd3a] from-3% via-[#ffffff8e] via-60% to-[#4a5bf148] to-100% ">
          <div className="container mx-auto">
            <div className="flex justify-between mt-[-12rem]">
              <div className="font-nunito relative">
                <Card className=" max-w-[350px] drop-shadow-xl pt-12">
                  <CardHeader className="text-[1.75rem] font-bold bg-bg-gra-deep text-transparent bg-clip-text px-4">
                    Sales
                  </CardHeader>
                  <CardBody className="text-[#3b297cc4] px-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam, nobis. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Vel ipsum quam modi similique voluptatum.
                  </CardBody>
                  <CardFooter className="bg-bg-gra-light bg-opacity-25 text-white space-x-2  px-4">
                    <span>Contact Us </span>

                    <span>
                      <ArrowRight size={16} />
                    </span>
                  </CardFooter>
                </Card>
                <div className="bg-bg-gra-deep rounded-lg drop-shadow-2xl p-3 w-fit ms-8 absolute -top-5">
                  <img src="/bxs_phone-call.png" alt="" />
                </div>
              </div>
              <div className="font-nunito relative">
                <Card className=" max-w-[350px] drop-shadow-xl pt-12">
                  <CardHeader className="text-[1.75rem] font-bold bg-bg-gra-deep text-transparent bg-clip-text px-4">
                    Media Quaries
                  </CardHeader>
                  <CardBody className="text-[#3b297cc4] px-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam, nobis. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Vel ipsum quam modi similique voluptatum.
                  </CardBody>
                  <CardFooter className="bg-bg-gra-light bg-opacity-25 text-white space-x-2 px-4 ">
                    <span>Contact Us </span>

                    <span>
                      <ArrowRight size={16} />
                    </span>
                  </CardFooter>
                </Card>
                <div className="bg-bg-gra-deep rounded-lg drop-shadow-2xl p-3 w-fit ms-8 absolute -top-5">
                  <img src="/bxs_phone-call.png" alt="" />
                </div>
              </div>
              <div className="font-nunito relative">
                <Card className=" max-w-[350px] drop-shadow-xl pt-12">
                  <CardHeader className="text-[1.75rem] font-bold bg-bg-gra-deep text-transparent bg-clip-text px-4">
                    Technical Support
                  </CardHeader>
                  <CardBody className="text-[#3b297cc4] px-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam, nobis. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Vel ipsum quam modi similique voluptatum.
                  </CardBody>
                  <CardFooter className="bg-bg-gra-light bg-opacity-25 text-white space-x-2 px-4 ">
                    <span>Contact Us </span>

                    <span>
                      <ArrowRight size={16} />
                    </span>
                  </CardFooter>
                </Card>
                <div className="bg-bg-gra-deep rounded-lg drop-shadow-2xl p-3 w-fit ms-8 absolute -top-5">
                  <img src="/bxs_phone-call.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#ff88dd3a] from-3% via-[#ffffff8e] via-60% to-[#4a5bf148] to-100% py-[6rem] pb-[12rem]">
          <div className="container mx-auto">
            <div className="space-y-6">
              <div className="font-noto text-[2.25rem] bg-bg-gra-light text-transparent bg-clip-text font-bold">
                Our Branches
              </div>
              <div className="w-[50%] text-[#3b297cc4] font-nunito">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                maiores ad doloribus odit. Nobis ab voluptatum hic veniam
                accusantium mollitia nulla dolore aspernatur earum. At? Lorem
                ipsum dolor sit amet.
              </div>
              <div className="flex justify-between items-center text-center font-nunito">
                <div className="">
                  <div className="font-bold font-noto text-xl bg-bg-gra-deep text-transparent bg-clip-text">
                    DumDum
                  </div>
                  <div className=" text-[#2f2275da]">DumDum Nager Bazar</div>
                </div>
                <div className="">
                  <div className="font-bold font-noto text-xl bg-bg-gra-deep text-transparent bg-clip-text">
                    Garia
                  </div>
                  <div className=" text-[#2f2275da]">
                    Kabi Najrul Metro Station
                  </div>
                </div>
                <div className="">
                  <div className="font-bold font-noto text-xl bg-bg-gra-deep text-transparent bg-clip-text">
                    Barasat
                  </div>
                  <div className=" text-[#2f2275da]">Barasat Pioneer park</div>
                </div>
                <div className="">
                  <div className="font-bold font-noto text-xl bg-bg-gra-deep text-transparent bg-clip-text">
                    Baduria
                  </div>
                  <div className=" text-[#2f2275da]">baduria Petrol Pump</div>
                </div>
                <div className="">
                  <div className="font-bold font-noto text-xl bg-bg-gra-deep text-transparent bg-clip-text">
                    Matia
                  </div>
                  <div className=" text-[#2f2275da]">Matia thana</div>
                </div>
                <div className="">
                  <div className="font-bold font-noto text-xl bg-bg-gra-deep text-transparent bg-clip-text">
                    Kholapata
                  </div>
                  <div className=" text-[#2f2275da]">Kholapata More</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center py-[6rem]">
              <img src="/fqas.png" alt="" />
            </div>

            <div className="flex justify-center items-center drop-shadow-xl">
              <img src="/form.png" alt="" className="rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
