import React, {useEffect,useState} from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image, Hr, Input} from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia, Formspree } from "@quarkly/components";

import URL from "../services/BackEndURL";
import axios from "axios";
import { List } from "@quarkly/widgets/build/cjs/prod";
import { useHistory } from "react-router-dom";
import AuthService from "./../services/AuthService";
import CometChat from "services/CometChat";
import NavBarLinkOnPage from "./NavBarLinkOnPage.js"; 
import {motion, useAnimation, AnimatePresence} from "framer-motion";
import NavbarLink from "./NavbarLink";
import NavbarButton from "./Button"

import CalculatorSerivice from "services/CalculatorSerivice";

import Modal from "./popups/model"
import getStripe from "./getStripe";

const clientId = '201032838761-8q1ri414vi1lq8ve4bdvs8bfjeuda7bk.apps.googleusercontent.com';


export default(() => {
    const city = [
        {
            id:"Timisoara"
        },
        {
            id:"Arad"
        },
        {
            id:"Bucuresti"
        },
        {
            id:"Iasi"
        },
        {
            id:"Constanta"
        },
        {
            id:"Craiova"
        }
    ]
    const[visible, setVisible] = useState(40);

	const[outputCountry,setOutputCountry] = useState("");
    const[outputCity,setoutputCity] = useState("");
	const[outputCardiology,setoutputCardiology] = useState([{place:"",price:""}]);
    const[outputSurgery,setoutputSurgery] = useState([{place:"",price:""}]);
	const[outputInternal,setoutputInternal] = useState([{place:"",price:""}]);
	const[email,setEmail] = useState("");
    function getCity()
    {
        const Filtered = city.slice(0, visible).map((item)=>
            {
                return <option value={item.id}>{item.id}</option>
            }
        );
    
        return Filtered;
    }

	async function getCalculatorCardiology(cardiologyType)
	{
		if(outputCity === "" || outputCountry === "")
		{
			return;
		}else{
			let response = await CalculatorSerivice.getCalculatorUnderCountryCityCardiology(outputCountry,outputCity,cardiologyType);
			if(response)
			{
				console.log(response);
				setoutputCardiology(response);
			}
		}
	}

	async function getCalculatorGeneralSurgery(generalsurgerytype)
	{
		if(outputCity === "" || outputCountry === "")
		{
			return;
		}else{
			let response = await CalculatorSerivice.getCalculatorUnderCountryCityGeneralSurgery(outputCountry,outputCity,generalsurgerytype);
			if(response)
			{
				console.log(response);
				setoutputSurgery(response);
			}
		}
	}

	async function getCalculatorInternalMedicine(internalmedicinetype)
	{
		if(outputCity === "" || outputCountry === "")
		{
			return;
		}else{
			let response = await CalculatorSerivice.getCalculatorUnderCountryCityInternalMedicine(outputCountry,outputCity,internalmedicinetype);
			if(response)
			{
				console.log(response);
				setoutputInternal(response);
			}
		}
	}

    const history = useHistory();

    if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 2011){
		history.push("/doctor")
	}

	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 3011){
		history.push("/adminpage")
	}
	if(!AuthService.handleGetLoginStatus()){
		history.push("/");
	}

	async function handleSubmitPayment()
	{
		const stripe = await getStripe();
		const priceAmm = (parseInt(outputCardiology[0].price)+ parseInt(outputSurgery[0].price)+ parseInt(outputInternal[0].price)).toString();
		console.log("Price amm");
		console.log(outputCardiology[0].price);
		console.log(priceAmm);
		const stripePrice = await stripe.prices.create({
			unit_amount: priceAmm, // Replace with the amount in cents that you want to charge
			currency: 'usd', // Replace with the currency you want to charge in
			product_data: {
				name: 'My Product', // Replace with the name of your product
				description: 'This is my product', // Replace with the description of your product
			},
		});

		const {error} = await stripe.redirectToCheckout({
			lineItems: [
				{
					price: stripePrice.id,
					quantity:1,
				}
			],
			mode: 'subscription',
			successUrl: `http://localhost:3001/client`,
			cancelUrl: `http://localhost:3000/cancel`,
			customerEmail: email,
		})
	}

    const [typeButton,setTypeButton] = useState(0);

    return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"my-doctor"} />
		<Helmet>
			<title>
				My Doctor
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
							<NavbarLink href="/medicine">Medicine</NavbarLink>
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
							<NavBarLinkOnPage style={{"background-color": "white" }} href="/calculator">Calculator</NavBarLinkOnPage>
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
		<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
		<Section padding="80px 0 80px 0">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Box
					padding="50px 55px 50px 55px"
					border-width="1px"
					border-style="solid"
					border-radius="30px"
					border-color="--color-lightD2"
					flex-direction="column"
					marginRight="10px" 

                >
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
									Email:
								</Text>
								<Input width="100%" type="email" name="email" onChange={(event) => setEmail(event.target.value) } />
								<Text font="--base" margin="0 0 4px 0">
									Name:
								</Text>
								<Input width="100%" type="email" name="email" onChange={(event) => console.log("") } />
								<Text font="--base" margin="0 0 4px 0" autocomplete="off">
									Surname:
								</Text>
								<Input width="100%" type="email" name="email" onChange={(event) => console.log("") } autocomplete="off"/>
                                <Text font="--base" margin="0 0 4px 0">
									Country:
								</Text>
                                <select width="100%"   onChange={(e) => { setOutputCountry(e.target.value);  }}>
                                    <option>Select...</option>
									<option value="Romania">Romania</option>
								</select>
                                <Text font="--base" margin="0 0 4px 0">
									City:
								</Text>
                                <select width="100%"   onChange={(e) => { setoutputCity(e.target.value); }}>
                                    <option>Select...</option>
									{getCity()}
								</select>
                                <Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
                                <Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
                                <Text font="--base" margin="0 0 4px 0">
                                    Cardiology:
								</Text>
                                <select width="100%"   onChange={(e) => { getCalculatorCardiology(e.target.value) }}>
									<option>Select...</option>
                                    <option>Monthly Control</option>
                                    <option>Special Consult</option>
									<option>Abdominal ecography</option>
                                    <option>EKG with interpretation</option>
								</select>
                                <Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
                                <Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
                                <Text font="--base" margin="0 0 4px 0">
                                    General Surgery:
								</Text>
                                <select width="100%"   onChange={(e) => { getCalculatorGeneralSurgery(e.target.value); }}>
                                    <option>Select...</option>
									<option>Monthly Control</option>
                                    <option>Control</option>
									<option>Local Anesthesia</option>
                                    <option>Consultation + proctological examination</option>
								</select>
                                <Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
                                <Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
                                <Text font="--base" margin="0 0 4px 0">
                                    Internal Medicine:
								</Text>
                                <select width="100%"   onChange={(e) => { getCalculatorInternalMedicine(e.target.value); }}>
                                    <option>Select...</option>
									<option>Monthly Control</option>
                                    <option>Special Consult</option>
									<option>EKG with interpretation</option>
									<option>Cardiac doppler ultrasound</option>
								</select>
                                
							</Box>
						</Formspree>
					</Box>
                </Box>
                <Box
                    width="300px"
                >
                </Box>
                <Box
					padding="50px 55px 50px 55px"
					border-width="1px"
					border-style="solid"
					border-radius="30px"
					border-color="--color-lightD2"
					flex-direction="column"
					height="100%"
                >
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
									Country:
								</Text>
								<Text font="--base" margin="0 0 4px 0">
									{outputCountry}
								</Text>
								
								<Text font="--base" margin="0 0 4px 0">
									City:
								</Text>
								<Text font="--base" margin="0 0 4px 0">
									{outputCity}
								</Text>
								<Text font="--base" margin="0 0 4px 0">
									Cardiology:
								</Text>
								<Text font="--base" margin="0 0 4px 0">
									{outputCardiology[0].place}
								</Text>
								<Text font="--base" margin="0 0 4px 0">
									Price:
								</Text>
								<Text font="--base" margin="0 0 4px 0">
									{outputCardiology[0].price} $
								</Text>
								<Text font="--base" margin="0 0 4px 0">
									General Surgery:
								</Text>
								<Text font="--base" margin="0 0 4px 0">
									{outputSurgery[0].place}
								</Text>
								<Text font="--base" margin="0 0 4px 0">
									Price:
								</Text>
								<Text font="--base" margin="0 0 4px 0">
									{outputSurgery[0].price} $
								</Text>
								<Text font="--base" margin="0 0 4px 0">
									Internal Medicine:
								</Text>
								<Text font="--base" margin="0 0 4px 0">
									{outputInternal[0].place}
								</Text>
								<Text font="--base" margin="0 0 4px 0">
									Price:
								</Text>
								<Text font="--base" margin="0 0 4px 0">
									{outputInternal[0].price} $
								</Text>
								<Text font="--base" margin="0 0 4px 0">
									Total:
								</Text>
								<Text font="--base" margin="0 0 4px 0">
									{ parseInt(outputCardiology[0].price)+ parseInt(outputSurgery[0].price)+ parseInt(outputInternal[0].price)} $
								</Text>
								<NavbarButton  onClick={() => handleSubmitPayment()}>
									Payment
								</NavbarButton>
							</Box>
						</Formspree>
						
					</Box>
				
					
                </Box>
            </div>
		</Section>
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