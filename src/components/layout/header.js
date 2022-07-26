import React, { useState } from "react";
import TopNav from "./topNav";
import HeaderContext from "./HeaderContext";
import ScrollButton from "../ScrollButton/ScrollButton";
import RemoteWorkBannerImage from "../../assets/images/remote-work-banner-image.svg";
import ComplianceBannerImage from "../../assets/images/compliance-banner-image.svg";
import icon1 from "../../assets/images/logo_iso27001.png";
import icon2 from "../../assets/images/logo_soc2.png";
import icon3 from "../../assets/images/logo_cis.png";
import icon4 from "../../assets/images/logo_gdpr.png";
import icon6 from "../../assets/images/logo_hipaa.png";
import icon8 from "../../assets/images/logo_pci-dss.png";

const Header = ({
  heroBG,
  bannerTitle,
  bannerDescription,
  bannerBtn1Text,
  bannerBtn1Link,
  bannerBtn2Text,
  bannerBtn2Link,
  pageName,
  blogDataTitle,
}) => {
  const [sticker, setSticker] = useState(false);

  const rootClasses = `
    heroBg
    top-0
    w-full
    bg-no-repeat
    relative
    pt-28
    ${pageName}
    ${sticker ? "pt-105px" : ""}
    ${pageName === "CSPMPage" ? "pb-64px" : "pb-20px"}
    ${pageName === "SKGPage" ||
      pageName === "jobDetails" ||
      pageName === "RemoteWork" ||
      pageName === "ComplianceAuditing"
      ? "bg-lightGreyEEE"
      : "bg-cover"
    }`;

  return (
    <HeaderContext.Provider value={{ sticker, setSticker }}>
      <div
        className={rootClasses}
        style={{ backgroundImage: `url(${heroBG})  ` }}
      >
        <TopNav pageName={pageName} />
        <div className="max-w-1366px mx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px ">
          {pageName === "blog-detail" || pageName === "blogs" ? (
            <div className="flex mt-44">
              <div className="mx-auto w-full xl:w-2/4">
                <h1 className="text-34px text-blue leading-10 font-bold otherPages sectionTitle">
                  {blogDataTitle || "Cyscale Blog"}
                </h1>
              </div>
            </div>
          ) : (
            <>
              <div
                className={`flex flex-col lg:flex-row lg:items-center space-y-6 lg:space-y-0 lg:space-x-6`}
              >
                <div
                  className={`w-full lg:w-3/5 ${pageName === "RemoteWork"
                    ? "order-2 lg:order-1"
                    : pageName === "ComplianceAuditing"
                      ? null
                      : "header-padding"
                    }`}
                >
                  <h1
                    className={` text-blue text-38px sm:text-30px md:text-60px leading-40px sm:leading-60px font-semibold sm:mt-20 new-line`}
                  >
                    {pageName === "SKGPage" ? (
                      <span>
                        Security <br />
                        Knowledge Graph™
                      </span>
                    ) : (
                      bannerTitle
                    )}
                  </h1>
                  <div className="mt-24px sm:mt-64px">
                    <p
                      className={`text-black text-16px new-line ${pageName === "RemoteWork" ||
                        pageName === "ComplianceAuditing"
                        ? null
                        : "hidden sm:block"
                        }`}
                    >
                      {pageName === "SKGPage" ? (
                        <span>
                          Many tools promise less data to deal with and stronger
                          aggregation. But even when they deliver, it’s not
                          enough to make your job easier.
                          <br />
                          <br />
                          That’s why we built the Security Knowledge Graph™.
                          Because you deserve a cloud security platform that
                          surfaces crucial issues based on deep understanding of
                          all your interlinked assets.
                          <br />
                          <br />
                          Go far beyond the limits of list-based inventories.
                        </span>
                      ) : (
                        bannerDescription
                      )}
                    </p>
                  </div>
                  <div
                    className={`flex flex-wrap flex-row justify-start space-x-0 md:space-x-4 ${pageName === "ComplianceAuditing"
                      ? "sm:mt-40px"
                      : "mt-40px"
                      }`}
                  >
                    {bannerBtn1Text &&
                      bannerBtn1Link &&
                      (pageName === "jobDetails" ? (
                        <ScrollButton
                          pageName="jobDetails"
                          btnText={bannerBtn1Text}
                          to="applyForm"
                        />
                      ) : (
                        <div className="mt-24px w-full sm:w-auto">
                          {pageName === "ComplianceAuditing" && (
                            <div className="flex flex-row mb-4 items-center justify-between lg:hidden flex-wrap space-y-4 lg:space-y-0 lg:space-x-2">
                              <img src={icon1} className="h-38px mt-20px" alt="logo_iso" />
                              <img src={icon2} className="h-38px" alt="logo_soc" />
                              <img src={icon3} className="h-38px" alt="logo_cis" />
                              <img src={icon4} className="h-38px" alt="logo_gdpr" />
                              <img src={icon6} className="h-38px" alt="logo_hipaa" />
                              <img src={icon8} className="h-38px" alt="logo_pci-dss" />
                            </div>
                          )}
                          <a
                            href={bannerBtn1Link}
                            target="_blank"
                            className="gradientBgBtn w-full sm:min-w-232px block text-16px font-medium rounded text-white uppercase text-center pt-21px pb-21px pl-49px pr-49px hover:no-underline no-underline"
                          >
                            {bannerBtn1Text}
                          </a>
                        </div>
                      ))}
                    {!!pageName && pageName === "HomePage" && (
                      <div className="mt-24px w-full sm:w-auto hidden sm:inline-block">
                        <a
                          href={bannerBtn2Link}
                          className="blackBorder w-full sm:min-w-232px block text-16px font-medium rounded text-black uppercase text-center pt-20px pb-20px pl-49px pr-49px no-underline transition-all duration-300 hover:border-black hover:bg-black hover:text-white blackBorder hover:no-underline"
                        >
                          {bannerBtn2Text}
                        </a>
                      </div>
                    )}
                  </div>
                  <div>
                    {pageName === "HomePage" ? (
                      <p
                        className={`text-14px text-black opacity-50 text-center pt-15px sm:text-left`}
                      >
                        Unlimited free trial for 14 days
                      </p>
                    ) : null}
                  </div>
                </div>
                {pageName === "RemoteWork" && (
                  <div className={`lg:pt-14 order-1 lg:order-2`}>
                    <img
                      src={RemoteWorkBannerImage}
                      alt="Cloud security and visibility for remote work setups"
                      className="lg:mx-auto w-36 lg:w-auto h-auto"
                    />
                  </div>
                )}
                {pageName === "ComplianceAuditing" && (
                  <div className={`lg:pt-14`}>
                    <img
                      src={ComplianceBannerImage}
                      alt="Cloud security and visibility for remote work setups"
                      className="lg:mx-auto w-36 lg:w-auto h-auto hidden lg:block"
                    />
                    <div className="hidden lg:flex flex-row items-center justify-between mt-28 flex-wrap space-y-4 lg:space-y-0 lg:space-x-2">
                      <img src={icon1} className="h-58px" alt="logo_iso" />
                      <img src={icon2} className="h-58px" alt="logo_soc" />
                      <img src={icon3} className="h-58px" alt="logo_cis" />
                      <img src={icon4} className="h-58px" alt="logo_gdpr" />
                      <img src={icon6} className="h-58px" alt="logo_hipaa" />
                      <img src={icon8} className="h-58px" alt="logo_pci-dss" />
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {pageName === "blog-detail" ||
            pageName === "jobDetails" ||
            pageName === "blogs" ||
            pageName === "author-page" ? null : (
            <div className="w-full text-center hidden sm:inline-block relative py-2">
              <ScrollButton to="start" />
            </div>
          )}
        </div>
      </div>
    </HeaderContext.Provider>
  );
};

export default Header;
