import React,{useEffect,useState,useRef} from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section,Structure,Image, Hr, Input } from "@quarkly/widgets";
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
  
  const [valueDay, setValueDay] = React.useState('Monday');
  const [valueHour,setValueHour] = useState('');
  const[doctoremail,setDoctorEmail]=useState();
  const[clientEmail,setClientEmail]=useState();
  const[AppList,setAppList]=useState([]);

  const app = [
    {
      "hour":"9:00-9:30",
      "value":0
    },
    {
      "hour":"9:30-10:00",
      "value":0
    },
    {
      "hour":"10:00-10:30",
      "value":0
    },
    {
      "hour":"10:30-11:00",
      "value":0
    },
    {
      "hour":"11:00-11:30",
      "value":0
    },
    {
      "hour":"11:30-12:00",
      "value":0
    },
    {
      "hour":"12:00-12:30",
      "value":0
    },
    {
      "hour":"12:30-13:00",
      "value":0
    },
    {
      "hour":"13:00-13:30",
      "value":0
    },
    {
      "hour":"13:30-14:00",
      "value":0
    },
    {
      "hour":"14:00-14:30",
      "value":0
    },
    {
      "hour":"14:30-15:00",
      "value":0
    },
    {
      "hour":"15:00-15:30",
      "value":0
    },
    {
      "hour":"15:30-16:00",
      "value":0
    },
    {
      "hour":"16:00-16:30",
      "value":0
    }
  ]

  async function getAppUnderDoctor(doctoremail){
    const response = await MyClientsService.getMyClientsUnderDoctorEmail(doctoremail);
    if(response){
      //console.log(response);
      setAppList(response);
    }
  }

  async function handleAddClient(){
    const response = await MyClientsService.addApp(doctoremail,clientEmail,valueDay,valueHour);
    if(response){
      alert("App added!");
      history.push('/adminpage');
    }
  }

  const ref = useRef(null);

  function handleSeach(){
      getAppUnderDoctor(doctoremail)
  }

  function handleChange(event){
    setValueDay(event.target.value);
  }
  
  function handleChangeHour(event){
    setValueHour(event.target.value);
  }

  const handleChangeDoctorEmail = () =>{
    setDoctorEmail(ref.target.value);
  }

  function handleChangeClientEmail(event){
    setClientEmail(event.target.value);
  }

  const[visible, setVisible] = useState(20);
  function Time(List){
		if(!List){List=[];}
    for (var i=0; i < AppList.length; i++) {
      for(var y = 0; y<app.length; y++){
        // console.log("app : " + app[y].hour + " AppList : " + AppList[i].hour + " ValueDay " + valueDay);
        // console.log(app[y].hour == AppList[i].hour);
        if(app[y].hour === AppList[i].hour && valueDay === AppList[i].day){
          // console.log("aici");
          app[y].value = 1;
        }
      }
    } 
		const Filtered = app.slice(0, visible).map((item) =>
            { 
                if(item.value != 1){
                  return <option value={item.hour}>{item.hour}</option>
                }
            }
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
                href="/addnewclient"
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
            placeholder='Doctor Email'
            name="username"
            ref={ref}
            value={doctoremail  }
            onChange={(event)=> setDoctorEmail(event.target.value)}
            />
          <Input
            display="block"
            placeholder-color="LightGray"
            background="white"
            position="relative"
            right="-100px"
            top="35px"
            placeholder='Client Email'
            onChange={handleChangeClientEmail}
          />
          <Text margin="0px 0px 0px 0px" position="relative" top="-70px">
            Doctor Email:
          </Text>
          <Button position="relative" right="-330px" top="-105px"onClick={() => handleSeach()}>
            Search
          </Button>
          <Text margin="0px 0px 0px 0px" position="relative" top="-60px">
            Client Email:
          </Text>
          <label>
            Day:
            <select value={valueDay} onChange={handleChange}>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
            </select>
          </label>
          <p></p>
          <label>
          Hour:
            <select value={valueHour} onChange={handleChangeHour}>
              <option></option>
              {Time(AppList)}
            </select>
          </label>
          <Button position="relative" top="50px"onClick={() => handleAddClient()}>
            Add Appointment
          </Button>
        </Override>
                                    
      </Override>
    </Structure>  
  </Theme>

});