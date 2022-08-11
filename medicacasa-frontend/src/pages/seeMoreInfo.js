import React, {useEffect,useState} from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image, Structure, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import { Button } from "@quarkly/widgets/build/cjs/prod";

import UserService from "services/UserService";

export default(()=>{
	const[client,setClient] = useState([]);
	const[visible,setVisible] = useState(1);
	useEffect( () =>{
		getClient();
	}, [])

	async function getClient(){
		let url = window.location.href;
        // console.log(url);
        let first = url.split("/");
		const response = await UserService.getUsersUnderId(first[4])
        if(response){
            setClient(response);
        }
	}

	function MapClient(List){
		if(!List){List=[];}
		const Filtered = List.slice(0, visible).map((item) =>
			<Structure cells-number-total="9" cells-number-group="9">
				<Override slot="Content" grid-template-columns="repeat(12, 1fr)" sm-grid-template-columns="12fr">
					<Override slot="Cell 0th" grid-column="1 / span 6" md-grid-column="1 / span 12" sm-grid-column="auto" />
					<Override slot="Cell 1st" grid-column="7 / span 6" md-grid-column="1 / span 12" sm-grid-column="auto" />
					<Override
						slot="Cell 2nd"
						grid-column="1 / span 3"
						md-grid-column="1 / span 6"
						sm-grid-column="auto"
						position="relative"
					/>
					<Override slot="Cell 3rd" grid-column="4 / span 3" md-grid-column="7 / span 6" sm-grid-column="auto" />
					<Override slot="Cell 4th" grid-column="7 / span 3" md-grid-column="1 / span 6" sm-grid-column="auto" />
					<Override slot="Cell 5th" grid-column="10 / span 3" md-grid-column="7 / span 6" sm-grid-column="auto" />
					<Override slot="Cell 6th" grid-column="1 / span 4" sm-grid-column="auto" />
					<Override slot="Cell 7th" grid-column="5 / span 4" sm-grid-column="auto" />
					<Override slot="Cell 8th" grid-column="9 / span 4" sm-grid-column="auto" />
					<Override slot="cell-0">
						<Image src={item.img} margin="0px 0px 2px 0px" height="150px" width="150px" display="block" position="relative" right="-100px"/>
					</Override>
					<Override slot="cell-1">
						<Text margin="0px 0px 0px 0px" position="relative" top="50px" right="-150px">
							Name:{item.username}
						</Text>
					</Override>
					<Override slot="cell-2">
						<Text margin="0px 0px 0px 0px" position="relative" right="px">
							Email:{item.email}
						</Text>
					</Override>
					<Override slot="cell-3">
						<Text margin="0px 0px 0px 0px" position="relative" right="-40px">
							Age:{item.age}
						</Text>
					</Override>
					<Override slot="cell-4">
						<Text margin="0px 0px 0px 0px" position="relative" right="-100px">
							Height:{item.height}
						</Text>
					</Override>
					<Override slot="cell-5">
						<Text margin="0px 0px 0px 0px" position="relative" right="-150px">
							Weight:{item.weight}
						</Text>
					</Override>
					<Override slot="cell-6">
						<Text margin="0px 0px 0px 0px" position="relative" right="-150px">
							No. Hearts beat:{item.numberHeart}
						</Text>
					</Override>
					<Override slot="cell-7">
						<Text margin="0px 0px 0px 0px" position="relative" right="-100px">
							Phone number:{item.phone}
						</Text>
					</Override>
					<Override slot="cell-8">
						<Text margin="0px 0px 0px 0px" position="relative" right="-100px">
							Other diseases: {item.diseases}
						</Text>
					</Override>
																								
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
		<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
		<Text margin="0px 0px 0px 0px" position="relative" right="-100px">
			Last update:
			<p></p>
		</Text>
		<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
		{MapClient(client)}
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