import React,{useEffect,useState} from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section,Structure,Image, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Button } from "@quarkly/widgets/build/cjs/prod";

import MyClientsService from "services/MyClientsService";

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
  useEffect( () => {
    getApps();
  },[]);

  const[visible, setVisible] = useState(100);
  const[apps,setApp] = useState([]);

  async function getApps(){
    const response = await MyClientsService.getAllApp();
    if(response){
        setApp(response);
    }
  }

  async function handleRemove(id){
    const response = await MyClientsService.deleteApp(id);
    if(response){
        alert("Appointment deleted");
        history.push('/adminpage');
    }
  }


  function MapApp(List){
		if(!List){List=[];}
		const Filtered = List.slice(0, visible).map((item) =>
            <Structure cells-number-total="3" cells-number-group="3">
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
                    <Text margin="0px 0px 0px 0px" position="relative" >
                    Doctor Email : {item.doctoremail}
                    </Text>
                    <Text margin="0px 0px 0px 0px" position="relative" >
                    Client Email : {item.clients}
                    </Text>
                    <Text margin="0px 0px 0px 0px" position="relative" >
                    Month : {item.month}
                    </Text>
                    <Text margin="0px 0px 0px 0px" position="relative" >
                    Day : {item.day}
                    </Text>
                    <Text margin="0px 0px 0px 0px" position="relative" >
                    Hour : {item.hour}
                    </Text>
                </Override>
                <Override slot="cell-2">
                    <Button position="relative" right="40px" onClick={() => handleRemove(item._id)}>
                    Remove
                    </Button>
                </Override>
                <Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
                        
                </Override>
            
             </Structure>
      );
      return Filtered;
  }


  return <Theme theme={theme}>
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
                    href="/appointments"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                >All Appointments</Link>
                <Link
                    href="/addappointments"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                >Add new Appointment</Link>
          </Box>
      </Section>  
      <Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
      <Section>

        {MapApp(apps)}
      </Section>
    </Theme>
});
