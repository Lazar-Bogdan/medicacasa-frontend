import React,{useEffect,useState} from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section,Structure,Image, Hr, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Button } from "@quarkly/widgets/build/cjs/prod";

import UserService from "services/UserService";
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
    const[username,setUsername]=useState(false);
    const[email,setEmail]=useState(" ");
    const[Password,setPassword]=useState(" ");
    const[Role,setRole]=useState(" ");
    const[age,setAge]=useState(" ");
    const[img,setImg]=useState(" ");

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
            console.log(response);
            setClient(response);
        }
	}

    async function handleEditClient(id){
        const response = await UserService.editUser(id,username,email,Password,Role,age,img);
        if(response){
            alert("user edited");
            history.push('/clientlist');
        }else{
            alert("check fields");
        }
    }

    function MapClient(List){
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
                    name="username"
                    value={item.username}
                    onChange={(event) => setUsername(event.target.value) }
                />
                <Input
                    display="block"
                    placeholder-color="LightGray"
                    background="white"
                    position="relative"
                    right="-100px"
                    top="10px"
                    name="email"
                    placeholder='email'
                    value={item.email}
                    onChange={(event) => setEmail(event.target.value) }
                />
                <Input
                    display="block"
                    placeholder-color="LightGray"
                    background="white"
                    position="relative"
                    right="-100px"
                    top="15px"
                    placeholder='Password'
                    value={item.password}
                    onChange={(event) => setPassword(event.target.value) }
                />
                <Input
                    display="block"
                    placeholder-color="LightGray"
                    background="white"
                    position="relative"
                    right="-100px"
                    top="20px"
                    type="number"
                    value={item.role}
                    readOny="true"
                    onChange={(event) => setRole(event.target.value) }
                />
                <Input
                    display="block"
                    placeholder-color="LightGray"
                    background="white"
                    position="relative"
                    right="-100px"
                    top="25px"
                    placeholder='Age'
                    value={item.age}
                    onChange={(event) => setAge(event.target.value) }
                />
                <Input
                    display="block"
                    placeholder-color="LightGray"
                    background="white"
                    position="relative"
                    right="-100px"
                    top="25px"
                    placeholder='Img URL'
                    value={item.img}
                    onChange={(event) => setImg(event.target.value) }
                />
                <Text margin="0px 0px 0px 0px" position="relative" top="-230px">
                    Username:
                </Text>
                <Text margin="0px 0px 0px 0px" position="relative" top="-207px">
                    Email:
                </Text>
                <Text margin="0px 0px 0px 0px" position="relative" top="-184px">
                    Password:
                </Text>
                <Text margin="0px 0px 0px 0px" position="relative" top="-162px">
                    Role:
                </Text>
                <Text margin="0px 0px 0px 0px" position="relative" top="-142px">
                    Age:
                </Text>
                <Text margin="0px 0px 0px 0px" position="relative" top="-125px">
                    Img URL:
                </Text>
                <Button position="relative" top="-210px" top="-225px" right="-500px" onClick={() => handleEditClient(item._id)}>
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
        <Section>
            <Box
            display="flex"
            padding="12px 0"
            justify-content="space-between"
            align-items="center"
            flex-direction="row"
            md-flex-direction="column"
            >
                <Link
                    href="/clientlist"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                >All type Users</Link>
                <Link
                    href="/addnewclient"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                >Add new Client</Link>
                <Link
                    href="/addnewdoctor"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                >Add new Doctor</Link>
            </Box>
        </Section>
        {MapClient(client)} 
    </Theme>

});