import React from 'react';
import { Link } from 'gatsby';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
} from "react-share";
import { FaLinkedin, FaTwitter, FaFacebookSquare } from "react-icons/fa";
const PageLeft = ({ data, feature }) => {
    const shareUrl = 'https://cyscale.com/';
    return (
        <Link to={'/blog/' + data.permalink}>
            <div className='w-full  md:w-195px lg:w-282px xl:w-376px mb-16px shadow-md'>
                <div
                    className='w-full customimgmain customimgmain bg-no-repeat h-200px bg-grey3 bg-contain bg-center'
                    style={{ backgroundImage: 'url(' + data.featuredimage.publicURL + ')' }}
                    alt={data.title}
                />
                <div className='bg-white p-15px'>
                    <h3 className='text-13px '>Category: {data.category}</h3>
                    <div>

                        <h3 title={data.title} className='text-blue text-24px leading-24px mt-11px'>

                            {feature === true ? data.title : data.title?.slice(0, 28) + "..."}


                        </h3>
                        <h5 className='text-13px mt-11px'>{data.date?.split('T')?.[0]}</h5>
                        <h6 className='text-13px mt-11px'> by:{data.authors}</h6>
                        <p title={data.description} className='text-16px leading-24px mt-8px'>
                            {feature === true ? data.description : data.description?.slice(0, 120) + "..."}
                        </p>
                    </div>
                    <div className='flex justify-between align-content-center mt-13px mb-7px'>
                        <div className="w-80px flex justify-between">
                            < LinkedinShareButton url={shareUrl} quote={'Like and Share'}>
                                < FaLinkedin size={20} />
                            </ LinkedinShareButton>

                            < TwitterShareButton url={shareUrl} quote={'Like and Share'}>
                                < FaTwitter size={20} />
                            </ TwitterShareButton>

                            < FacebookShareButton url={shareUrl} quote={'Like and Share'}>
                                < FaFacebookSquare size={20} />
                            </ FacebookShareButton>
                        </div>
                        <span className='text-12px text-blue font-bold '>read</span>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PageLeft;
