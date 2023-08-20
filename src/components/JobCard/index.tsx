import React from "react";

import TimeIcon from "../../images/time.svg";
import Image from "next/image";
import { motion } from "framer-motion";

function JobCard() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants}
        transition={{ duration: 1.5, delay: 1 }}
        className="card bg-card2
      rounded-2xl
      h-[232px] w-full lg:w-[381px] mb-[20px] flex flex-col "
      >
        <div
          className="view self-end absolute w-[80px] lg:w-[97px] h-[49px] bg-[#2B2B2B] rounded-[25px]
        
        py-[15px]
        border-[#4E4E4E] border flex justify-center items-center space-x-[4px]
        
        "
        >
          <p className="text-sm font-bold">View</p>
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6667 15.1667H2.33335"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.6667 2.83334L3.33335 12.1667"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.6667 9.68V2.83334H5.82002"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="px-[16px]  py-[18px] ">
          <div className="top mb-[18px] flex space-x-[12px]">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="8" fill="#1F1F1F" />
              <g clip-path="url(#clip0_1_1251)">
                <path
                  d="M37.3616 24.3102C37.3616 23.1624 37.2685 22.3248 37.0669 21.4562H23.96V26.6368H31.6534C31.4984 27.9243 30.6608 29.8632 28.7994 31.1661L28.7733 31.3395L32.9175 34.5499L33.2046 34.5786C35.8414 32.1433 37.3616 28.5602 37.3616 24.3102Z"
                  fill="#FBFBFB"
                />
                <path
                  d="M23.96 37.96C27.7292 37.96 30.8934 36.7191 33.2046 34.5786L28.7994 31.1661C27.6206 31.9882 26.0385 32.5621 23.96 32.5621C20.2684 32.5621 17.1352 30.1269 16.0183 26.761L15.8546 26.7749L11.5454 30.1098L11.489 30.2664C13.7847 34.8267 18.5001 37.96 23.96 37.96Z"
                  fill="#FBFBFB"
                />
                <path
                  d="M16.0183 26.761C15.7235 25.8924 15.553 24.9616 15.553 24C15.553 23.0383 15.7235 22.1076 16.0027 21.239L15.9949 21.054L11.6318 17.6656L11.489 17.7335C10.5429 19.6258 10 21.7509 10 24C10 26.2491 10.5429 28.3741 11.489 30.2664L16.0183 26.761Z"
                  fill="#FBFBFB"
                />
                <path
                  d="M23.96 15.4378C26.5813 15.4378 28.3496 16.5701 29.3578 17.5164L33.2977 13.6696C30.878 11.4205 27.7292 10.04 23.96 10.04C18.5001 10.04 13.7847 13.1732 11.489 17.7335L16.0028 21.239C17.1352 17.8731 20.2684 15.4378 23.96 15.4378Z"
                  fill="#FBFBFB"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1251">
                  <rect
                    width="27.3616"
                    height="28"
                    fill="white"
                    transform="translate(10 10)"
                  />
                </clipPath>
              </defs>
            </svg>

            <div>
              <h3 className="text-lg font-bold">Sr. UX Designer</h3>
              <p className="text-sm font-medium">Google</p>
            </div>
          </div>

          <div className="info mb-[14px]">
            <div className="location grid grid-cols-3 gap-[8px]">
              <p
                className="text-sm flex items-center
              min-h-[28px] tracking-tighter
              
              border-pill-border
              font-medium rounded-[24px] bg-pill border py-[6px] px-[12px]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="mr-[4px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_1263)">
                    <path
                      d="M8.00001 1.33333C5.42001 1.33333 3.33334 3.41999 3.33334 5.99999C3.33334 9.49999 8.00001 14.6667 8.00001 14.6667C8.00001 14.6667 12.6667 9.49999 12.6667 5.99999C12.6667 3.41999 10.58 1.33333 8.00001 1.33333ZM4.66668 5.99999C4.66668 4.15999 6.16001 2.66666 8.00001 2.66666C9.84001 2.66666 11.3333 4.15999 11.3333 5.99999C11.3333 7.91999 9.41334 10.7933 8.00001 12.5867C6.61334 10.8067 4.66668 7.89999 4.66668 5.99999Z"
                      fill="white"
                    />
                    <path
                      d="M8.00001 7.66666C8.92048 7.66666 9.66668 6.92047 9.66668 5.99999C9.66668 5.07952 8.92048 4.33333 8.00001 4.33333C7.07954 4.33333 6.33334 5.07952 6.33334 5.99999C6.33334 6.92047 7.07954 7.66666 8.00001 7.66666Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1263">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                New York
              </p>

              <p
                className="text-sm flex items-center
                tracking-tighter
                h-[28px]
              border-pill-border
              font-medium rounded-[24px] bg-pill border py-[6px] px-[12px]"
              >
                <svg
                  width="16"
                  height="16"
                  className="mr-[4px]"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_1274)">
                    <path
                      d="M7.99331 1.33333C4.31331 1.33333 1.33331 4.31999 1.33331 7.99999C1.33331 11.68 4.31331 14.6667 7.99331 14.6667C11.68 14.6667 14.6666 11.68 14.6666 7.99999C14.6666 4.31999 11.68 1.33333 7.99331 1.33333ZM7.99998 13.3333C5.05331 13.3333 2.66665 10.9467 2.66665 7.99999C2.66665 5.05333 5.05331 2.66666 7.99998 2.66666C10.9466 2.66666 13.3333 5.05333 13.3333 7.99999C13.3333 10.9467 10.9466 13.3333 7.99998 13.3333ZM7.85331 4.66666H7.81331C7.54665 4.66666 7.33331 4.87999 7.33331 5.14666V8.29333C7.33331 8.52666 7.45331 8.74666 7.65998 8.86666L10.4266 10.5267C10.6533 10.66 10.9466 10.5933 11.08 10.3667C11.22 10.14 11.1466 9.83999 10.9133 9.70666L8.33331 8.17333V5.14666C8.33331 4.87999 8.11998 4.66666 7.85331 4.66666Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1274">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Full Time
              </p>
            </div>
          </div>

          <div className="jobdesc">
            <p className="text-sm  tracking-wide">
              UX Designers are the synthesis of design and development. They
              take Google most innovative
            </p>
          </div>
        </div>

        <div
          className="moreinfo flex-1 w-full self-end flex justify-between items-center
        
        rounded-b-2xl
        
        bg-white h-[57px] p-2 text-[#000]"
        >
          <p className="text-sm font-medium flex items-center">
            <Image src={TimeIcon} alt="time icon" className="mr-1" />
            posted 2 days ago
          </p>

          <p className="font-bold text-lg t">$50K/mo</p>
        </div>
      </motion.div>
    </div>
  );
}

export default JobCard;
