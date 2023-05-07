import React,{useEffect,useState} from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section,Structure,Image, Hr } from "@quarkly/widgets";
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
  useEffect( () => {
    getMeds();
  },[]);

  const[visible, setVisible] = useState(6);
  const[meds,setMeds]=useState([]);

  async function getMeds(){
    const response = await GetMedicineService.getAllMedicine();
    if(response){
      setMeds(response);
    }
  }

  async function deleteMeds(id){
    console.log(id);
    const response = await GetMedicineService.deleteMeds(id);
    if(response){
      alert("meds deleted");
      history.push('/adminpage');
    }
  }

  async function editMeds(id){
    if(id){
      history.push('/editmeds/'+id);
    }
  }

  function MapMeds(List){
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
                Name:{item.name}
              </Text>
              <Text margin="0px 0px 0px 0px" position="relative" right="-600px" top="-120px">
                Price:{item.price}$
              </Text>
              <Text margin="0px 0px 0px 0px" position="relative" right="-230px" top="-30px">
                Description:{item.description}
              </Text>
            </Override>
            <Override slot="cell-1">
              <Button position="relative" right="-90px" top="30px" onClick={() => editMeds(item._id)}>
                Edit
              </Button>
            </Override>
            <Override slot="cell-2">
              <Button position="relative" right="-90px" onClick={() => deleteMeds(item._id)}>
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
                    href="/admincalculator"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                >Calculator</Link>
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
                    href="/medlist"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                >All Meds</Link>
                <Link
                    href="/addmeds"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                >Add new meds</Link>
          </Box>
      </Section>  
      {MapMeds(meds)}
    </Theme>
});
