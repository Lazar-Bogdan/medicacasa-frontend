import React, {useState} from 'react';
import theme from "theme";
import { Theme, Link, Text, Box, Section, Icon, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu, Formspree, SocialMedia } from "@quarkly/components";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import ContactUsService from "./../services/ContactUsService";
import AuthService from "services/AuthService";
import { useHistory } from "react-router-dom";

export default (() => {

	const [name, setName] = useState(" ");
	const [email, setEmail] = useState(" ");
	const [message, setMessage] = useState(" ");

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

	async function handleSubmitForm(){
		const response = await ContactUsService.submitForm(name,email,message);
		if(response){
			console.log("form submitted");
			alert("Form submited");
		}else{
			alert("something is wrong");
		}
	}

	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"contact-us"} />
		<Helmet>
			<title>
				Contact
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
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1547619292-240402b5ae5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80)"
		>
			<Override slot="SectionContent" md-align-items="center" />
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap" width="100%">
				<Box padding="16px 16px 16px 16px" width="50%" md-width="100%">
					<Box sm-display="flex" sm-flex-direction="column" sm-align-items="flex-start">
						<Box
							padding="0 0 0 64px"
							sm-padding="64px 0 0 0"
							margin="32px 0 0 0"
							max-width="360px"
							position="relative"
							sm-display="flex"
							sm-flex-direction="column"
							sm-width="100%"
							sm-max-width="100%"
						>
							<Icon
								position="absolute"
								size="48px"
								top="0"
								left="0"
								category="md"
								icon={MdLocationOn}
							/>
							<Text as="h4" margin="6px 0" font="--base" sm-width="100%">
								Visit us
							</Text>
							<Text as="p" margin="6px 0" font="--headline3" sm-width="100%">
								street
							</Text>
						</Box>
						<Box
							padding="0 0 0 64px"
							sm-padding="64px 0 0 0"
							margin="64px 0 0 0"
							max-width="360px"
							position="relative"
							sm-display="flex"
							sm-flex-direction="column"
							sm-width="100%"
							sm-max-width="100%"
						>
							<Icon
								position="absolute"
								size="48px"
								top="0"
								left="0"
								category="md"
								icon={MdEmail}
							/>
							<Text as="h4" margin="6px 0" font="--base" sm-width="100%">
								Email us
							</Text>
							<Text as="p" margin="6px 0" font="--headline3">
								<Link
									href="mailto:main1@gmail.com"
									text-decoration="none"
									hover-text-decoration="underline"
									color="--light"
									sm-width="100%"
								>
									main1@gmail.com
								</Link>
							</Text>
						</Box>
						<Box
							padding="0 0 0 64px"
							margin="64px 0 0 0"
							max-width="360px"
							position="relative"
							sm-display="flex"
							sm-flex-direction="column"
							sm-width="100%"
							sm-max-width="100%"
							sm-padding="64px 0 0 0"
						>
							<Icon
								position="absolute"
								size="48px"
								top="0"
								left="0"
								category="md"
								icon={MdPhone}
								sm-display="block"
							/>
							<Text as="h4" margin="6px 0" font="--base" sm-width="100%">
								Call us
							</Text>
							<Text as="p" margin="6px 0" font="--headline3" sm-width="100%">
								phone1
								<br />
								phone2
							</Text>
						</Box>
						<Box
							padding="0 0 0 64px"
							sm-padding="0"
							margin="48px 0"
							max-width="360px"
							position="relative"
							display="flex"
						>
							<Icon
								category="fa"
								icon={FaFacebookF}
								width="48px"
								height="48px"
								size="24px"
								margin-right="16px"
								background="--color-primary"
								border-radius="50%"
							/>
							<Icon
								category="fa"
								icon={FaTwitter}
								width="48px"
								height="48px"
								size="24px"
								margin-right="16px"
								background="--color-primary"
								border-radius="50%"
							/>
							<Icon
								category="fa"
								icon={FaLinkedinIn}
								width="48px"
								height="48px"
								size="24px"
								margin-right="16px"
								background="--color-primary"
								border-radius="50%"
							/>
						</Box>
					</Box>
				</Box>
				<Box width="50%" padding="8px 8px 8px 8px" md-width="100%" sm-padding="0px 0px 0px 0px">
					<Box>
						<Box
							max-width="360px"
							padding="56px 48px"
							margin="0 0 0 auto"
							md-max-width="100%"
							background="--color-primary"
							sm-padding="24px 12px 36px 12px"
						>
							<Text
								as="h3"
								font="--headline3"
								margin="0 0 20px 0"
								sm-padding="0px 8px 0px 8px"
								sm-margin="0 0 8px 0"
							>
								Leave us message
							</Text>
							<Formspree endpoint="xeqpgrlv">
								<Box gap="16px" display="flex" flex-direction="row" flex-wrap="wrap">
									<Box padding="8px 8px 8px 8px" width="100%" display="flex" flex-direction="column">
										<Text font="--base" margin="0 0 4px 0">
											Name
										</Text>
										<Input width="100%" name="name" type="text" onChange={(event) => setName(event.target.value) } />
									</Box>
									<Box padding="8px 8px 8px 8px" width="100%" display="flex" flex-direction="column">
										<Text font="--base" margin="0 0 4px 0">
											Email
										</Text>
										<Input width="100%" type="email" name="email" onChange={(event) => setEmail(event.target.value) } />
									</Box>
									<Box padding="8px 8px 8px 8px" width="100%" display="flex" flex-direction="column">
										<Text font="--base" margin="0 0 4px 0">
											Message
										</Text>
										<Input as="textarea" rows="4" width="100%" name="message" onChange={(event) => setMessage(event.target.value) } />
									</Box>
									<Box
										padding="8px 8px 8px 8px"
										width="100%"
										display="flex"
										flex-direction="column"
										align-items="flex-end"
									>
										<Button background="--color-dark" type="submit" onClick={() => handleSubmitForm()}>
											Send
										</Button>
									</Box>
								</Box>
							</Formspree>
						</Box>
					</Box>
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
		<RawHtml>
			<style place={"endOfHead"} rawKey={"62de926f5e5c6e002154effc"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});