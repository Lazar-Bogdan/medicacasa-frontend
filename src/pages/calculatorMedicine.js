import React, {useEffect,useState} from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image, Hr, Input} from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia, Formspree } from "@quarkly/components";

import URL from "../services/BackEndURL";
import axios from "axios";
import { List } from "@quarkly/widgets/build/cjs/prod";
import { useHistory } from "react-router-dom";
import AuthService from "./../services/AuthService";
import CometChat from "services/CometChat";
import NavBarLinkOnPage from "./NavBarLinkOnPage.js"; 
import {motion, useAnimation, AnimatePresence} from "framer-motion";
import NavbarLink from "./NavbarLink";
import NavbarButton from "./Button"


export default(() => {
    const city = [
        {
            id:"Timisoara"
        },
        {
            id:"Arad"
        },
        {
            id:"Bucuresti"
        },
        {
            id:"Iasi"
        },
        {
            id:"Constanta"
        },
        {
            id:"Craiova"
        }
    ]
    const[visible, setVisible] = useState(40);
    
    function getCity()
    {
        const Filtered = city.slice(0, visible).map((item)=>
            {
                return <option value={item.id}>{item.id}</option>
            }
        );
    
        return Filtered;
    }

    const history = useHistory();

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

    return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"my-doctor"} />
		<Helmet>
			<title>
				My Doctor
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
							<NavbarLink href="/client" onClick={() => {setTypeButton(2)}}>Home</NavbarLink>
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
							<NavbarLink href="/medicine">Medicine</NavbarLink>
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
							<NavBarLinkOnPage style={{"background-color": "white" }} href="/calculator">Calculator</NavBarLinkOnPage>
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
		<Section padding="80px 0 80px 0">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Box
					padding="50px 55px 50px 55px"
					border-width="1px"
					border-style="solid"
					border-radius="30px"
					border-color="--color-lightD2"
					flex-direction="column"
					marginRight="10px" 

                >
                    <Box>
						<Formspree endpoint="xeqpgrlv">
							<Box
								gap="16px"
								display="grid"
								flex-direction="row"
								flex-wrap="wrap"
								grid-template-columns="repeat(2, 1fr)"
								grid-gap="16px"
							>
								<Text font="--base" margin="0 0 4px 0">
									Name:
								</Text>
								<Input width="100%" type="email" name="email" onChange={(event) => console.log("") } />
								<Text font="--base" margin="0 0 4px 0" autocomplete="off">
									Surname:
								</Text>
								<Input width="100%" type="password" name="password" onChange={(event) => console.log("") } autocomplete="off"/>
                                <Text font="--base" margin="0 0 4px 0">
									Country:
								</Text>
                                <select width="100%"   onChange={(e) => {  }}>
                                    <option>Select...</option>
									<option value="Romania">Romania</option>
								</select>
                                <Text font="--base" margin="0 0 4px 0">
									City:
								</Text>
                                <select width="100%"   onChange={(e) => {  }}>
                                    <option>Select...</option>
									{getCity()}
								</select>
                                <Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
                                <Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
                                <Text font="--base" margin="0 0 4px 0">
                                    Cardiology:
								</Text>
                                <select width="100%"   onChange={(e) => {  }}>
                                    <option>Select...</option>
									<option>Select...</option>
                                    <option>Select...</option>
									<option>Select...</option>
                                    <option>Select...</option>
									<option>Select...</option>
								</select>
                                <Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
                                <Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
                                <Text font="--base" margin="0 0 4px 0">
                                    General Surgery:
								</Text>
                                <select width="100%"   onChange={(e) => {  }}>
                                    <option>Select...</option>
									<option>Select...</option>
                                    <option>Select...</option>
									<option>Select...</option>
                                    <option>Select...</option>
									<option>Select...</option>
								</select>
                                <Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
                                <Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
                                <Text font="--base" margin="0 0 4px 0">
                                    Internal Medicine:
								</Text>
                                <select width="100%"   onChange={(e) => {  }}>
                                    <option>Select...</option>
									<option>Select...</option>
                                    <option>Select...</option>
									<option>Select...</option>
                                    <option>Select...</option>
									<option>Select...</option>
								</select>
                                <NavbarButton variant="btn btn-success" type="submit" onClick={() => { console.log(""); }}>
                                    Calculate
                                </NavbarButton>
							</Box>
						</Formspree>
					</Box>
                </Box>
                <Box
                    width="300px"
                >
                </Box>
                <Box
					padding="50px 55px 50px 55px"
					border-width="1px"
					border-style="solid"
					border-radius="30px"
					border-color="--color-lightD2"
					flex-direction="column"
                >

                </Box>
            </div>
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
			<style place={"endOfHead"} rawKey={"62def10d21e43d0020976a62"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;

});