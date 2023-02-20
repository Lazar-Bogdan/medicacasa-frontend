import React, {useEffect,useState} from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import GetMedicineService from "services/GetMedicineService";
import { Button } from "@quarkly/widgets/build/cjs/prod";

import AuthService from "services/AuthService";
import { useHistory } from "react-router-dom";
import CometChat from "services/CometChat";
import NavbarLink from "./NavbarLink";

export default (() => {
	const history = useHistory();
	const [hover, setHover] = React.useState(null);
	const [searchQuery, setSearchQuery] = useState('');

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
	const[visible, setVisible] = useState(1000);
	const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    };
	useEffect( () =>{
        getMedicine();
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
						}}
	  				>
						More information
					</Button>
				</Box>
			</div>
        );
        return Filtered;
	}

	const SearchBar = (props) => {
		const [query, setQuery] = useState('');
	  
		const handleInputChange = (event) => {
		  setQuery(event.target.value);
		  console.log('Query:', event.target.value);
		  if (props.onSearch) {
			props.onSearch(event.target.value);
		  }
		};
	  
		return (
		  <Section>
			<Input width="100%" type="text" placeholder="Search..."value={query} onChange={handleInputChange} />
		  </Section>
		);
	  };
	  
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
							>
							More information
						</Button>
					</Box>
		  		</div>
			))}
			</div>
		);
	  };

	const handleSearch = (query) => {
		setSearchQuery(query);
	  };
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"medicine"} />
		<Helmet>
			<title>
				Medicine
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
				<SearchBar onSearch={handleSearch} />
			</Box>
      		{/* <ItemList items={medicine} query={searchQuery} /> */}
			{MapMeds(medicine)}
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
			<style place={"endOfHead"} rawKey={"62def10d21e43d0020976a62"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});