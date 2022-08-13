import React,{useEffect,useState} from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section,Structure,Image, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Button } from "@quarkly/widgets/build/cjs/prod";

import FormService from "services/FormService";

import { useHistory } from "react-router-dom";


export default (() => {
  const history = useHistory();
  useEffect( () => {
    getAllForms();
  },[]);

  const[visible, setVisible] = useState(6);
  const[forms,setForms] = useState([]);

  async function getAllForms(){
    const response = await FormService.getAllForms();
    if(response){
        setForms(response);
    }
  }

  async function handleRemove(id){
      const response = await FormService.deleteForm(id);
      if(response){
        alert("form deleted successfully");
        history.push('/adminpage');
      }
  }

  function MapForm(List){
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
                Name : {item.name}
              </Text>
              <Text margin="0px 0px 0px 0px" position="relative" >
                Email : {item.email}
              </Text>
              <Text margin="0px 0px 0px 0px" position="relative" >
                Message : {item.message}
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
                    
                >Logout</Link>
          </Box>
      </Section>
      <Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
      <Section>
        <Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />

        {MapForm(forms)}
      </Section>
    </Theme>
});
