import React, { useEffect } from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Input, Button, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree, SocialMedia } from "@quarkly/components";
import AuthService from "./../services/AuthService";

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';

import { useHistory } from "react-router-dom";


const clientId = '201032838761-8q1ri414vi1lq8ve4bdvs8bfjeuda7bk.apps.googleusercontent.com';

export default (() => {
	// form la subscription
	// [{email:"test"},{email:"test"},{email:"test"}]
	const history = useHistory();
	useEffect(() =>{
		const initClient = () => {
			gapi.client.init({
				clientId: clientId,
				scope: ''
			});
		};
		gapi.load('client:auth2', initClient);
	});

	async function handleSubmitRegister(){
		const response = await AuthService.registerUser("Arianna", "Arianna@gmail.com","test",1011);
		if(response){
			console.log("user logged");
			AuthService.handleLoginSucces(response._id);
			history.push("/client");
		}else{
			alert("please check your credentials");
		}
	}

	const responseGoogle = async (res) => {
		const responseUserExistOnDataBase = await AuthService.doLoginFacebookGoogle(res.profileObj.email);
		if(responseUserExistOnDataBase){
			console.log("user logged");
			AuthService.handleLoginSucces(res._id,res.role);
			history.push("/client");
		}else{
			const response = await AuthService.registerUser(res.profileObj.name, res.profileObj.email,"test",1011);
			console.log(response);
			if(response){
				console.log("user logged");
				AuthService.handleLoginSucces(response._id,response.role);
				history.push("/client");
			}
		}
    };

	const responseFacebook = async (response) => {
		const responseUserExistOnDataBase = await AuthService.doLoginFacebookGoogle(response.id);
		if(responseUserExistOnDataBase){
			console.log("user logged");
			AuthService.handleLoginSucces(response._id,response.role);
			history.push("/client");
		}else{
			const res = await AuthService.registerUser(response.name, response.id,"test",1011);
			if(res){
				console.log("user logged");
				AuthService.handleLoginSucces(res._id,res.role);
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
				<Box width="50%" padding="8px 8px 8px 8px" lg-width="100%">
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
									Email
								</Text>
								<Input width="100%" type="email" name="email" />
								<Text font="--base" margin="0 0 4px 0">
									Password
								</Text>
								<Input width="100%" type="password" name="email" />
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