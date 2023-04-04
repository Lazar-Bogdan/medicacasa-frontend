import React, { useEffect, useState } from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Input, Button, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree, SocialMedia } from "@quarkly/components";
import AuthService from "./../services/AuthService";
import AWS from 'aws-sdk'
import StripeCheckout from 'react-stripe-checkout';


import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';

import { useHistory } from "react-router-dom";

import Modal from "./popups/model"
import getStripe from "./getStripe";

const clientId = '201032838761-8q1ri414vi1lq8ve4bdvs8bfjeuda7bk.apps.googleusercontent.com';

const S3_BUCKET ='mydoctorbucket/profilePhotos';
const REGION ='eu-central-1';


AWS.config.update({
    accessKeyId: 'AKIAVB5RGJ3ADZMXXRXI',
    secretAccessKey: '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'
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
})


export default (() => {
	// form la subscription
	// [{email:"test"},{email:"test"},{email:"test"}]
	const [username,setUsername] = useState(" ");
	const [email,setEmail] = useState(" ");
	const [password,setPassword] = useState(" ");
	const [age, setAge] = useState(0);
	const [img,setImg] = useState(null);
	const [phone, setPhone] = useState(" ");
	const [loginFalse, setLoginFalse] = useState(false);
	const [registeFalse,setRegisterFalse] = useState(false);
	const history = useHistory();
	const [ valueRank, setValue] = useState("");
	useEffect(() =>{
		const initClient = () => {
			gapi.client.init({
				clientId: clientId,
				scope: ''
			});
		};
		gapi.load('client:auth2', initClient);
	},[loginFalse, registeFalse]);
	const [progress , setProgress] = useState(0);

	async function handleSubmitRegister(){
		console.log(img.name);
		const params = {
			ACL: 'public-read',
			Body: img,
			Bucket: S3_BUCKET,
			Key: img.name
		};
	
		myBucket.putObject(params)
			.on('httpUploadProgress', (evt) => {
				setProgress(Math.round((evt.loaded / evt.total) * 100))
			})
			.send((err) => {
				if (err) console.log(err)
			})
		const uid = "1" + (new Date().getFullYear()) + (new Date().getMonth()) + (new Date().getHours()) + (new Date().getMinutes()) + (new Date().getSeconds());
		console.log(uid);
		const response = await AuthService.registerUser(username, email,password,1011, age,"https://mydoctorbucket.s3.eu-central-1.amazonaws.com/profilePhotos/" + img.name,uid,valueRank,phone);
		console.log(response);
		if(response){
			console.log("user logged");
			console.log(response);
			AuthService.handleLoginSucces(response._id,response.role,response.uid,response.rank);
			if(valueRank == "Premium")
			{
				const stripe = await getStripe();
				const {error} = await stripe.redirectToCheckout({
					lineItems: [
						{
							price: 'price_1Mj4PFBnnFZXFBWvbLzsaSVm',
							quantity:1,
						}
					],
					mode: 'subscription',
					successUrl: `http://localhost:3001/client`,
					cancelUrl: `http://localhost:3000/cancel`,
					customerEmail: email,
				})
			}
			history.push("/client");
		}else{
			if(loginFalse == true && response == false){
				setLoginFalse(false);
				setLoginFalse(true);
				setRegisterFalse(false);
				setRegisterFalse(true);
			}else{
				setLoginFalse(true);
				setRegisterFalse(true);
			}
		}
	}

	const handleFileInput = (e) => {
		setImg(e.target.files[0]);
	}

	const responseGoogle = async (res) => {
		const responseUserExistOnDataBase = await AuthService.doLoginFacebookGoogle(res.profileObj.email);
		if(responseUserExistOnDataBase){
			console.log("user logged");
			AuthService.handleLoginSucces(res._id,res.role,res.uid);
			history.push("/client");
		}else{
			const response = await AuthService.registerUser(res.profileObj.name, res.profileObj.email,"test",1011);
			console.log(response);
			if(response){
				console.log("user logged");
				AuthService.handleLoginSucces(response._id,response.role,response.uid);
				history.push("/client");
			}
		}
    };

	const responseFacebook = async (response) => {
		const responseUserExistOnDataBase = await AuthService.doLoginFacebookGoogle(response.id);
		if(responseUserExistOnDataBase){
			console.log("user logged");
			AuthService.handleLoginSucces(response._id,response.role,response.uid);
			history.push("/client");
		}else{
			const res = await AuthService.registerUser(response.name, response.id,"test",1011);
			if(res){
				console.log("user logged");
				AuthService.handleLoginSucces(res._id,res.role,res.uid);
				history.push("/client");
			}
		}
	}
	
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"register"} />
		<Helmet>
			<title>
				Register
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		{ registeFalse && <Modal>Hello worlds</Modal>}
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
			</Box>
		</Section>
		<Section background="--color-light" color="--dark" padding="64px 0 64px 0">
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box width="100%" padding="8px 8px 8px 8px" lg-width="100%">
					<Box>
						<Formspree endpoint="xeqpgrlv">
							<Box
								gap="16px"
								display="flex" 
								flex-direction="row"
								lex-wrap="wrap"
								grid-template-columns="repeat(2, 1fr)"
								grid-gap="16px"
							>
								<Box
									gap="16px"
									display="grid"
									margin="40px"
									flex-direction="row"
									flex-wrap="wrap"
									grid-template-columns="repeat(2, 1fr)"
									grid-gap="16px"
								>
									<Text font="--base" margin="0 0 4px 0">
										Username
									</Text>
									<Input width="100%" type="email" name="email" onChange={(event)=> setUsername(event.target.value) } />
									<Text font="--base" margin="0 0 4px 0">
										Email
									</Text>
									<Input width="100%" type="email" name="email" onChange={(event)=> setEmail(event.target.value) } />
									<Text font="--base" margin="0 0 4px 0">
										Password
									</Text>
									<Input width="100%" type="password" onChange={(event) => setPassword(event.target.value) } />
									<Text font="--base" margin="0 0 4px 0">
										Age
									</Text>
									<Input width="100%" type="number" onChange={(event) => setAge(event.target.value) }  />
									<Text font="--base" margin="0 0 4px 0">
										Image
									</Text>
									<Input width="100%" type="file" onChange={handleFileInput} />
									<Text font="--base" margin="0 0 4px 0">
										Phone
									</Text>
									<Input width="100%" type="text" onChange={(event) => setPhone(event.target.value) }  />
									<Text font="--base" margin="0 0 4px 0">
										Plan & Bills
									</Text>
									<select  onChange={(e) => { setValue(e.target.value) }}>
										<option></option>
										<option>Standard</option>
										<option>Premium</option>
									</select>
									<p></p>
								</Box>
								<Box
									display="flex"
									grid-template-columns="repeat(3, 1fr)"
									grid-gap="16px"
									lg-grid-template-columns="repeat(2, 1fr)"
									md-grid-template-columns="1fr"
								>
									<Box
										padding="50px 55px 0px 55px"
										sm-padding="55px 40px 50px 55px"
										border-width="1px"
										border-style="solid"
										border-radius="24px"
										border-color="black"
										display="flex"
										flex-direction="column"
										align-items="flex-start"
									>
										<h3> STANDARD </h3>
										<p></p>
										<p></p>
										<h9> ALL THE TIME </h9>
										<p></p>
										<p></p>
										<div style={{borderTop: "1px solid black", width: "100%"}}></div>
										<p></p>
										<p></p>
										<h9>Clients informations</h9>
										<p></p>
										<p></p>
										<h9>Doctor informations</h9>
										<p></p>
										<p></p>
										<h9>Chat with the client directly</h9>
										<h8>from the site</h8>
										<p></p>
										<p></p>
									</Box>
								</Box>
								<Box
									display="flex"
									grid-template-columns="repeat(3, 1fr)"
									grid-gap="16px"
									lg-grid-template-columns="repeat(2, 1fr)"
									md-grid-template-columns="1fr"
									margin-left="20px"
								>
									<Box
										padding="50px 55px 0px 55px"
										sm-padding="55px 40px 50px 55px"
										border-width="1px"
										border-style="solid"
										border-radius="24px"
										border-color="black"
										display="flex"
										flex-direction="column"
										align-items="flex-start"
									>
										<h3> PREMIUM </h3>
										<p></p>
										<p></p>
										<h9> ONCE AT MONTH FOR 30$ </h9>
										<p></p>
										<p></p>
										<div style={{borderTop: "1px solid black", width: "100%"}}></div>
										<p></p>
										<p></p>
										<h9>Some admin functionality</h9>
										<p></p>
										<p></p>
										<h9>Medicine informations</h9>
										<p></p>
										<p></p>
										<h8>Schedule for the doctor</h8>
										<p></p>
										<p></p>
										<p></p>
										<p></p>										
									</Box>
								</Box>
							</Box>
							
						</Formspree>
					</Box>
					<Button variant="btn btn-success" type="submit" onClick={() => handleSubmitRegister()}>
						Register
					</Button>
                    <p></p>
					<GoogleLogin
						clientId={clientId}
						buttonText="Sign in with Google"
						onSuccess={responseGoogle}
						cookiePolicy={'single_host_origin'}
      				/>
					<FacebookLogin
						appId="756012255673248"
						fields="name,email,picture"
						scope="public_profile,user_friends"
						callback={responseFacebook}
						icon="fa-facebook"
						size="small"
					/>
					<p></p>
					<Link href="/login" color="#000000">
						Already an account? Click here...
					</Link>
				</Box>
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
		<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
		<RawHtml>
			<style place={"endOfHead"} rawKey={"62de926f5e5c6e002154effc"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});