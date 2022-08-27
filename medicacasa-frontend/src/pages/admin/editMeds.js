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

    async function handleEditClient(id){
        const response = await GetMedicineService.editMed(id,name,price,description,img);
        if(response){
            alert("med edited");
            history.push('/adminpage');
        }
    }

    function MapMeds(List){
		if(!List){List=[];}
		const Filtered = List.slice(0, visible).map((item) =>
            <Structure cells-number-total="1" cells-number-group="3">
            <Override slot="Content" grid-template-columns="9fr 3fr" md-grid-template-columns="repeat(6, 2fr)" sm-grid-template-columns="12fr">
                <Override
                slot="Cell 0th"
                grid-column="1 / auto"
                grid-row="auto / span 2"
                md-grid-column="1 / span 6"
                md-grid-row="span"
                sm-grid-column="auto"
                sm-grid-row="span"
                position="relative"
                />
                <Override slot="Cell 1st" md-grid-column="1 / span 3" sm-grid-column="auto" />
                <Override slot="Cell 2nd" md-grid-column="4 / span 3" sm-grid-column="auto" />
                <Override slot="cell-0">
                <Input
                    display="block"
                    placeholder-color="LightGray"
                    background="white"
                    position="relative"
                    right="-100px"
                    placeholder='Name'
                    name="name"
                    value={item.name}
                    onChange={(event) => setName(event.target.value) }
                />
                <Input
                    display="block"
                    placeholder-color="LightGray"
                    background="white"
                    position="relative"
                    right="-100px"
                    top="10px"
                    name="price"
                    type="number"
                    placeholder='price'
                    value={item.price}
                    onChange={(event) => setPrice(event.target.value) }
                />
                <Input
                    display="block"
                    placeholder-color="LightGray"
                    background="white"
                    position="relative"
                    right="-100px"
                    top="15px"
                    placeholder='description'
                    value={item.description}
                    onChange={(event) => setDescription(event.target.value) }
                />
                <Input
                    display="block"
                    placeholder-color="LightGray"
                    background="white"
                    position="relative"
                    right="-100px"
                    top="20px"
                    readOny="true"
                    value={item.img}
                    onChange={(event) => setImg(event.target.value) }
                />
                <Text margin="0px 0px 0px 0px" position="relative" top="-145px">
                    Name:
                </Text>
                <Text margin="0px 0px 0px 0px" position="relative" top="-125px">
                    Price:
                </Text>
                <Text margin="0px 0px 0px 0px" position="relative" top="-100px">
                    Description :
                </Text>
                <Text margin="0px 0px 0px 0px" position="relative" top="-80px">
                    Img URL:
                </Text>
                <Button position="relative" top="-210px" top="-120px" right="-500px" onClick={() => handleEditClient(item._id)}>
                    Edit client
                </Button>
                </Override>
                                            
            </Override>
            </Structure> 
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