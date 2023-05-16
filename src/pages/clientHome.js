import React, {useState, useEffect} from "react";
import theme from "theme";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Theme, Link, Text, Box, Section, Hr, Icon, Image } from "@quarkly/widgets";
import { RawHtml, Override, StackItem, Stack, SocialMedia } from "@quarkly/components";
import { MdArrowDownward } from "react-icons/md";
import NavbarLink from "./NavbarLink";
import { useInView } from "react-intersection-observer";

import AuthService from "services/AuthService";
import { useHistory } from "react-router-dom";

import CometChat from "services/CometChat";

import NavBarLinkOnPage from "./NavBarLinkOnPage.js"; 
import {motion, useAnimation, AnimatePresence} from "framer-motion";
import product_card from "./product_data";

const TestVariant = {
	visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
	hidden: { opacity: 0, scale: 0 }
};

export default (() => {
	const history = useHistory();
	const [ref, inView] = useInView()
	const control = useAnimation();
	const control2 = useAnimation();
	const[visible, setVisible] = useState(4);
	useEffect(() => {
		if(inView){
			control.start("visible");
			control2.start({
				scale: 1,
				x: 0,
				opacity:1,
				transition: {
					delay:0.6,
					duration:0.7
				},
			});
		}else{
			control.start("hidden");
			control2.start("hidden");
		}
	}, [control,control2,inView]);
	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 2011){
		history.push("/doctor")
	}

	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 3011){
		history.push("/adminpage")
	}

	if(!AuthService.handleGetLoginStatus()){
		history.push("/");
	}

	const [typeButton,setTypeButton] = useState(0);

	function MapBooks(List) {
        if(!List){List=[];}
        const Filtered = List.slice(0, visible).map((item) =>
			<Box
				display="flex"
				flex-direction="column"
				width="50%"
				padding="16px 16px 16px 16px"
				sm-width="100%"
			>
				<Box display="flex" flex-direction="column">
					<Text as="h3" font="--headline3" margin="12px 0">
						{item.question}
					</Text>
					<Text as="p" font="--base" margin="12px 0" color="--greyD2">
						{item.answer}
					</Text>
				</Box>
			</Box>
        );
        return Filtered;
    }

	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Client
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
					delay:0.3,
					duration:0.4
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
							<NavBarLinkOnPage style={{"background-color": "white" }} href="/client">Home</NavBarLinkOnPage>
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
							<NavbarLink href="/medicine" onClick={() => {setTypeButton(2)}}>Medicine</NavbarLink>
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
							<NavbarLink href="/calculator">Calculator</NavbarLink>
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
							<NavbarLink href="/mydoctor">My Doctor</NavbarLink>
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
							<NavbarLink href="/logout">logout</NavbarLink>
						</motion.div>
					</Box>
				</motion.div>
			</Section>
		</motion.div>
		<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://www.scripps.org/sparkle-assets/seo_thumbnails/news_items/6473/facebook-437f97cdb8e096c0ce61654b167311f7.jpg) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						Excellence in everything
					</Text>
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						We want you to feel the best always and forever.
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					FAQs
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
		<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
		<Section padding="80px 0 80px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
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
					x:70,
					opacity:0,
					transition: {
						duration: 0.3
					}
				}}
				ref={ref}
				initial={
					{
						opacity: 0, 
						scale: 0 
					}
				}
				animate={control}
				variants={TestVariant}
			>
				<Box
					display="flex"
					align-items="center"
					flex-direction="column"
					justify-content="center"
					margin="0px 0px 56px 0px"
					width="100%"
					sm-margin="0px 0px 30px 0px"
				>
					<Text
						margin="0px 0px 16px 0px"
						color="--dark"
						font="--headline1"
						text-align="center"
						sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					>
						Who are we? What are we doing?
					</Text>
				</Box>
				<Box
					display="grid"
					grid-template-columns="repeat(3, 1fr)"
					grid-gap="16px"
					lg-grid-template-columns="repeat(2, 1fr)"
					md-grid-template-columns="1fr"
				>
				</Box>
					<motion.div
					exit={{
						x:100,
						opacity:0,
						transition: {
							duration: 0.3
						}
					}}
					ref={ref}
					initial={
						{
							x: -1000,
							opacity: 0, 
							scale: 0 
						}
					}
					animate={control2}
					variants={TestVariant}
				>
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						As our client, we want to make sure that everything is looking the best for you!
						As a client, if you are premium, you can find all the medicine that are available on the site, and get some more information of them.
						You can calculate the ammount of the money you can spend if you are trying our calculator which will get you to the best servicies nearby.
						Finally you can find out a little bit more of yours doctors.
						If you have any questions do not esitated to contact us on our email: Doctorforyouservice@gmail.com
					</Text>
				</motion.div>
			</motion.div>
		</Section>
		<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
		<Section padding="60px 0" sm-padding="40px 0" color="--dark">
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="33.333%" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h2" font="--headline1" margin="0 0 8px 0">
							FAQs
						</Text>
						<Text as="p" font="--lead" margin="0" color="--greyD2">
							Need answers? We got’em
						</Text>
					</Box>
				</Box>
				<Box padding="16px 16px 16px 16px" width="66.66%" md-width="100%">
					<Box display="flex" flex-direction="row" flex-wrap="wrap">
						{MapBooks(product_card)}
					</Box>
				</Box>
			</Box>
		</Section>
		<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
		<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
		<Section padding="80px 0 80px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				margin="0px 0px 56px 0px"
				width="100%"
				sm-margin="0px 0px 30px 0px"
			>
				<Text
					margin="0px 0px 16px 0px"
					color="--dark"
					font="--headline1"
					text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Our Doctors opinions
				</Text>
			</Box>
			<Box
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="16px"
				lg-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-columns="1fr"
			>
				<Box
						padding="50px 55px 50px 55px"
						sm-padding="55px 40px 50px 55px"
						border-width="1px"
						border-style="solid"
						border-radius="24px"
						border-color="--color-lightD2"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
					>
						<Text margin="0px 0px 0px 0px">
							Paracetamol
						</Text>
						<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20:05:47.446Z" margin="0px 0px 33px 0px" padding="15px 0px 0px 0px" />
						<Text
							margin="0px 0px 35px 0px"
							color="--dark"
							font="--lead"
							lg-margin="0px 0px 50px 0px"
							sm-margin="0px 0px 30px 0px"
							flex="1 0 auto"
						>
							“Is good for headache, joint pain, back pain, tootache, I recommend this if you have those symtomps”
						</Text>
						<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
							<Image
								width="43px"
								height="43px"
								src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19:47:23.498Z"
								border-radius="50зч"
								margin="0px 15px 12px 0px"
							/>
							<Box>
								<Text color="--dark" font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 2px 0px">
									Sam Smith
								</Text>
								<Text color="--greyD1" font="--base" margin="0px 0px 0px 0px">
									Family Doctor
								</Text>
							</Box>
						</Box>
				</Box>
				<Box
					padding="50px 55px 50px 55px"
					sm-padding="55px 40px 50px 55px"
					border-width="1px"
					border-style="solid"
					border-radius="24px"
					border-color="--color-lightD2"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Text margin="0px 0px 0px 0px">
						Brufen
					</Text>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/startfavorite.png?v=2021-08-30T20:09:22.144Z" margin="0px 0px 33px 0px" padding="15px 0px 0px 0px" />
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						"Brufen is used by adults and teenagers to relieve pain of mild to moderate intensity, to treat rhumatic deseases and to relieve menstrual pain."
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Image
							width="43px"
							height="43px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19:47:16.297Z"
							border-radius="50зч"
							margin="0px 15px 12px 0px"
						/>
						<Box>
							<Text color="--dark" font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 2px 0px">
								Mason Johnson
							</Text>
							<Text color="--greyD1" font="--base" margin="0px 0px 0px 0px">
								Family Doctor
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					padding="50px 55px 50px 55px"
					sm-padding="55px 40px 50px 55px"
					border-width="1px"
					border-style="solid"
					border-radius="24px"
					border-color="--color-lightD2"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Text margin="0px 0px 0px 0px">
						Nurofen
					</Text>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20:05:47.446Z" margin="0px 0px 33px 0px" padding="15px 0px 0px 0px" />
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						"Nurofen Forte 400 tablets effectively soothe a wide spectrum of acute pain. May be given for: Mild to moderate pain such as headache, migraine, toothache, menstrual pain."
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Image
							width="43px"
							height="43px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19:47:08.343Z"
							border-radius="50зч"
							margin="0px 15px 12px 0px"
						/>
						<Box>
							<Text color="--dark" font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 2px 0px">
								Adriana Williams
							</Text>
							<Text color="--greyD1" font="--base" margin="0px 0px 0px 0px">
								Family Doctor
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					padding="50px 55px 50px 55px"
					sm-padding="55px 40px 50px 55px"
					border-width="1px"
					border-style="solid"
					border-radius="24px"
					border-color="--color-lightD2"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Text margin="0px 0px 0px 0px">
						Procor Forte
					</Text>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20:05:47.446Z" margin="0px 0px 33px 0px" padding="15px 0px 0px 0px" />
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						"It helps the normal of the cardiovascular system. Benefits: Reduces LDL oxidation. It inhibits platelet aggregation."
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Image
							width="43px"
							height="43px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19:46:11.754Z"
							border-radius="50зч"
							margin="0px 15px 12px 0px"
						/>
						<Box>
							<Text color="--dark" font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 2px 0px">
								Ethan Tremblay
							</Text>
							<Text color="--greyD1" font="--base" margin="0px 0px 0px 0px">
								Family Doctor
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					padding="50px 55px 50px 55px"
					sm-padding="55px 40px 50px 55px"
					border-width="1px"
					border-style="solid"
					border-radius="24px"
					border-color="--color-lightD2"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Text margin="0px 0px 0px 0px">
						Xyzal
					</Text>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20:05:47.446Z" margin="0px 0px 33px 0px" padding="15px 0px 0px 0px" />
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						"Xizal is an anti-allergic drug used for the treatment of symtomps associated with allergic conditions such as: hay fever, rhinitis, chronic urticarial rash."
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Image
							width="43px"
							height="43px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19:47:08.343Z"
							border-radius="50зч"
							margin="0px 15px 12px 0px"
						/>
						<Box>
							<Text color="--dark" font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 2px 0px">
								Adriana Williams
							</Text>
							<Text color="--greyD1" font="--base" margin="0px 0px 0px 0px">
								Family Doctor
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					padding="50px 55px 50px 55px"
					sm-padding="55px 40px 50px 55px"
					border-width="1px"
					border-style="solid"
					border-radius="24px"
					border-color="--color-lightD2"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Text margin="0px 0px 0px 0px">
						Furazolidon
					</Text>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/startfavorite.png?v=2021-08-30T20:09:22.144Z" margin="0px 0px 33px 0px" padding="15px 0px 0px 0px" />
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						"It's used for the treatment of intestinal infections caused by some bacteria (enteritis, food poisoning giardiasis) and cholera."
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Image
							width="43px"
							height="43px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19:47:08.343Z"
							border-radius="50зч"
							margin="0px 15px 12px 0px"
						/>
						<Box>
							<Text color="--dark" font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 2px 0px">
								Mason Johnson
							</Text>
							<Text color="--greyD1" font="--base" margin="0px 0px 0px 0px">
								Family Doctor
							</Text>
						</Box>
					</Box>
				</Box>
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
			<CometChat />
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"62de926f5e5c6e002154effc"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});