import React from "react";

const QualityCard = ({ radius, imgradius, QualityImg }) => {
    return (
        <div className="w-[155px] sm:w-[210px] md:w-[240px] lg:w-[270px] h-[250px] sm:h-[280px] md:h-[300px] lg:h-[290px] flex items-center justify-center">

            <div className={`w-full h-[250px] sm:h-[280px] md:h-[300px] lg:h-115 bg-white rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] rounded-bl-[20px] sm:rounded-bl-[25px] p-2 sm:p-3 lg:p-4 shadow-xl ${radius} hover:shadow-2xl transition duration-300`}>

                {/* Image */}
                <div className="overflow-hidden rounded-t-[20px] sm:rounded-t-[25px] lg:rounded-t-[30px] rounded-br-[12px] sm:rounded-br-[15px]">
                    <img
                        src={QualityImg}
                        alt="Quality Assurance"
                        className={`w-full h-[100px] sm:h-[130px] md:h-[160px] lg:h-[190px] object-cover ${imgradius}`}
                    />
                </div>

                {/* Content */}
                <div className="text-center px-1 sm:px-2 lg:px-3 pt-3 sm:pt-4 lg:pt-6">

                    <h2 className="text-[15px] sm:text-[17px] lg:text-[20px] leading-[1.3] font-semibold text-black">
                        Quality
                        <br />
                        Assurance
                    </h2>

                    <p className="mt-2 sm:mt-4 lg:mt-7 text-[10px] sm:text-[12px] lg:text-[15px] leading-[1.5] sm:leading-[1.6] lg:leading-[1.7] text-gray-600">
                        Our stringent quality control measures ensure that only the finest, freshest, and healthiest meats reach our clients.
                    </p>

                </div>

            </div>
        </div>
    );
};

export default QualityCard;