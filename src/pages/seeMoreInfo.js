import React, {useEffect,useState} from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image, Structure, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import { Button } from "@quarkly/widgets/build/cjs/prod";

import UserService from "services/UserService";
import { useHistory } from "react-router-dom";
import AuthService from "./../services/AuthService";
import NavbarLink from "./NavbarLink";
import NavBarLinkOnPage from "./NavBarLinkOnPage.js"; 
import {motion, useAnimation, AnimatePresence} from "framer-motion";

export default(()=>{
	const history = useHistory();
	const [typeButton,setTypeButton] = useState(0);

	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 1011){
		history.push("/client")
	}

	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 3011){
		history.push("/adminpage")
	}
	if(!AuthService.handleGetLoginStatus()){
		history.push("/");
	}

	const[client,setClient] = useState([]);
	const[visible,setVisible] = useState(1);
	useEffect( () =>{
		getClient();
	}, [])

	async function getClient(){
		let url = window.location.href;
        // console.log(url);
        let first = url.split("/");
		const response = await UserService.getUsersUnderId(first[4])
        if(response){
            setClient(response);
        }
	}

	function MapClient(List){
		if(!List){List=[];}
		const Filtered = List.slice(0, visible).map((item) =>
			<Section>
					<Override slot="Cell 0th" grid-column="1 / span 6" md-grid-column="1 / span 12" sm-grid-column="auto" />
					<Override slot="Cell 1st" grid-column="7 / span 6" md-grid-column="1 / span 12" sm-grid-column="auto" />
					<Override
						slot="Cell 2nd"
						grid-column="1 / span 3"
						md-grid-column="1 / span 6"
						sm-grid-column="auto"
						position="relative"
					/>
					<Override slot="Cell 3rd" grid-column="4 / span 3" md-grid-column="7 / span 6" sm-grid-column="auto" />
					<Override slot="Cell 4th" grid-column="7 / span 3" md-grid-column="1 / span 6" sm-grid-column="auto" />
					<Override slot="Cell 5th" grid-column="10 / span 3" md-grid-column="7 / span 6" sm-grid-column="auto" />
					<Override slot="Cell 6th" grid-column="1 / span 4" sm-grid-column="auto" />
					<Override slot="Cell 7th" grid-column="5 / span 4" sm-grid-column="auto" />
					<Override slot="Cell 8th" grid-column="9 / span 4" sm-grid-column="auto" />
					<Box 
						padding="50px 55px 50px 55px"
						border-width="1px"
						border-style="solid"
						border-radius="30px"
						border-color="--color-lightD2"
						flex-direction="column"
						marginRight="10px"
						margin="10px"
						height="300px"
					>
							<Image src={item.img} margin="0px 0px 2px 0px" height="150px" width="150px" display="block" position="relative" right="-15px"/>
							<Text margin="0px 0px 0px 0px" position="relative" top="50px" right="12-px">
								Name:{item.username}
							</Text>
							<Text margin="0px 0px 0px 0px" position="relative" right="px">
								Email:{item.email}
							</Text>
							<Text margin="0px 0px 0px 0px" top="-200px" position="relative"  right="-300px">
								Age:{item.age}
							</Text>
							<Text margin="0px 0px 0px 0px" position="relative" top="-130px" right="-300px">
								Height:{item.height}
							</Text>
							<Text margin="0px 0px 0px 0px" position="relative" top="-50px" right="-300px">
								Weight:{item.weight}
							</Text>
							<Text margin="0px 0px 0px 0px" position="relative" top="-275px" right="-700px">
								No. Hearts beat:{item.numberHeart}
							</Text>
							<Text margin="0px 0px 0px 0px" position="relative" top="-205px" right="-700px">
								Phone number:{item.phone}
							</Text>
							<Text margin="0px 0px 0px 0px" position="relative" top="-125px" right="-700px">
								Other diseases: {item.diseases}
							</Text>
					</Box>																		

			</Section>
		);
		return Filtered;
	}

    return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"add-review"} />
		<Helmet>
			<title>
				Quarkly export
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
							<NavbarLink href="/doctor" onClick={() => {setTypeButton(2)}}>Home</NavbarLink>
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
							<NavbarLink href="/schedule">My Schedule</NavbarLink>
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
							<NavBarLinkOnPage style={{"background-color": "white" }} href="/myclients">My Client</NavBarLinkOnPage>
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
		<Text margin="0px 0px 0px 0px" position="relative" right="-100px">
			Last update:
			<p></p>
		</Text>
		<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
		{MapClient(client)}
		<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
			<p></p>
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
			<style place={"endOfHead"} rawKey={"62e38af0f913c500201c13a2"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});