import React, {useEffect,useState} from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";

import MyClientsService from "services/MyClientsService";
import { useHistory } from "react-router-dom";
import AuthService from "./../services/AuthService";
import {getDays, getMonths, getCurrentDayName, arangeDays,DaysDone, MonthDone} from "./../services/DateSettings";
import { B, Button } from "@quarkly/widgets/build/cjs/prod";

import CometChat from "services/CometChat";

let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const MySchedule = () => {
    const [MonthArray, setMonthArray] = useState(0);
    const [DayNameArray, setDayNameArray] = useState(0);
    const [DayNumberArray, setDayNumberArray] = useState(0);
    const [yearArray, setYearArray] = useState(0);
    const [numberDays, setNumberDays] = useState([]);
    const [numberOfTimeMonthPressed, setNumberOfTimeMonthPressed] = useState(0);
    const [currentMoth, setCurrentMonth] = useState([]);
    const [CurrentYear, setCurrentYear] = useState(new Date().getFullYear());
    const numberMonth = new Date().getMonth();
    const[dayNames,setDayNames] = useState([]); 
    useEffect( () => {
        setCurrentMonth(getMonths(numberMonth));
        let y = getDays(numberMonth);
        setNumberDays(arangeDays(y));
        setDayNames(getCurrentDayName());
        getClientsApp(months[numberMonth],CurrentYear,arangeDays(y)[0]);
        setCurrentYear(new Date().getFullYear());
    },[]);
    let year = [];
    year[0] = CurrentYear;
    for(var i = 1 ; i<2; i++){
        year[i] = CurrentYear + i;
    }
    //console.log(year);
    // console.log(currentMoth);
    // console.log(numberDays);
    // console.log(dayNames);
    // console.log(numberDays);
    const history = useHistory();

	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 1011){
		history.push("/client")
	}

	if(AuthService.handleGetLoginStatus() && AuthService.handleGetRole() == 3011){
		history.push("/adminpage")
	}
	if(!AuthService.handleGetLoginStatus()){
		history.push("/");
	}

    const [clientsApp,setClientsApp] = useState([]);
    const[visible, setVisible] = useState(9);
    
    async function getClientsApp(months,year,numberDays){
        const response = await MyClientsService.getMyClientsUnderDoctorEmail("Bogdan@gmail.com",months,year,numberDays);
        if(response){
            console.log(response);
            setClientsApp(response);
        }
    }
    // useEffect(() => {
    //     NumberNameSubOnClickFunction();
    //     NumberNameAddOnClickFunction();
    //     MonthAddOnClickFunction();
    //     MonthSubOnClickFunction();
    // }, []);
    function NumberNameSubOnClickFunction(){

        if((DayNumberArray) > 0){
            setDayNumberArray(DayNumberArray - 1);
            getClientsApp(months[currentMoth[MonthArray]],CurrentYear,numberDays[DayNumberArray-1]);
        }
        if(DayNumberArray == 0 && MonthArray == 0){
            
        }else if(DayNameArray == 0 && DayNumberArray == 0){
            setDayNameArray(6);
            let x = getDays(currentMoth[MonthArray-1]);
            setNumberDays(getDays(currentMoth[MonthArray-1]));
            setDayNumberArray(x.length-1);
            getClientsApp(months[currentMoth[MonthArray-1]],CurrentYear,x[x.length - 1]);
            setMonthArray(MonthArray - 1);
        }

        if(DayNameArray > 0){
            setDayNameArray(DayNameArray - 1);
            getClientsApp(months[currentMoth[MonthArray]],CurrentYear,numberDays[DayNumberArray-1]);             
        }
    }

    function NumberNameAddOnClickFunction(){
        if((DayNumberArray) + 1 != numberDays.length){
            setDayNumberArray(DayNumberArray + 1);
            getClientsApp(months[currentMoth[MonthArray]],CurrentYear,numberDays[DayNumberArray+1]);
        }
        if(DayNameArray + 1 != dayNames.length){
            setDayNameArray(DayNameArray + 1);
             
        }else{
            setDayNameArray(0);
             
        }
        if((DayNumberArray) + 1 == numberDays.length){
            setMonthArray(MonthArray + 1);
            setDayNumberArray(0);
            setDayNameArray(0);
            let test = MonthDone(currentMoth[MonthArray],numberOfTimeMonthPressed);
            setNumberDays(test[0]);
            setDayNames(test[1]);
            getClientsApp(months[currentMoth[MonthArray+1]],CurrentYear,test[0][0]);
        }
        
    }
    
    function MonthAddOnClickFunction(){
        let x;
        for(var i=0; i<currentMoth.length; i++){
            if(currentMoth[i] == 0){
                x=i;
                break;
            }
        }

        if((MonthArray) + 1 != currentMoth.length){
            setNumberOfTimeMonthPressed(numberOfTimeMonthPressed + 1);
            setMonthArray(MonthArray + 1);
            setDayNumberArray(0);
            setDayNameArray(0);
            let test = MonthDone(currentMoth[MonthArray+1],numberOfTimeMonthPressed);
            setNumberDays(test[0]);
            console.log(test[1]);
            setDayNames(test[1]);
        }
        if((MonthArray) + 1 == x){
            setYearArray(yearArray + 1);
        }
    }

    function MonthSubOnClickFunction(){
        if(MonthArray > 0 ){
            setMonthArray(MonthArray - 1);
        }
    }

    function yearAddOnClickFunction(){
        if((yearArray + 1)!=year.length){
            setYearArray(yearArray+1);
            let ThisYear = new Date().getFullYear();
            setCurrentYear(new Date().getFullYear()+1);
            getClientsApp(months[currentMoth[MonthArray]],ThisYear+1,numberDays[DayNumberArray]);
        }
    }

    function yearSubOnClickFunction(){
        if(yearArray>0){
            setYearArray(yearArray-1);
            setCurrentMonth(getMonths(numberMonth));
            let y = getDays(numberMonth);
            setNumberDays(arangeDays(y));
            setDayNames(getCurrentDayName());
            setDayNumberArray(0);
            setDayNameArray(0);
            setMonthArray(0);
            let ThisYear = new Date().getFullYear();
            setCurrentYear(new Date().getFullYear() );
            getClientsApp(months[getMonths(numberMonth)[0]],ThisYear,arangeDays(y)[0]);
        }
    }


    function ArrayYear(){
        return (<Text margin="0px 0px 0px 0px" font="--headline3" color="--darkL2" text-align="center">
            {CurrentYear}
        </Text>);
    }

    function MonthFunctionArray(){
        return (<Text margin="0px 0px 0px 0px" font="--headline3" color="--darkL2" text-align="center">
            {months[currentMoth[MonthArray]]}
        </Text>);
    }
    
    function NumberFunctionArray(){
        return (<Text margin="0px 0px 0px 0px" font="--headline3" color="--darkL2" text-align="center">
            {numberDays[DayNumberArray]}
        </Text>);
    }

    function NameFunctionArray(){
        return (<Text margin="0px 0px 0px 0px" font="--headline3" color="--darkL2" text-align="center">
            {dayNames[DayNameArray]}
        </Text>);
    }

    function MapApp(List){
        if(!List){List=[];}
        const Filtered = List.slice(0, visible).map((item) =>
            <Section padding="0 0 88px 0" lg-padding="56px 0 56px 0" sm-padding="32px 0 32px 0">
                <Box
                    display="flex"
                    margin="0px 0px 49px 0px"
                    md-flex-direction="column"
                    md-align-items="center"
                    md-justify-content="center"
                >
                    <Box
                        width="30%"
                        padding="48px 15px 15px 15px"
                        align-items="flex-start"
                        display="flex"
                        justify-content="center"
                        border-style="solid"
                        border-width="2px 0px 0px 0px"
                        border-color="--color-lightD2"
                        margin="0px 10% 0px 0px"
                        lg-margin="0px 30px 0px 0px"
                        md-width="100%"
                        sm-padding="24px 15px 15px 15px"
                        md-justify-content="flex-start"
                        md-margin="0px 0px 0px 0px"
                        sm-justify-content="center"
                    >
                        <Text margin="0px 0px 0px 0px" font="--headline3" color="--darkL2">
                            {item.hour}
                        </Text>
                    </Box>
                    <Box
                        width="70%"
                        padding="48px 15px 15px 15px"
                        display="flex"
                        align-items="flex-start"
                        justify-content="flex-start"
                        border-style="solid"
                        border-width="2px 0px 0px 0px"
                        border-color="--color-lightD2"
                        md-width="100%"
                        md-border-width="0px"
                        sm-align-items="center"
                        sm-flex-direction="column"
                        sm-justify-content="center"
                        sm-padding="25px 15px 15px 15px"
                        md-padding="33px 15px 15px 15px"
                    >
                        <Image
                            width="217px"
                            height="217px"
                            margin="0px 64px 0px 0px"
                            src="https://images.unsplash.com/photo-1554651802-57f1d69a4944?auto=format&fit=crop&w=400&q=80"
                            object-fit="cover"
                            border-radius="100%"
                            lg-width="124px"
                            lg-height="124px"
                            lg-margin="0px 24px 0px 0px"
                            sm-margin="0px 0px 24px 0px"
                        />
                        <Box
                            padding="0px 0px 0px 0px"
                            width="50%"
                            lg-width="70%"
                            sm-width="100%"
                            sm-align-items="center"
                            sm-display="flex"
                            sm-flex-direction="column"
                            sm-justify-content="center"
                        >
                            <Text margin="80px 0px 8px 0px" font="--headline3" color="--dark">
                                {item.clients}
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Section>
        );
        return Filtered;
    }
    
    return <Theme theme={theme}>
        <GlobalQuarklyPageStyles pageUrl={"clients"} />
        <Helmet>
            <title>
                Quarkly export
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
                    Doctors For You
                </Text>
                <Link
                    href="/doctor"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                >Home</Link>
                <Link
                    href="/schedule"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                    
                >My schedule</Link>
                <Link
                    href="/myclients"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                    
                >My clients</Link>
                
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
        <Section>
            <Override slot="SectionContent" max-width="1220px" />
            <Box margin="0px 0px 0px 0px" padding="15px 15px 15px 15px" md-margin="0px 0px 40px 0px" lg-margin="0px 0px 56px 0px">
                <Text
                    margin="0px 0px 24px 0px"
                    font="--headline1"
                    color="--dark"
                    text-align="center"
                    md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
                >
                    Schedule of workshop program
                </Text>
                <Button position="relative" top="25px" right="-500px" onClick={() => yearSubOnClickFunction()}></Button>
                {ArrayYear()}
                <Button position="relative" top="-35px" right="-640px" onClick={() => yearAddOnClickFunction()}></Button>
                <p></p>
                <Button position="relative" top="25px" right="-490px" onClick={() => {MonthSubOnClickFunction();}}></Button>
                {MonthFunctionArray()}
                <Button position="relative" top="-35px" right="-650px" onClick={() => {MonthAddOnClickFunction(); }}></Button>
                <Button position="relative" top="50px" right="-420px" onClick={() => {NumberNameSubOnClickFunction();}}></Button>
                {NameFunctionArray()}
                <p></p>
                {NumberFunctionArray()}
                <Button position="relative" top="-60px" right="-670px" onClick={() => {NumberNameAddOnClickFunction();}}></Button>
            </Box>
        </Section>
        {MapApp(clientsApp)}
        <Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
        <Section padding="60px 0" sm-padding="40px 0">
            <SocialMedia
                facebook="https://www.facebook.com/bogdi.lazar.5/"
                twitter="https://twitter.com/quarklyapp"
                youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
            >
                <Override
                    slot="link"
                    border-radius="50%"
                    color="--light"
                    margin="0 8px"
                    background="--color-grey"
                    hover-background="--color-greyD1"
                />
            </SocialMedia>
        </Section>
        <RawHtml>
            <style place={"endOfHead"} rawKey={"62e38af0f913c500201c13a2"}>
                {":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
            </style>
        </RawHtml>
    </Theme>;
}

export default MySchedule;