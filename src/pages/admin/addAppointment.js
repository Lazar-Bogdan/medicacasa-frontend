import React,{useEffect,useState,useRef} from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section,Structure,Image, Hr, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { RawHtml, Override, SocialMedia, Formspree } from "@quarkly/components";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Button, I } from "@quarkly/widgets/build/cjs/prod";

import MyClientsService from "services/MyClientsService";

import { arangeDays,getDays,getMonths } from "services/DateSettings";

import { useHistory } from "react-router-dom";
import AuthService from "services/AuthService";
import App from "App";
import addClient from "./addClient";



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
  
  const [valueDay, setValueDay] = useState([]);
  const [valueHour,setValueHour] = useState('');
  const [valueMonth,setValueMonth] = useState('');
  const [valueYear,setValueYear] = useState('');
  const[doctoremail,setDoctorEmail]=useState();
  const[clientEmail,setClientEmail]=useState();
  const[clientName, setClientName]=useState();
  const[clientSurname, setClientSurname]=useState();
  const [finalValueDay, setFinalValueDay] = useState();
  const [finalYearValue, setFinalValueYear] = useState();
  const [finalMonthValue, setFinalValueMonth] = useState();
  const[AppList,setAppList]=useState([]);

  useEffect(() => {
 
  },[AppList,valueDay]);
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
    const response = await MyClientsService.getDoctorAppUnderAddAppAdmin(doctoremail,finalYearValue,finalMonthValue,finalValueDay);
    if(response){
      setAppList(response);
    }else{
      alert("please check all fields should be modified once");
    }
  }

  async function handleAddClient(){
    const response = await MyClientsService.addApp(doctoremail,clientEmail,finalValueDay,valueHour,finalMonthValue,finalYearValue,clientName,clientSurname);
    if(response){
      alert("App added");
      console.log("pana aici1");
      const startDate = new Date();
      const endDate = new Date();
      endDate.setHours(endDate.getHours() + 1); // Set end time to 1 hour after start time
      console.log("pana aici");

      const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=Appointment+Set&dates=${startDate.toISOString()}/${endDate.toISOString()}`;

      console.log("pana aici");
      window.open(calendarUrl, '_blank');
      history.push('/adminpage');
    }
  }

  const ref = useRef(null);

  function handleSeach(){
      getAppUnderDoctor(doctoremail)
      return true;
  }

  function handleChange(event){
    setFinalValueDay(event.target.value);
  }

  function handleChangeYear(event){
    // console.log(event.target.value);
    setFinalValueYear(event.target.value);
  }

  function handleChangeMonth(event){
    let month = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let x = 0;
    for(var i=0; i<month.length; i++){
      if(month[i] === event.target.value){
        x = i;
      }
    }
    let y = getDays(x);
    if(month[x] === month[new Date().getMonth()]){
      setValueDay(arangeDays(y));
    }else{
      setValueDay(y);
    }

    setFinalValueMonth(event.target.value);
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
  let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  function MonthFunction(){
    const numberMonth = new Date().getMonth();
    let newVar = getMonths(numberMonth);
    const Filtered = newVar.slice(0, visible).map((item) =>
            { 
              return <option value={months[item]}>{months[item]}</option>
            }
    );
    return Filtered;
  }

  function dayFunction(List){
    console.log(List);
    const Filtered = List.slice(0, visible).map((item) =>
      {
        return <option value={item}>{item}</option>
      }
    );
    return Filtered;
  }

  const[visible, setVisible] = useState(40);
  function Time(List){
		if(!List){List=[];}
    for (var i=0; i < AppList.length; i++) {
      for(var y = 0; y<app.length; y++){
        if(app[y].hour === AppList[i].hour){
          // console.log("app : " + app[y].hour + " AppList : " + AppList[i].hour);
          // console.log(app[y].hour == AppList[i].hour);
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
                href="/appointments"
                display="flex"
                justify-content="center"
                font="--base"
                font-weight="700"
                md-flex-direction="column"
                md-align-items="center"
                slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
            >All Appointments</Link>
        </Box>
    </Section>
    <Section>
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
                    <Box
                    gap="16px"
                    display="grid"
                    flex-direction="row"
                    flex-wrap="wrap"
                    grid-template-columns="repeat(2, 1fr)"
                    grid-gap="16px"
                  >
                      <Text margin="0px 0px 0px 0px" position="relative" >
                        Doctor Email:
                      </Text>
                      <Input
                        display="block"
                        placeholder-color="LightGray"
                        background="white"
                        position="relative"
                        placeholder='Doctor Email'
                        name="DoctorEmail"
                        onChange={(event)=> setDoctorEmail(event.target.value)}
                        />
                        <label>
                            Year:
                            <select onChange={handleChangeYear}>
                              <option value=""></option>
                              <option value={new Date().getFullYear()}>{new Date().getFullYear()}</option>
                              <option value={new Date().getFullYear() + 1}>{new Date().getFullYear() + 1}</option>
                            </select>
                          </label>
                          <label>
                          Month:
                            <select  onChange={handleChangeMonth}>
                              <option value=""></option> 
                              {MonthFunction()}
                            </select>
                          </label>
                          <label>
                            Day:
                            <select onChange={handleChange}>
                              <option value=""></option> 
                              {dayFunction(valueDay)}
                            </select>
                        </label>
                        <p></p>
                      <Button variant="btn btn-success" type="submit"  position="relative" onClick={() => handleSeach()}>
                        Search
                      </Button>
                    </Box>
                    <p></p>
                    <Box
                    gap="16px"
                    display="grid"
                    flex-direction="row"
                    flex-wrap="wrap"
                    grid-template-columns="repeat(2, 1fr)"
                    grid-gap="16px"
                   >
                      <Text margin="0px 0px 0px 0px" position="relative">
                        Client Email:
                      </Text>
                      <Input
                        display="block"
                        placeholder-color="LightGray"
                        background="white"
                        position="relative"
                        placeholder='Client Email'
                        onChange={handleChangeClientEmail}
                      />
                      <Text margin="0px 0px 0px 0px" position="relative">
                        Client Name:
                      </Text>
                      <Input
                        display="block"
                        placeholder-color="LightGray"
                        background="white"
                        position="relative"
                        placeholder='Client Name'
                        onChange={(event)=> setClientName(event.target.value)}
                      />
                      <Text margin="0px 0px 0px 0px" position="relative">
                        Client Surname:
                      </Text>
                      <Input
                        display="block"
                        placeholder-color="LightGray"
                        background="white"
                        position="relative"
                        placeholder='Client Surname'
                        onChange={(event)=> setClientSurname(event.target.value)}
                      />
                    </Box>
                    <p></p>
                    <Box
                    gap="16px"
                    display="grid"
                    flex-direction="row"
                    flex-wrap="wrap"
                    grid-template-columns="repeat(2, 1fr)"
                    grid-gap="16px"
                   >
                      <label>
                      Hour:
                        <select value={valueHour} onChange={handleChangeHour}>
                          <option value=""></option> 
                          {Time(AppList)}
                        </select>
                      </label>
                      <Button position="relative" onClick={() => handleAddClient()}>
                        Add Appointment
                      </Button>
                    </Box>
                  </Box>
					</Box>
				</Box>
			</Box>
    </Section>  
  </Theme>

});