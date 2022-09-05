import React,{useEffect,useState} from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section,Structure,Image, Hr, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { RawHtml, Override, SocialMedia, Formspree } from "@quarkly/components";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Button } from "@quarkly/widgets/build/cjs/prod";

import { useHistory } from "react-router-dom";
import DoctorService from "services/DoctorService";
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
  
  const[username,setUsername]=useState(" ");
  const[email,setEmail]=useState(" ");
  const[Password,setPassword]=useState(" ");
  const[Role,setRole]=useState(2011);
  const[age,setAge]=useState(" ");
  const[img,setImg]=useState(" ");
  const[FirstDesc,set1Desc]=useState(" ");
  const[SecondDesc, set2Desc]=useState(" ");

  async function handleAddClient(){
    const response = await DoctorService.addDoctor(username,email,Password,Role,age,img,FirstDesc,SecondDesc);
    if(response){
      alert("doctor created");
      history.push('/clientlist');
    }else{
      alert("check credentials");
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'role':
        setRole(value);
        break;
      case 'age':
        setAge(value);
        break;
      case 'img':
        setImg(value);
        break;
      default:
        console.log("not set");
    }
  };

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
                    href="/addsubscription"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                >Add new Subscription</Link>
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
    <Section background="--color-light" color="--dark" padding="64px 0 64px 0">
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box width="50%" padding="8px 8px 8px 8px" lg-width="100%">
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
								<Text margin="0px 0px 0px 0px" position="relative" >
                  Username:
                </Text>
                <Input width="100%" type="text" name="username" placeHolder="Username" onChange={(event) => setUsername(event.target.value) } />
                <Text margin="0px 0px 0px 0px" position="relative" >
                  Email:
                </Text>
                <Input width="100%" type="email" name="email" placeHolder="Email" onChange={(event) => setEmail(event.target.value) } />
                <Text margin="0px 0px 0px 0px" position="relative" >
                  Password:
                </Text>
                <Input width="100%" type="password" name="password" placeHolder="Password" onChange={(event) => setPassword(event.target.value) } />
                <Text margin="0px 0px 0px 0px" position="relative" >
                  Role:
                </Text>
                <Input width="100%" type="text" name="Role" value="2011"/>
                <Text margin="0px 0px 0px 0px" position="relative" >
                  Age:
                </Text>
                <Input width="100%" type="text" name="age" placeHolder="Age" onChange={(event) => setAge(event.target.value) } />
                <Text margin="0px 0px 0px 0px" position="relative" >
                1. Description:
                </Text>
                <Input width="100%" type="text" name="1Desc" placeHolder="1. Description" onChange={(event) => set1Desc(event.target.value) } />
                <Text margin="0px 0px 0px 0px" position="relative" >
                2. Description:
                </Text>
                <Input width="100%" type="text" name="2Desc" placeHolder="2. Description" onChange={(event) => set2Desc(event.target.value) } />
                <Text margin="0px 0px 0px 0px" position="relative" >
                  Img URL:
                </Text>
                <Input width="100%" type="text" name="img" placeHolder="IMG URL" onChange={(event) => setImg(event.target.value) } />
                <Button variant="btn btn-success" type="submit" onClick={() => handleAddClient()}>
                  Add Doctor
                </Button>
							</Box>
						</Formspree>
					</Box>
				</Box>
			</Box>
		</Section>
  </Theme>

});