import React, { useState, useEffect } from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Hr, Icon, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu, StackItem, Stack, SocialMedia } from "@quarkly/components";
import { MdArrowDownward } from "react-icons/md";
import product_card from "./product_data.js"

import AuthService from "services/AuthService";
import { useHistory } from "react-router-dom";
import {motion, useAnimation, AnimatePresence} from "framer-motion";
import { useInView } from "react-intersection-observer";

const TestVariant = {
	visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
	hidden: { opacity: 0, scale: 0 }
  };

export default (() => {
	// to do remove this, was a test
	const control = useAnimation();
	const [ref, inView] = useInView()

	useEffect(() => {
		if(inView){
			control.start("visible");
		}else{
			control.start("hidden");
		}
	}, [control,inView]);

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

	const[visible, setVisible] = useState(4);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    };
	function FilterByCategory(cathegory) {
        const Filtered = product_card.filter((item) => {
            if(item.cathegory.toLowerCase()==cathegory) {
                return item;
            }
        });
        return Filtered;
    }
	const Books = product_card;
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
						{item.product_name}
					</Text>
					<Text as="p" font="--base" margin="12px 0" color="--greyD2">
						Raspuns medical 1
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
				Home
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
						<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
							Doctors For You
						</Text>
						<Link
							href="/"
							display="flex"
							justify-content="center"
							font="--base"
							font-weight="700"
							md-flex-direction="column"
							md-align-items="center"
							slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
						>Home</Link>
						<Link
							href="/aboutus"
							display="flex"
							justify-content="center"
							font="--base"
							font-weight="700"
							md-flex-direction="column"
							md-align-items="center"
							slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
						>About us</Link>
						<Link
							href="/alldoctors"
							display="flex"
							justify-content="center"
							font="--base"
							font-weight="700"
							md-flex-direction="column"
							md-align-items="center"
							slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
						>Doctors</Link>
						<Link
							href="/contactus"
							display="flex"
							justify-content="center"
							font="--base"
							font-weight="700"
							md-flex-direction="column"
							md-align-items="center"
							slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
						>Contact us</Link>
						<Link
							href="/login"
							display="flex"
							justify-content="center"
							font="--base"
							font-weight="700"
							md-flex-direction="column"
							md-align-items="center"
							slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
							
						>Login</Link>
					</Box>
				</motion.div>
			</Section>
		</motion.div>
		<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
		<motion.div
			
		>
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
		</motion.div>
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
				<Box padding="16px 16px 16px 16px" width="66.66%">
					<Box display="flex" flex-direction="row" flex-wrap="wrap">
						{MapBooks(FilterByCategory("sf"))}
					</Box>
				</Box>
			</Box>
		</Section>
		<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
		<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
		<motion.div
			ref={ref}
			initial="hidden"
			animate={control}
			variants={TestVariant}
		>
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
					<Text margin="0px 0px 0px 0px" color="--grey" text-align="center" font="--lead">
						Sign up with your email address to receive news and updates.
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
							medicament 1
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
							“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”
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
									Product Designer
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
							medicament 1
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
							“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”
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
									Manager
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
							medicament 1
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
							Must have book for students, who want to be Product Designer, UX Designer, or Interaction Designer.
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
									Product Designer
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
							medicament 1
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
							“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.”
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
									UI/UX Designer
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
							medicament 1
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
							Must have book for students, who want to be Product Designer, UX Designer, or Interaction Designer.
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
									Product Designer
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
							medicament 1
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
							“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”
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
									Manager
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
			</Section>
		</motion.div>
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