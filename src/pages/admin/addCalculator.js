import React,{useEffect,useState} from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section,Structure,Image, Hr, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Button } from "@quarkly/widgets/build/cjs/prod";
import AWS from 'aws-sdk'

import { useHistory } from "react-router-dom";
import AuthService from "services/AuthService";
import CalculatorSerivice from "services/CalculatorSerivice";


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
  
  const[country,setCountry]=useState(" ");
  const[city,setCity]=useState(" ");
  const[cardiologytype, setCardiologyType]=useState(" ");
  const[cardiologyplace, setCardiologyPlace]=useState(" ");
  const[cardiologyprice, setCardiologyPrice]=useState(" ");
  const[generalsurgerytype, setGeneralSurgeryType]=useState(" ");
  const[generalsurgeryplace, setGeneralSurgeryPlace]=useState(" ");
  const[generalsurgeryprice, setGeneralSurgeryPrice]=useState(" ");
  const[internalmedicinetype, setInternalMedicineType]=useState(" ");
  const[internalmedicineplace, setInternalMedicinePlace]=useState(" ");
  const[internalmedicineprice, setInternalMedicinePrice]=useState(" ");
  const[rate,setRate]=useState(" ");
  const [progress , setProgress] = useState(0);


  async function handleAddCabinet(){



    // const response = await GetMedicineService.addMeds(name,price,description,"https://mydoctorbucket.s3.eu-central-1.amazonaws.com/medicinePhotos/" + img.name)
    // if(response){
    //   alert("meds created");
    //   history.push('/medlist');
    // }else{
    //   alert("check credentials");
    // }
    const response = await CalculatorSerivice.addCalculator(country,city,cardiologytype,cardiologyplace,cardiologyprice,generalsurgerytype,generalsurgeryplace,generalsurgeryprice,internalmedicinetype,internalmedicineplace,internalmedicineprice,rate);
    if(response){
      alert("cabinet created");
      history.push('/admincalculator');
    }else{
      alert("check credentials");
    }

  }


  return  <Theme theme={theme}>
  <GlobalQuarklyPageStyles pageUrl={"index"} />
  <Helmet>
    <title>
      ADM
    </title>
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
                    href="/admincalculator"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                >All cabinets</Link>
                <Link
                    href="/addCalculator"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                >Add new cabinets</Link>
          </Box>
      </Section>  
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
                  Country:
                </Text>
                <Input
                  display="block"
                  placeholder-color="LightGray"
                  background="white"
                  position="relative"
                  placeholder='Name'
                  name="name"
                  onChange={(event) => setCountry(event.target.value) }
                />
                <Text margin="0px 0px 0px 0px" position="relative" >
                  City:
                </Text>
                <Input
                  display="block"
                  placeholder-color="LightGray"
                  background="white"
                  position="relative"
                  placeholder='Name'
                  name="name"
                  onChange={(event) => setCity(event.target.value) }
                />
                <Text margin="0px 0px 0px 0px" position="relative" >
                  Cardiology Type:
                </Text>
                <Input
                  display="block"
                  placeholder-color="LightGray"
                  background="white"
                  position="relative"
                  placeholder='Name'
                  name="name"
                  onChange={(event) => setCardiologyType(event.target.value) }
                />
                <Text margin="0px 0px 0px 0px" position="relative">
                  Cardiology place:
                </Text>
                <Input
                  as="textarea"
                  display="block"
                  placeholder-color="LightGray"
                  background="white"
                  position="relative"
                  placeholder='Description'
                  onChange={(event) => setCardiologyPlace(event.target.value) }
                  whiteSpace="pre-wrap"
                  wordWrap="break-word"
                  rows={4}
                />
                <Text margin="0px 0px 0px 0px" position="relative" >
                  Cardiology Price:
                </Text>
                <Input
                  display="block"
                  placeholder-color="LightGray"
                  background="white"
                  position="relative"
                  name="price"
                  type="number"
                  placeholder='Price'
                  onChange={(event) => setCardiologyPrice(event.target.value) }
                />
                <Text margin="0px 0px 0px 0px" position="relative" >
                  General Surgery Type:
                </Text>
                <Input
                  display="block"
                  placeholder-color="LightGray"
                  background="white"
                  position="relative"
                  placeholder='Name'
                  name="name"
                  onChange={(event) => setGeneralSurgeryType(event.target.value) }
                />
                <Text margin="0px 0px 0px 0px" position="relative">
                    General Surgery place:
                </Text>
                <Input
                  as="textarea"
                  display="block"
                  placeholder-color="LightGray"
                  background="white"
                  position="relative"
                  placeholder='Description'
                  onChange={(event) => setGeneralSurgeryPlace(event.target.value) }
                  whiteSpace="pre-wrap"
                  wordWrap="break-word"
                  rows={4}
                />
                <Text margin="0px 0px 0px 0px" position="relative" >
                    General Surgery Price:
                </Text>
                <Input
                  display="block"
                  placeholder-color="LightGray"
                  background="white"
                  position="relative"
                  name="price"
                  type="number"
                  placeholder='Price'
                  onChange={(event) => setGeneralSurgeryPrice(event.target.value) }
                />
                <Text margin="0px 0px 0px 0px" position="relative" >
                  Internal Medicine Type:
                </Text>
                <Input
                  display="block"
                  placeholder-color="LightGray"
                  background="white"
                  position="relative"
                  placeholder='Name'
                  name="name"
                  onChange={(event) => setInternalMedicineType(event.target.value) }
                />
                <Text margin="0px 0px 0px 0px" position="relative">
                    Internal Medicine place:
                </Text>
                <Input
                  as="textarea"
                  display="block"
                  placeholder-color="LightGray"
                  background="white"
                  position="relative"
                  placeholder='Description'
                  onChange={(event) => setInternalMedicinePlace(event.target.value) }
                  whiteSpace="pre-wrap"
                  wordWrap="break-word"
                  rows={4}
                />
                <Text margin="0px 0px 0px 0px" position="relative" >
                    Internal Medicine Price:
                </Text>
                <Input
                  display="block"
                  placeholder-color="LightGray"
                  background="white"
                  position="relative"
                  name="price"
                  type="number"
                  placeholder='Price'
                  onChange={(event) => setInternalMedicinePrice(event.target.value) }
                />
                <Text margin="0px 0px 0px 0px" position="relative" >
                    Rate:
                </Text>
                <Input
                  display="block"
                  placeholder-color="LightGray"
                  background="white"
                  position="relative"
                  name="price"
                  type="number"
                  placeholder='Rate'
                  onChange={(event) => setRate(event.target.value) }
                />
                <Button position="relative" onClick={() => handleAddCabinet()}>
                  Add Meds
                </Button>
							</Box>
					</Box>
				</Box>
			</Box>
		</Section>
  </Theme>

});