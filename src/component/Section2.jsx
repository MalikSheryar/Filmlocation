import React from "react";
import img3 from "../images/img-3.png";
import img4 from "../images/img-4.png";
export default function Section2() {
  return (
    <div>
      <>
        <div className="div-1 w-10/12 m-auto pt-28 flex gap-28 md:gap-14 lg:gap-28 2xl:gap-20 pb-20 flex-wrap md:flex-nowrap">
          {/* left-div   */}
          <div className="div-left">
            <img src={img3} alt=""  className="md:h-96 md:w-96 lg:w-96 lg:h-96 2xl:h-[600px] 2xl:w-auto"/>
          </div>
          {/* Right-div  */}
          <div className="div-right flex flex-col gap-10 md:gap-5 2xl:gap-14">
            {/* Right-div-1  */}
            <div className="div-1 flex justify-center items-center gap-5 ">
              <div className="text font-bold text-lg text-nowrap lg:text-3xl" style={{ color: "#313EF7" }}>
                <p>About US</p>
              </div>
              <div className="img">
                <img src={img4} alt=""/>
              </div>
            </div>
            {/* Right-div-2  */}
            <div
              className="div-2 text-black font-bold 2xl:text-3xl text-sm lg:text-lg"
              style={{ fontFamily: "Poppins" }}
            >
              <p>
                It’s one of the leading online flight <br /> booking platforms
                in the world
              </p>
            </div>
            {/* Righ-div-3  */}
            <div className="div-3">
              <ul className="list-disc custom-list-disc  gap-5 flex flex-col text-sm lg:text-sm">
                <li
                  className="text-black font-medium "
                  style={{ fontFamily: "Poppins" }}
                >
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text
                </li>
                <li
                  className="text-black font-medium"
                  style={{ fontFamily: "Poppins" }}
                >
                  If you are going to use a passage of Lorem Ipsum
                </li>
                <li
                  className="text-black font-medium"
                  style={{ fontFamily: "Poppins" }}
                >
                  Lorem Ipsum is therefore always free from repetition, injected
                  humour, <br />
                  or non-characteristic words etc.
                </li>
                <li
                  className="text-black font-medium"
                  style={{ fontFamily: "Poppins" }}
                >
                  It is a long established fact that a reader will be distracted
                  by the <br />
                  readable content of a page when looking at its layout.
                </li>
              </ul>
            </div>
            {/* Right-div-4  */}
            <div className="div-4 flex justify-center">
            <div class="button bg-[#313EF7] rounded-full w-40 2xl:w-72 " >
             <p class="h-14 text-center text-white font-bold text-lg pt-4" style={{fontFamily:'Poppins'}} >Book Now</p>
            </div>
            </div>

          </div>
        </div>
      </>
    </div>
  );
}
