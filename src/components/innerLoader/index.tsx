import React from 'react'
import { motion } from 'framer-motion';
import { slide, opacity, perspective } from './anim';

const anim = (variants:any) => {
    return {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants
    }
}

function InnerLoader({children}:{ children: React.ReactNode }) {
    return (
        <div className='inner bg-[#000]'>
            <motion.div className='slide h-screen w-screen fixed left-0 top-0 bg-red-500 z-10' {...anim(slide)}/>
            <motion.div className='page bg-[#ffffff]' {...anim(perspective)}>
                <motion.div {...anim(opacity)}>
                    {
                        children
                    }
                </motion.div>
            </motion.div>
        </div>
    )
}

export default InnerLoader