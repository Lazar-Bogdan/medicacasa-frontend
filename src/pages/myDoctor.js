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

export default (() => {
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
			<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
				<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
				<Box
					width="50%"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					md-width="100%"
					padding="0px 0px 0px 0px"
					lg-padding="0px 30px 0px 0px"
					md-padding="0px 0px 0px 0px"
					md-margin="0px 0px 30px 0px"
				>
					<Image max-width="340px" src={item[0].img} md-margin="0px 0px 20px 0px" />
					<Text margin="0px 0px 0px 0px" color="--darkL2" font="--base">
						
					</Text>
				</Box>
				<Box
					width="50%"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					md-width="100%"
				>
					<Text margin="0px 0px 40px 0px" color="--dark" font="--headline2" md-margin="0px 0px 30px 0px">
						Name : {item[0].username}
					</Text>
					<Text margin="0px 0px 40px 0px" color="--darkL2" font="--base">
						Description :{item[0].doctorFirstDescription}
					</Text>
					<Text margin="0px 0px 0px 0px" color="--darkL2" font="--base">
						Description :{item[0].doctorSecondDescription}
					</Text>
				</Box>
			</Section>
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
		<Section>
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
                    href="/client"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                >Home</Link>
                <Link
                    href="medicine"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                    
                >Medicine</Link>
                <Link
                    href="mydoctor"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                    
                >My Doctor</Link>
                
                <Link
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                    href="/logout"
                >Logout</Link>
                    
			</Box>
		</Section>
		<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
		{MapDoc(doctors)}
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