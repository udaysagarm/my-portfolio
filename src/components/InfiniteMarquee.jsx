import React from "react";

const InfiniteMarquee = ({ children }) => {
    return (
        <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap group">
            <div className="flex font-['Syne'] font-bold text-[10vw] uppercase whitespace-nowrap animate-marquee group-hover:paused">
                <span className="block mr-10">{children} </span>
                <span className="block mr-10">{children} </span>
                <span className="block mr-10">{children} </span>
                <span className="block mr-10">{children} </span>
            </div>
            <div className="flex font-['Syne'] font-bold text-[10vw] uppercase whitespace-nowrap animate-marquee group-hover:paused" aria-hidden="true">
                <span className="block mr-10">{children} </span>
                <span className="block mr-10">{children} </span>
                <span className="block mr-10">{children} </span>
                <span className="block mr-10">{children} </span>
            </div>
        </div>
    );
};

export default InfiniteMarquee;
