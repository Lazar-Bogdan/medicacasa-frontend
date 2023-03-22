import React, {useEffect,useState} from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image, Hr, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia, Formspree } from "@quarkly/components";
import GetMedicineService from "services/GetMedicineService";
import { Button } from "@quarkly/widgets/build/cjs/prod";

import AuthService from "services/AuthService";
import { useHistory } from "react-router-dom";
import CometChat from "services/CometChat";
import NavbarLink from "./NavbarLink";
import NavBarLinkOnPage from "./NavBarLinkOnPage.js"; 
import {motion, useAnimation, AnimatePresence} from "framer-motion";

export default (() => {
	const history = useHistory();
	const [hover, setHover] = React.useState(null);
	const [typeButton,setTypeButton] = useState(0);
	const [disableButtons, setDisableButtons] = useState(true);


	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 2011){
		history.push("/doctor")
	}

	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 3011){
		history.push("/adminpage")
	}

	if(!AuthService.handleGetLoginStatus()){
		history.push("/");
	}

	const [medicine, setMedicine] = useState([]);
	const [query, setQuery] = useState("");
	const[visible, setVisible] = useState(1000);
	const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    };
	useEffect( () =>{
        getMedicine();
		if(AuthService.handleGetRank() == "Standard"){
			setDisableButtons(true);
		}
    }, [])

	async function getMedicine(){
		const response = await GetMedicineService.getAllMedicine();
		if(response){
			console.log(response);
			setMedicine(response);
		}
	}

	function seeMoreInfo(id){
		history.push('/medicineInfo/'+id);
	}

	function MapMeds(List){
		if(!List){List=[];}
		const Filtered = List.slice(0, visible).map((item) =>
			<div marginRight="10px">
				<Box
				padding="50px 55px 50px 55px"
				border-width="1px"
				border-style="solid"
				border-radius="30px"
				border-color="--color-lightD2"
				display="flex"
				flex-direction="column"
				marginRight="10px"
				margin="10px"
				>
					<Image src={item.img} margin="0px 0px 2px 0px" height="150px" width="150px" />
					<Text
						justifyContent="center"
						alignItems="center"
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						marginRight="10px"
					>
						{item.name}
					</Text>
					<Text
						justifyContent="center"
						alignItems="center"
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						{item.price} $
					</Text>
					<Button onClick={() => seeMoreInfo(item._id)} 
						onMouseOver={() => setHover(item._id)}
						onMouseOut={() => setHover(null)}
						style={{
							backgroundColor: hover === item._id ? 'white' : 'black',
							color: hover === item._id? 'black' : 'white',
							border: '2px solid black'
						}}
						disabled={disableButtons}
	  				>
						More information
					</Button>
				</Box>
			</div>
        );
        return Filtered;
	}

	function MapMedsRandPremium(List){
		if(!List){List=[];}
		const Filtered = List.slice(0, visible).map((item) =>
			<div marginRight="10px">
				<Box
				padding="50px 55px 50px 55px"
				border-width="1px"
				border-style="solid"
				border-radius="30px"
				border-color="--color-lightD2"
				display="flex"
				flex-direction="column"
				marginRight="10px"
				margin="10px"
				>
					<Image src={item.img} margin="0px 0px 2px 0px" height="150px" width="150px" />
					<Text
						justifyContent="center"
						alignItems="center"
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						marginRight="10px"
					>
						{item.name}
					</Text>
					<Text
						justifyContent="center"
						alignItems="center"
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						{item.price} $
					</Text>
					<Button onClick={() => seeMoreInfo(item._id)} 
						onMouseOver={() => setHover(item._id)}
						onMouseOut={() => setHover(null)}
						style={{
							backgroundColor: hover === item._id ? 'white' : 'black',
							color: hover === item._id? 'black' : 'white',
							border: '2px solid black'
						}}
	  				>
						More information
					</Button>
				</Box>
			</div>
        );
        return Filtered;
	}

	
	  
	const ItemList = ({ items, query }) => {
		const filteredItems = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
		return (
			<div>
			{filteredItems.map((item, index) => (
				<div marginRight="10px">
				<Box
				padding="50px 55px 50px 55px"
				border-width="1px"
				border-style="solid"
				border-radius="30px"
				border-color="--color-lightD2"
				display="flex"
				flex-direction="column"
				marginRight="10px"
				margin="10px"
				>
						<Image src={item.img} margin="0px 0px 2px 0px" height="150px" width="150px" />
						<Text
							justifyContent="center"
							alignItems="center"
							margin="0px 0px 35px 0px"
							color="--dark"
							font="--lead"
							lg-margin="0px 0px 50px 0px"
							sm-margin="0px 0px 30px 0px"
							marginRight="10px"
						>
							{item.name}
						</Text>
						<Text
							justifyContent="center"
							alignItems="center"
							margin="0px 0px 35px 0px"
							color="--dark"
							font="--lead"
							lg-margin="0px 0px 50px 0px"
							sm-margin="0px 0px 30px 0px"
							flex="1 0 auto"
						>
							{item.price} $
						</Text>
						<Button onClick={() => seeMoreInfo(item._id)} 
							onMouseOver={() => setHover(item._id)}
							onMouseOut={() => setHover(null)}
							style={{
								backgroundColor: hover === item._id ? 'white' : 'black',
								color: hover === item._id? 'black' : 'white',
							}}
							disabled={disableButtons}
							>
							More information
						</Button>
					</Box>
		  		</div>
			))}
			</div>
		);
	};

	const handleQueryChange = (event) => {
		setQuery(event.target.value);
	}

	const filteredItemsSearchBar = medicine.filter((item) => 
		item.name.toLowerCase().includes(query.toLowerCase())
	);

	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"medicine"} />
		<Helmet>
			<title>
				Medicine
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
							<NavBarLinkOnPage style={{"background-color": "white" }} href="/medicine">Medicine</NavBarLinkOnPage>
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
							<NavbarLink href="/mydoctor">My Doctor</NavbarLink>
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
		{AuthService.handleGetRank() == "Standard" ? (
			<div style={{ 
				display: "flex", 
				flexDirection: "column", 
				justifyContent: "center", 
				alignItems: "center", 
				textAlign: "center",
			}}>
				<h1>Please upgrade to premium</h1>
			</div>
		) : (
			<div>

			</div>
		)}
		<div className="content" style={{ 
			filter: AuthService.handleGetRank() == "Premium"  ? "" : "blur(5px)", 
			display: "flex", 
			flexDirection: "column", 
			justifyContent: "center", 
			alignItems: "center", 
			textAlign: "center" 
		}}>
			{AuthService.handleGetRank() == "Premium" ? (
				<div>
					<Section padding="80px 0 80px 0">
						<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
						<Box
							display="flex"
							align-items="center"
							flex-direction="column"
							justify-content="center"
							margin="0px 0px 56px 0px"
							width="100%"
							sm-margin="0px 0px 30px 0px"
						>
							<Text
								margin="0px 0px 16px 0px"
								color="--dark"
								font="--headline1"
								text-align="center"
								sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
							>
								Medicine
							</Text>
							<Formspree endpoint="xeqpgrlv">
								<Input width="100%" placeholder="Search..." value={query} onChange={handleQueryChange} />
							</Formspree>

						</Box>

						{MapMedsRandPremium(filteredItemsSearchBar)}
					</Section>
				</div>
			) : (
				<div>
					
					<Section padding="80px 0 80px 0">
						<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
						<Box
							display="flex"
							align-items="center"
							flex-direction="column"
							justify-content="center"
							margin="0px 0px 56px 0px"
							width="100%"
							sm-margin="0px 0px 30px 0px"
						>
							<Text
								margin="0px 0px 16px 0px"
								color="--dark"
								font="--headline1"
								text-align="center"
								sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
							>
								Medicine
							</Text>
						</Box>
						{MapMeds(medicine)}
					</Section>

				</div>
			)}
			
		</div>
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

