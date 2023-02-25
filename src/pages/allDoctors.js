import React, {useEffect,useState} from "react";
import theme from "theme";
import { Theme, Link,Text, Box, Section, Image, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu, SocialMedia } from "@quarkly/components";

import DoctorService from "services/DoctorService";
import { useHistory } from "react-router-dom";
import AuthService from "services/AuthService";
import NavbarLink from "./NavbarLink.js";
import NavBarLinkOnPage from "./NavBarLinkOnPage.js";

import {motion, useAnimation, AnimatePresence} from "framer-motion";


export default (() => {
    const [scale, setScale] = useState(1);
    const [hoveredBox, setHoveredBox] = useState(null);
    const control = useAnimation();

    const handleMouseEnter = (id) => {
      setHoveredBox(id);
    };
  
    const handleMouseLeave = () => {
      setHoveredBox(null);
    };
    const history = useHistory();

	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 1011){
		history.push("/client")
	}

	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 2011){
		history.push("/doctor")
	}

	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 3011){
		history.push("/adminpage")
	}
    
    useEffect( () =>{
		getDoctors();
    }, [])

    const[doctors,setDoctors] = useState([]);
    const[visible, setVisible] = useState(9);

    async function getDoctors(){
        const response = await DoctorService.getAllDoctors();
        if(response){
            setDoctors(response);
        }
    }

    function seeDetails(id){
        history.push('/doctorinformation/'+id);
    }

    function MapDoctors(List){
		if(!List){List=[];}
		const Filtered = List.slice(0, visible).map((item) =>
            <Box
                position="relative"
                display="flex"
                flex-direction="column"
                align-items="center"
                justify-content="flex-start"
                padding="10px 10px 0px 10px"
                border="2.5px solid black"
                transform={hoveredBox === item._id ? "scale(1.2)" : "scale(1)"}
                width="250px"
                height="300px"
            >
                <Box
                    onMouseEnter={() => handleMouseEnter(item._id)}
                    onMouseLeave={handleMouseLeave}
                    width="200px"
                    height="300px"
                >
                    <Box
                        width="100%"
                        height="auto"
                        overflow-x="hidden"
                        overflow-y="hidden"
                        position="relative"
                        padding="50% 50px 100px 50px"
                        height="100px"
                    >
                        <button className="imgButton" height="0px" width="0px" type="submit" onClick={() => seeDetails(item._id)}>
                            <Image
                                src={item.img}
                                object-fit="cover"
                                position="absolute"
                                top={0}
                                left={0}
                                bottom={0}
                                right={0}
                                display="block"
                                width="100%"
                                max-height="100%"
                            />
                        </button>
                    </Box>
                    <Box padding="0px 20px 0px 20px" margin="0px 0px 0px 0px">
                        <Text
                            margin="21px 0px 0px 0px"
                            font="--headline3"
                            display="block"
                            text-align="center"
                            color="--darkL1"
                        >
                            Dr. {item.username}
                        </Text>
                        <Text
                            margin="16px 0px 26px 0px"
                            font="--base"
                            display="block"
                            text-align="center"
                            color="--greyD2"
                        >
                            {item.doctorFirstDescription}
                        </Text>
                    </Box>
                </Box>
            </Box>
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

            {MapDoctors(doctors)}	

			</Box>
		</Section>
		<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
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