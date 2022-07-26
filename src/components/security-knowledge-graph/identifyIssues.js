import React from "react";
import f_image from "../../assets/images/Group-393.svg";
import icon1 from '../../assets/images/logo_iso27001.png'
import icon2 from '../../assets/images/logo_soc2.png'
import icon3 from '../../assets/images/logo_cis.png'
import icon4 from '../../assets/images/logo_gdpr.png'

const Issues = () => {
  return (
    <>
      <div className="CSPMServices">
        <div className="block w-full">
          <div className="max-w-1366px mx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32">
              <div></div>
              <div>
                <p className="text-16px text-black new-line leading-6">
                  <strong>
                    Identify security issues generated by cross-cloud
                    interactions
                  </strong>
                  <br />
                  <br />
                  Because each cloud asset is a node in the Security Knowledge
                  Graph™, it’s easy to see how it interacts with
                  other entities. You can move across the graph and identify
                  issues in a much broader, richer context – with no additional
                  effort.
                  <br />
                  <br />
                  You can’t achieve this when dealing with tables because rows
                  and columns hold a limited volume of often disconnected
                  details.
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="block w-full bg-lightGrey">
          <div className="max-w-1366px mx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-32 pt-33px pb-63px">
              <div>
                <img src={f_image} className="xl:-mt-138px w-full" alt="Identify security issues generated by cross-cloud interactions" />
              </div>
              <div>
                <p className="text-16px text-black new-line leading-6">
                  <strong>For example, if you: </strong>
                </p>
                <ul className="ml-15px list-disc list-outside text-16px text-black leading-6">
                  <li className="mt-34px">have an Okta user identity </li>
                  <li className="mt-34px">
                    that has access to an endpoint (laptop) with outdated
                    packages{" "}
                  </li>
                  <li className="mt-34px">
                    which is allowed to push to a Git repository{" "}
                  </li>
                  <li className="mt-34px">
                    and this identity also has access to an AWS production
                    environment
                  </li>
                  <li className="mt-34px">
                    and the associated user identity has direct access to a
                    VM/Amazon instance
                  </li>
                  <li className="mt-34px">
                    and this VM is connected to a production database containing
                    credit cards numbers
                  </li>
                </ul>
                <br />
                <br />
                <p className="text-16px text-blue new-line leading-6">
                  <strong>
                    …<br />
                    then you can clearly see the risk these interactions pose in
                    a visual format (Graph View).
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="block w-full">
          <div className="max-w-1366px mx-auto pl-20px pt-100px pb-100px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-32">
              <div className="flex flex-wrap flex-grow justify-start">
                  <p className="text-16px text-black new-line leading-6">
                      <strong>Improve confidence in your security and compliance posture with real-time evidence</strong>
                  </p>
                  <div className="mt-auto">
                  <div className="flex flex-row justify-start flex-wrap space-x-4">
                                <img src={icon1} className="h-76px" alt="logo_iso27001" />
                                <img src={icon2} className="h-76px" alt="logo_soc2" />
                                <img src={icon3} className="h-76px" alt="logo_cis" />
                                <img src={icon4} className="h-76px" alt="logo_gdpr" />
                            </div>
                  </div>
              </div>
              <div>
                <p className="text-16px text-black new-line leading-6">
                Cloud security can be a jungle. Data gets misplaced, duplicated, mismatched, unsecured, or simply forgotten. So when you lack visibility that goes beyond disparate reports, it’s difficult to gain a strong grasp of your security posture.
                  <br />
                  <br />
                  With Security Knowledge Graph™ at its core, Cyscale helps you easily track security and compliance for your multi-cloud infrastructure.
                  <br />
                  <br />
                  Use an extensive collection of ready-to-use policies and standards with instant access to inline evidence collection for each of them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Issues;
