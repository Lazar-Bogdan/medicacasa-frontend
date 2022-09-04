import React, {useEffect,useState} from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image, Structure } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import { Button } from "@quarkly/widgets/build/cjs/prod";

import UserService from "services/UserService";
import { useHistory } from "react-router-dom";
import AuthService from "./../services/AuthService";

import CometChat from "services/CometChat";

export default (() => {
	const history = useHistory();

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
		const response = await UserService.getUserUnderDoctorEmail("Bogdan@gmail.com");
		if(response){
			//console.log(response);
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
						<Button position="relative" right="-200px" top="40px" onClick={() => seeMoreInfo(item._id)} >
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
                    href="/doctor"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                >Home</Link>
                <Link
                    href="/schedule"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                    
                >My schedule</Link>
				<Link
                    href="/myclients"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                    
                >My clients</Link>
                
                <Link
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                    
                >Logout</Link>
			</Box>
		</Section>
		<Section>
			{MapClients(clients)}
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
			<CometChat />
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"62e38af0f913c500201c13a2"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});