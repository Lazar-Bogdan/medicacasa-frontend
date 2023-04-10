import React, {useEffect} from "react";
import theme from "theme";
import { Theme, Link,Text, Box, Section, Image, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu, SocialMedia } from "@quarkly/components";
import { useInView } from "react-intersection-observer";

import AuthService from "services/AuthService";
import { useHistory } from "react-router-dom";
import NavbarLink from "./NavbarLink.js";
import {motion, useAnimation, AnimatePresence} from "framer-motion";
import NavBarLinkOnPage from "./NavBarLinkOnPage.js";

const TestVariant = {
	visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
	hidden: { opacity: 0, scale: 0 }
};
const TestVariant1 = {
	visible: { opacity: 1, scale: 1, transition: { delay:0.3, duration: 0.5 } },
	hidden: { opacity: 0, scale: 0 }
};
const TestVariant2 = {
	visible: { opacity: 1, scale: 1, transition: { delay:0.5, duration: 0.5 } },
	hidden: { opacity: 0, scale: 0 }
};
const TestVariant3 = {
	visible: { opacity: 1, scale: 1, transition: { delay:0.7, duration: 0.5 } },
	hidden: { opacity: 0, scale: 0 }
};

export default (() => {
	const history = useHistory();

	const control = useAnimation();
	const [ref, inView] = useInView()

	useEffect(() => {
		if(inView){
			control.start("visible");
		}else{
			control.start("hidden");
		}
	}, [control,inView]);

	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 1011){
		history.push("/client")
	}

	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 2011){
		history.push("/doctor")
	}

	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 3011){
		history.push("/adminpage")
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
					<NavBarLinkOnPage href="/aboutus">About Us</NavBarLinkOnPage>
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
					<NavbarLink href="/alldoctors">Our Doctors</NavbarLink>
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
		<Section padding="80px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="20px 0 20px 0" text-align="center">
				Aici text despre cine suntem noi si ce facem
			</Text>
		</Section>
		<Section padding="80px 0 80px 0">
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
					display="flex"
					align-items="center"
					justify-content="center"
					flex-direction="column"
					margin="0px 0px 32px 0px"
					width="100%"
				>
					
					<Text margin="0px 0px 0px 0px" font="--headline1" color="--dark" text-align="center">
						Our Team
					</Text>
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
					>
						<Text
							margin="16px 0px 0px 0px"
							font="--lead"
							display="block"
							width="100%"
							text-align="center"
							color="--darkL2"
							lg-width="100%"
							
						>
							Echipa administrativa
						</Text>
					</motion.div>
				</Box>
				<Box
					display="grid"
					lg-flex-wrap="wrap"
					align-items="stretch"
					grid-template-columns="repeat(4, 1fr)"
					grid-gap="16px"
					lg-grid-template-columns="repeat(2, 1fr)"
					sm-grid-template-columns="1fr"
					width="100%"
					position="center"
				>
					<Box
						position="relative"
						display="flex"
						flex-direction="column"
						align-items="center"
						justify-content="flex-start"
						padding="24px 24px 0px 24px"
					>
						<motion.div
							initial={{
								x: 0,
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
								x:70,
								opacity:0,
								transition: {
									duration: 0.3
								}
							}}
							ref={ref}
							initial="hidden"
							animate={control}
							variants={TestVariant}
						>
							<Box
								width="100%"
								height="auto"
								overflow-x="hidden"
								overflow-y="hidden"
								position="relative"
								padding="100% 0px 0px 0px"
							>
								<Image
									border-radius="50%"
									src="https://mydoctorbucket.s3.eu-central-1.amazonaws.com/profilePhotos/b98a59c0-bf39-4c2e-9a64-2f990ae7d5ed.jpeg"
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
							</Box>
						
							<Box padding="0px 20px 0px 20px" margin="0px 0px 0px 0px" position="center">
								<Text
									margin="21px 0px 0px 0px"
									font="--headline3"
									display="block"
									text-align="center"
									color="--darkL1"
								>
									Bogdan Lazar
								</Text>
								<Text
									margin="16px 0px 26px 0px"
									font="--base"
									display="block"
									text-align="center"
									color="--greyD2"
								>
									CEO & Developer of Doctor4You
								</Text>
							</Box>
						</motion.div>
					</Box>
				</Box>
			</motion.div>
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