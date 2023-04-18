import React, {useEffect,useState} from "react";
import theme from "theme";
import { Theme, Link,Text, Box, Section, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu, SocialMedia } from "@quarkly/components";

import AuthService from "services/AuthService";
import { useHistory } from "react-router-dom";

import DoctorService from "services/DoctorService";
import NavbarLink from "./NavbarLink.js";
import NavBarLinkOnPage from "./NavBarLinkOnPage.js";

import {motion, useAnimation, AnimatePresence} from "framer-motion";

export default (() => {
    const history = useHistory();
    const control = useAnimation();
	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 1011){
		history.push("/client")
	}

	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 2011){
		history.push("/doctor")
	}

	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 3011){
		history.push("/adminpage")
	}

    const[doctor,setDoctor] = useState([]);
    const[visible, setVisible] = useState(1);
    useEffect( () =>{
		getDoctor();
    }, [])

    async function getDoctor(){
        // console.log(window.location.href);
        let url = window.location.href;
        // console.log(url);
        let first = url.split("/");
        console.log(first[4]);
        const response = await DoctorService.getDoctorUidAfterId(first[4]);
        console.log(response);
        if(response){
            setDoctor(response);
        }
    }

    function MapDoctor(List){
		if(!List){List=[];}
		const Filtered = List.slice(0, visible).map((item) =>
            <Section background="--color-darkL2" padding="60px 0" sm-padding="40px 0">
                <Box margin="-16px -16px -16px -16px" padding="16px 16px 16px 16px" display="flex" flex-wrap="wrap">
                    <Box padding="16px 16px 16px 16px" width="50%" lg-width="100%">
                        <Box
                            background={"url(" + item.img + ") 50% 50%/cover"}
                            padding="0px 0px 672px 0px"
                            margin="0px -112px 0px 0px"
                            lg-margin="0px 0px 0px 0px"
                            sm-padding="0px 0px 400px 0px"
                        />
                    </Box>
                    <Box width="50%" display="flex" padding="16px 16px 0px 16px" lg-width="100%">
                        <Box
                            padding="98px 64px 98px 64px"
                            mix-blend-mode="lighten"
                            background="--color-black"
                            margin="36px 0px -20px -112px"
                            display="flex"
                            flex-direction="column"
                            color="--light"
                            lg-margin="0px 0px 0px 0px"
                            lg-width="100%"
                            sm-padding="64px 32px 64px 32px"
							border="2.5px solid black"
                        >
                            <Text
                                as="h4"
                                margin="0"
                                font="--base"
                                letter-spacing="1px"
                                text-transform="uppercase"
                            >
                                About me
                            </Text>
                            <Text as="h1" margin="0 0 16px 0" font="--headline1" lg-font="--headline2">
                                Hey I’m {item.username}
                            </Text>
                            <Text as="h1" margin="0 0 16px 0" font="--headline1" lg-font="--headline2">
                                {item.doctorFirstDescription}
                            </Text>
                            <Text as="p" margin="16px 0" font="--base" max-width="400px">
                                {item.doctorSecondDescription}
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Section>
		);
		return Filtered;
	}

	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"about-us"} />
		<Helmet>
			<title>
				About
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<motion.div
			initial={{
				x: 100,
				opacity:0
			}}
			animate={{
				x: 0,
				opacity:1,
				transition: {
					delay:0.2,
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
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead" color="black" >
					Doctors For You
				</Text>
			</Box>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
				style={{
					background: "black",
					borderRadius: "20px",
					position: "relative",
					overflow: "hidden"
				}}
			>
				<motion.div
					initial={{
						x: 100,
						opacity:0
					}}
					animate={{
						x: 0,
						opacity:1,
						transition: {
							delay:0.1,
							duration:0.6
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
					<NavbarLink href="/">Home</NavbarLink>
				</motion.div>
				<motion.div
					initial={{
						x: 100,
						opacity:0
					}}
					animate={{
						x: 0,
						opacity:1,
						transition: {
							delay:0.3,
							duration:0.6
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
					<NavbarLink href="/aboutus">About Us</NavbarLink>
				</motion.div>
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
							duration:0.6
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
					<NavBarLinkOnPage href="/alldoctors">Our Doctors</NavBarLinkOnPage>
				</motion.div>
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
							duration:0.6
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
					<NavbarLink href="/contactus">Contact us</NavbarLink>
				</motion.div>
				<motion.div
					initial={{
						x: 100,
						opacity:0
					}}
					animate={{
						x: 0,
						opacity:1,
						transition: {
							delay:0.9,
							duration:0.6
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
					<NavbarLink href="/login">Login</NavbarLink>
				</motion.div>
			</Box>
			</Section>
		</motion.div>
        {MapDoctor(doctor)}
		<Section padding="80px 0 80px 0">
			<Box
				display="grid"
				lg-flex-wrap="wrap"
				align-items="stretch"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="16px"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
				width="100%"
			>

			</Box>
		</Section>
		<Section padding="60px 0" sm-padding="40px 0">
			<SocialMedia
				facebook="https://www.facebook.com/bogdi.lazar.5/"
				twitter="https://twitter.com/quarklyapp"
				youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
			>
				<Override
					slot="link"
					border-radius="50%"
					color="--light"
					margin="0 8px"
					background="--color-grey"
					hover-background="--color-greyD1"
				/>
			</SocialMedia>
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"62de926f5e5c6e002154effc"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});