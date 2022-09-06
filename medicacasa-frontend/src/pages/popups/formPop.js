import React, { useState, useImperativeHandle, useRef, forwardRef } from "react";
import "./style.css";
import {motion, AnimatePresence} from "framer-motion";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Input, Button, Hr } from "@quarkly/widgets";


const SubmitForm = forwardRef((props, refs) => {
    const [open, setOpen] = useState(true);
    useImperativeHandle(refs,() =>{
        return{
            open: () => setOpen(true),
            close: () => setOpen(false)
        }
    });

    return (
        <AnimatePresence>
            {open && (<>
            <motion.div 
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 0.9,
                    transition:{
                        duration: 0.3
                    }
                }}
                exit={{
                    opacity:0,
                    transition:{
                        delay:0.3
                    }
                }}
                onClick={() => setOpen(false)}
            className="modal-backdrop" >
                <Theme theme={theme}>
                    <motion.div 
                        initial={{
                            scale: 0
                        }}
                        animate={{
                            scale:1,
                            transition:{
                                duration: 0.3
                            }
                        }}   
                        exit={{
                            scale:0,
                            transition:{
                                delay:0.3
                            }
                        }} 
                    className="modal-content-wrapper">
                        <motion.div 
                            initial={{
                                x: 100,
                                opacity:0
                            }}
                            animate={{
                                x: 0,
                                opacity:1,
                                transition: {
                                    delay:0.5,
                                    duration:0.3
                                }
                            }}
                            exit={{
                                x:100,
                                opacity:0,
                                transition: {
                                    duration: 0.3
                                }
                            }}
                        className="modal-content">
                            <Section padding="240px 0" sm-padding="0px 0">
                                <motion.div
                                    initial={{
                                        x: 100,
                                        opacity:0
                                    }}
                                    animate={{
                                        x: 0,
                                        opacity:1,
                                        transition: {
                                            delay:0.7,
                                            duration:0.3
                                        }
                                    }}
                                    exit={{
                                        x:100,
                                        opacity:0,
                                        transition: {
                                            duration: 0.3
                                        }
                                    }}
                                >
                                    <Box 
                                        gap="16px"
                                        display="grid"
                                        background-color="white"
                                        flex-direction="row"
                                        flex-wrap="wrap"
                                        grid-template-columns="repeat(2, 1fr)"
                                        grid-gap="16px"
                                    >
                                        <Text font="--base" margin="0 0 4px 0">
                                            Something went wrong, please try again.
                                        </Text>
                                        <p></p>
                                        <Text font="--base" margin="0 0 4px 0">
                                            To exit, click outside the box
                                        </Text>
                                    </Box>
                                </motion.div>
                            </Section>
                        </motion.div>
                    </motion.div>
                </Theme>
            </motion.div>
        </>)}
        </AnimatePresence>
    );
});


export default SubmitForm;