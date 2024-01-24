'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from './anim';

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"]

export default function Preloader() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({width: 0, height:0});

    useEffect( () => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
    }, [])

    useEffect( () => {
        if(index == words.length - 1) return;
        setTimeout( () => {
            setIndex(index + 1)
        }, index == 0 ? 1000 : 150)
    }, [index])

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
        }
    }

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className="h-screen w-screen flex items-center justify-center fixed z-[99] bg-gray-800">
            {dimension.width > 0 && 
            <>
                <motion.p className='flex text-[#ffffff] text-[42px] leading-10 items-center absolute z-10' variants={opacity} initial="initial" animate="enter"><span className='block w-3 h-3 text-[#ffffff] rounded-[50%] bg-[#ffffff] mr-3'></span>{ words[index] }</motion.p>
                <svg style={{height: "calc(100% + 300px)"}} className="absolute top-0 w-[100%]">
                    <motion.path className="bg-gray-800" variants={curve} initial="initial" exit="exit"></motion.path>
                </svg>
            </>
            }
        </motion.div>
    )
}
