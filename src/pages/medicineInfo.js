import React, {useEffect,useState} from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image, Structure, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import { Button } from "@quarkly/widgets/build/cjs/prod";

import { useHistory } from "react-router-dom";
import GetMedicineService from "services/GetMedicineService";
import AuthService from "services/AuthService";
import NavbarLink from "./NavbarLink";

export default(()=>{
	const history = useHistory();

	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 2011){
		history.push("/client")
	}

	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 3011){
		history.push("/adminpage")
	}
	if(!AuthService.handleGetLoginStatus()){
		history.push("/");
	}


	useEffect( () =>{
		getMedicine();
	}, [])
    const [medicine, setMedicine] = useState([]);
	const[visible,setVisible] = useState(1);
	async function getMedicine(){
        let url = window.location.href;
        // console.log(url);
        let first = url.split("/");
		const response = await GetMedicineService.getMedsById(first[4]);
        console.log("backend response : ");
        console.log(response);
        if(response){
            setMedicine(response);
        }
	}

    console.log(medicine);



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
				<NavbarLink href="/client">Home</NavbarLink>
                <NavbarLink href="/medicine">Medicine</NavbarLink>
                <NavbarLink href="/mydoctor">My Doctor</NavbarLink>
                <NavbarLink href="/logout">Logout</NavbarLink>   
			</Box>
		</Section>
		<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
		<div style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			height: '70vh'
		}}>
			<Box width="350px" height="auto" >
				<Image src={medicine.img} width="100%" height="auto" />
				<Text fontSize="20px" fontWeight="600" margin="10px 0"><b>Name: </b>{medicine.name}</Text>
				<Text fontSize="16px" margin="10px 0"><b>Description: </b>{medicine.description}</Text>
				<Text fontSize="18px" fontWeight="600" margin="10px 0"><b>Price: </b>{medicine.price}$</Text>
			</Box>
		</div>
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