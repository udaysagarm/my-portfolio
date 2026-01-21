import React from 'react';


const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050505]">
            {/* Noise Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

            {/* Gradient Mesh / Orbs */}
            <div
                className="absolute top-[-20%] left-[-20%] w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[150px] animate-float-1"
            />

            <div
                className="absolute bottom-[-20%] right-[-20%] w-[900px] h-[900px] bg-purple-600/20 rounded-full blur-[150px] animate-float-2"
            />

            <div
                className="absolute top-[30%] left-[30%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-float-3"
            />
        </div>
    );
};

export default Background;
