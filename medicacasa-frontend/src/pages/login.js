import React, {useState, useEffect, useRef} from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Input, Button, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu, Formspree, SocialMedia } from "@quarkly/components";
import AuthService from "./../services/AuthService";
import { useHistory } from "react-router-dom";

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

import Modal from "./popups/model"

const clientId = '201032838761-8q1ri414vi1lq8ve4bdvs8bfjeuda7bk.apps.googleusercontent.com';

function Login() {
	const [loginFalse,setLoginFalse] = useState(false);
	const history = useHistory();

	useEffect(() =>{
		console.log(loginFalse);
	},[loginFalse]);

	const modalRef = useRef();

	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 1011){
		history.push("/client")
	}

	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 2011){
		history.push("/doctor")
	}

	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 3011){
		history.push("/adminpage")
	}

	const [email, setEmail] = useState(" ");
	const [password,setPassword] = useState(" ");

	async function handleSubmitLogin(){
		let response = await AuthService.doUserLogin(email,password,);
		if(!response){
			response = await AuthService.doDoctorLogin(email,password);
		}
		if(response){
			AuthService.handleLoginSucces(response._id,response.role,response.uid);
			// this.props.history.push("/home");
			if(response.role == 1011){
				history.push("/client");
			}
			if(response.role == 2011){
				history.push("/doctor")
			}
			if(response.role == 3011){
				history.push("/adminpage")
			}
		}else{
			if(loginFalse == true && response == false){
				setLoginFalse(false);
				setLoginFalse(true);
			}else{
				setLoginFalse(true);
			}
		}
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
	return (
		<Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"login"} />
		<Helmet>
			<title>
				Login
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
								<Input width="100%" type="email" name="email" onChange={(event) => setEmail(event.target.value) } />
								<Text font="--base" margin="0 0 4px 0">
									Password
								</Text>
								<Input width="100%" type="password" name="password" onChange={(event) => setPassword(event.target.value) }/>
							</Box>
						</Formspree>
					</Box>
					<Button variant="btn btn-success" type="submit" onClick={() => {handleSubmitLogin();}}>
						Login
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
					<Link href="/register" color="#000000">
						Don't you have an account ? Click here...
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
		{ loginFalse && <Modal>Hello worlds</Modal>}
	</Theme>
	);
}

export default Login;