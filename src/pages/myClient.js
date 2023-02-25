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

import CometChat from "services/CometChat";
import DoctorService from "services/DoctorService";
import NavbarLink from "./NavbarLink";
import NavBarLinkOnPage from "./NavBarLinkOnPage.js"; 
import {motion, useAnimation, AnimatePresence} from "framer-motion";

export default (() => {
	const history = useHistory();
	const [hover, setHover] = React.useState(null);

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

	function review(){
		history.push('/reviewpage');
	}

	const [clients, setClients] = useState([]);
	const[visible, setVisible] = useState(6);
	useEffect( () =>{
		getClients();
    }, [])

	async function getClients(){
		const res1 = await DoctorService.getEmailUnderId(AuthService.handleGetId());

		console.log("emaildoctor");
		console.log(res1);

		const response = await UserService.getUserUnderDoctorEmail(res1);
		if(response){
			console.log(response);
			setClients(response);
		}
	}

	function seeMoreInfo(id){
		history.push('/clientinfo/'+id);
	}

	function MapClients(List){
		if(!List){List=[];}
		const Filtered = List.slice(0, visible).map((item) =>
			<Structure cells-number-total="3" cells-number-group="3" position="relative">
				<Override slot="Content" grid-template-columns="repeat(3, 4fr)" sm-grid-template-columns="12fr">
					<Override slot="cell-0">
						<Image src={item.img} margin="0px 0px 2px 0px" height="150px" width="150px" />
					</Override>
					<Override slot="cell-1">
						<Text padding="0px 0px 0px 0px" position="relative" right="-100px">
							{item.username}
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							position="relative"
							right="-100px"
							top="20px"
							transition="--transformOut"
						>
							{item.email}
						</Text>
					</Override>
					<Override slot="cell-2">
						<Button position="relative" right="-200px" top="40px" 
						onClick={() => seeMoreInfo(item._id)}
						onMouseOver={() => setHover(item._id)}
						onMouseOut={() => setHover(null)}
						border="10px"
						style={{
							backgroundColor: hover === item._id ? 'white' : 'black',
							color: hover === item._id? 'black' : 'white',
							border: '2px solid black'
						}} 
						>
							More information
						</Button>
					</Override>
					<Override slot="Cell 0th" position="relative" right="-10p" />
				</Override>
			</Structure>
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

		<Section>
			{MapClients(clients)}
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
			<style place={"endOfHead"} rawKey={"62e38af0f913c500201c13a2"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});