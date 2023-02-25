import React, {useEffect,useState} from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";

import URL from "../services/BackEndURL";
import axios from "axios";
import { List } from "@quarkly/widgets/build/cjs/prod";
import { useHistory } from "react-router-dom";
import AuthService from "./../services/AuthService";
import CometChat from "services/CometChat";
import NavBarLinkOnPage from "./NavBarLinkOnPage.js"; 
import {motion, useAnimation, AnimatePresence} from "framer-motion";
import NavbarLink from "./NavbarLink";

export default (() => {
	const history = useHistory();
	const [typeButton,setTypeButton] = useState(0);

	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 2011){
		history.push("/doctor")
	}

	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 3011){
		history.push("/adminpage")
	}
	if(!AuthService.handleGetLoginStatus()){
		history.push("/");
	}
	
	// useEffect( () =>{
    //     test();
    // }, [])
	// async function test(){
	// 	try{
    //         // de hardcodat link ul
    //         const response = await axios.post(URL + "users/addClient", {username:"Bogdan",email:"Bogdan2000@gmail.com",password:"test",role:1011,age:21,subscription:[{email:"Amalia@gmail.com"},{email:"test@gmail.com"}]});
    //         return response.data;
    //     }catch(err){
    //         console.error("Error", err.response);
    //         return false;
    //     }
	// }
	const [currentUser,setCurrentUser] = useState([{subscription:""}]);
	const [doctors,setDoctors] = useState([]);
	const[visible, setVisible] = useState(6);

	

	async function getCurentUser(){
		console.log("GET CURENT USER");
		await axios.get(URL + "users/getUserUnderId", { headers: { _id: AuthService.handleGetId() }})
			.then(response => {
				setCurrentUser(response.data);
				console.log(response.data);
				// console.log(response.data[0].subscription[0]);
			})
			.catch(err => {
				console.log("error on fetching user");
			})
	}

	useEffect( () =>{
		getCurentUser();
    }, [])
	
	// to be implemented
	

	useEffect( () =>{
		getDoctors();
	}, [currentUser])


	async function getDoctors(){
		console.log("GET DOCTORS");
		console.log(currentUser);
		console.log("DOCTOR EMAIL");
		console.log(currentUser[0]);
		if(currentUser.length == 1){
			const size = currentUser[0].subscription.length;
			for(var i=0;i<size; i++){
				await axios.get(URL + "doctor/getDoctorUnderEmail",{ headers: {email: currentUser[0].subscription[i].email}})
				.then(response => {
					console.log(response.data);
					setDoctors(doctors=>[...doctors,response.data]);
				})
				.catch(err => {
					console.log("error on fetching doctors");
				})
			}
		}

		
	}
	
	function MapDoc(List){
		console.log("MAP DOCTOR");
		console.log(List);
		if(!List){List=[];}
		const Filtered = List.slice(0, visible).map((item) =>
				<div marginRight="10px">
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
						<Image src={item[0].img} margin="0px 0px 2px 0px" height="150px" width="150px" />
						<Text
							justifyContent="center"
							alignItems="center"
							margin="25px 10px 35px 40px"
							color="--dark"
							font="--lead"
							lg-margin="0px 0px 50px 0px"
							sm-margin="0px 0px 30px 0px"
							marginRight="10px"
						>
							{item[0].username}
						</Text>
						<Text
							justifyContent="center"
							alignItems="center"
							margin="-280px 0px 100px 550px"
							color="--dark"
							font="--lead"
							lg-margin="0px 0px 50px 0px"
							sm-margin="0px 0px 30px 0px"
							flex="1 0 auto"
							font-weight="bold"
						>
							Profession:
						</Text>
						<Text 
							justifyContent="center"
							alignItems="center"
							margin="-100px 0px 100px 500px"
							color="--dark"
							font="--lead"
							lg-margin="0px 0px 50px 0px"
							sm-margin="0px 0px 30px 0px"
							flex="1 0 auto"
						>
							test {item[0].doctorFirstDescription}
						</Text>
						<Text 
							justifyContent="center"
							alignItems="center"
							margin="-100px 0px 100px 550px"
							color="--dark"
							font="--lead"
							lg-margin="0px 0px 50px 0px"
							sm-margin="0px 0px 30px 0px"
							flex="1 0 auto"
							font-weight="bold"
						>
							About me: 
						</Text>
						<Text 
							justifyContent="center"
							alignItems="center"
							margin="-100px 0px 100px 200px"
							color="--dark"
							font="--lead"
							lg-margin="0px 0px 50px 0px"
							sm-margin="0px 0px 30px 0px"
							flex="1 0 auto"
							overflow="hidden"
							white-space="normal"
							word-wrap= "break-word"
						>
							Second aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa: {item[0].doctorSecondDescription} 
						</Text>
					</Box>
			</div>
        );
        return Filtered;
	}
	
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
							<NavBarLinkOnPage style={{"background-color": "white" }} href="/mydoctor">My Doctor</NavBarLinkOnPage>
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
		{MapDoc(doctors)}
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