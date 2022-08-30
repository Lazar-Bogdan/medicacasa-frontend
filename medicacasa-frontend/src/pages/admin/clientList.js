import React,{useEffect,useState} from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section,Structure,Image, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Button } from "@quarkly/widgets/build/cjs/prod";

import UserService from "services/UserService";
import DoctorService from "services/DoctorService";

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
    getClients();
    getDoctors();
  },[]);

  const[visible, setVisible] = useState(6);

  const[clients,setClients] = useState([]);
  const[doctors,setDoctors] = useState([]);

  async function getClients(){
    const response = await UserService.getAllUsers();
    if(response){
      setClients(response);
    }
  }

  async function getDoctors(){
    const response = await DoctorService.getAllDoctors();
    if(response){
      setDoctors(response);
    }
  }
  
  async function handleRemove(id,role){
      if(role == 1011){
        const response = await UserService.deleteUser(id);
        if(response){
          alert("user deleted successfully");
          history.push('/adminpage');
        }
      }
      if(role == 2011){
        const response = await DoctorService.deleteDoctor(id);
        if(response){
          alert("doctor deleted successfully");
          history.push('/adminpage');
        }
      }
  }

  async function handleEdit(id,role){
      if(role == 1011){
        history.push('/editclient/'+id);
      }
      if(role == 2011){
        history.push('/editdoctor/'+id);
      }
  }

  function MapDoc(List){
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
              <Image src={item.img} display="block" position="relative" top="30px" margin="0px 0px 2px 0px" height="150px" width="150px" />
              <Text margin="0px 0px 0px 0px" position="relative" right="-230px" top="-100px">
                Username:{item.username}
              </Text>
              <Text margin="0px 0px 0px 0px" position="relative" right="-600px" top="-120px">
                Email:{item.email}
              </Text>
              <Text margin="0px 0px 0px 0px" position="relative" right="-600px" top="-60px">
                Role:{item.role}
              </Text>
            </Override>
            <Override slot="cell-1">
              <Button position="relative" right="-90px" top="30px" onClick={() => handleEdit(item._id,item.role)}>
                Edit
              </Button>
            </Override>
            <Override slot="cell-2">
              <Button position="relative" right="-90px" onClick={() => handleRemove(item._id,item.role)}>
                Remove
              </Button>
            </Override>
                                        
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
    {MapDoc(clients)}
    {MapDoc(doctors)}
    </Theme>
});
