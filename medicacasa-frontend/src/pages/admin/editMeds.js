import React,{useEffect,useState} from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section,Structure,Image, Hr, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Button } from "@quarkly/widgets/build/cjs/prod";

import GetMedicineService from "services/GetMedicineService";

import { useHistory } from "react-router-dom";
import AuthService from "services/AuthService";

export default (() => {
    const history = useHistory();

	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 1011){
		history.push("/client")
	}

	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 2011){
		history.push("/doctor")
	}

    if(!AuthService.handleGetLoginStatus()){
        history.push("/")
    }
    const[name,setName]=useState(" ");
    const[price,setPrice]=useState(" ");
    const[description,setDescription]=useState(" ");
    const[img,setImg]=useState(" ");

	const[visible,setVisible] = useState(1);
    const[med,setMeds] = useState([]);
	useEffect( () =>{
        getMed();
	}, [])

    async function getMed(){
        let url = window.location.href;
        // console.log(url);
        let first = url.split("/");
		const response = await GetMedicineService.getMedsById(first[4])
        if(response){
            setMeds([response]);
        }
    }

    async function handleEditMed(id){
        const response = await GetMedicineService.editMed(id,name,price,description,img);
        if(response){
            alert("med edited");
            history.push('/adminpage');
        }
    }

    function MapMeds(List){
		if(!List){List=[];}
		const Filtered = List.slice(0, visible).map((item) =>
            <Section background="--color-light" color="--dark" padding="64px 0 64px 0">
                <Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
                    <Box width="50%" padding="8px 8px 8px 8px" lg-width="100%">
                        <Box>
                                <Box
                                    gap="16px"
                                    display="grid"
                                    flex-direction="row"
                                    flex-wrap="wrap"
                                    grid-template-columns="repeat(2, 1fr)"
                                    grid-gap="16px"
                                >
                    <Text margin="0px 0px 0px 0px" position="relative" >
                    Name:
                    </Text>
                    <Input
                    display="block"
                    placeholder-color="LightGray"
                    background="white"
                    position="relative"
                    placeholder='Name'
                    name="name"
                    onChange={(event) => setName(event.target.value) }
                    />
                    <Text margin="0px 0px 0px 0px" position="relative" >
                    Price:
                    </Text>
                    <Input
                    display="block"
                    placeholder-color="LightGray"
                    background="white"
                    position="relative"
                    name="price"
                    type="number"
                    placeholder='Price'
                    onChange={(event) => setPrice(event.target.value) }
                    />
                    <Text margin="0px 0px 0px 0px" position="relative">
                    Description:
                    </Text>
                    <Input
                    display="block"
                    placeholder-color="LightGray"
                    background="white"
                    position="relative"
                    placeholder='Description'
                    onChange={(event) => setDescription(event.target.value) }
                    />
                    <Text margin="0px 0px 0px 0px" position="relative" >
                    Img URL:
                    </Text>
                    <Input
                    display="block"
                    placeholder-color="LightGray"
                    background="white"
                    position="relative"
                    placeholder='Img URL'
                    onChange={(event) => setImg(event.target.value) }
                    />
                    <Button position="relative" onClick={() => handleEditMed()}>
                    Add Meds
                    </Button>
                                </Box>
                        </Box>
                    </Box>
                </Box>
            </Section>
        );
		return Filtered;
	}

    return  <Theme theme={theme}>
    <GlobalQuarklyPageStyles pageUrl={"index"} />
    <Helmet>
        <title>
        ADM
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
                Admin Page
            </Text>
                <Link
                    href="/clientlist"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                >Clients</Link>
                <Link
                    href="/medlist"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                >Meds</Link>
                <Link
                    href="/appointments"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                >Appointments</Link>
                <Link
                    href="/forms"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                >Forms</Link>
                <Link
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                    href="/logout"
                >Logout</Link>
            </Box>
        </Section>
        <Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
        {MapMeds(med)}
    </Theme>

});