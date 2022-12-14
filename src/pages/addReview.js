import React, {useEffect,useState} from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import { Button } from "@quarkly/widgets/build/cjs/prod";

import GetMedicineService from "services/GetMedicineService";
import { useHistory } from "react-router-dom";

export default (() => {
	const history = useHistory();

	function review(){
		history.push('/reviewpage');
	}

	const [medicine, setMedicine] = useState([]);
	const[visible, setVisible] = useState(6);
	useEffect( () =>{
		getMedicine();
    }, [])

	async function getMedicine(){
		const response = await GetMedicineService.getAllMedicine();
		if(response){
			//console.log(response);
			setMedicine(response);
		}
	}

	function MapMeds(List){
		if(!List){List=[];}
		const Filtered = List.slice(0, visible).map((item) =>
			<Box
			padding="50px 55px 50px 55px"
			sm-padding="55px 40px 50px 55px"
			border-width="1px"
			border-style="solid"
			border-radius="24px"
			border-color="--color-lightD2"
			display="flex"
			flex-direction="column"
			align-items="flex-start"
			>
				<Image src={item.img} margin="0px 0px 2px 0px" height="150px" width="150px" />
				<Text
					margin="0px 0px 35px 0px"
					color="--dark"
					font="--lead"
					lg-margin="0px 0px 50px 0px"
					sm-margin="0px 0px 30px 0px"
					flex="1 0 auto"
				>
					{item.name}
				</Text>
				<Text
					margin="0px 0px 35px 0px"
					color="--dark"
					font="--lead"
					lg-margin="0px 0px 50px 0px"
					sm-margin="0px 0px 30px 0px"
					flex="1 0 auto"
				>
					{item.price} $
				</Text>
				<Button type="submit" onClick={() => review()}>Add Review</Button>
			</Box>
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
                    href="/review"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                    
                >Add review</Link>
                
                <Link
					href="/logout"
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
		{MapMeds(medicine)}
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