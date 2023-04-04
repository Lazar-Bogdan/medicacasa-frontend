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

import DoctorService from "services/DoctorService";

import NavbarLink from "./NavbarLink";
import NavBarLinkOnPage from "./NavBarLinkOnPage.js"; 
import {motion, useAnimation, AnimatePresence} from "framer-motion";
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
    const [typeButton,setTypeButton] = useState(0);
    const [disableButtons, setDisableButtons] = useState(true);

    useEffect( () => {
        setCurrentMonth(getMonths(numberMonth));
        let y = getDays(numberMonth);
        setNumberDays(arangeDays(y));
        setDayNames(getCurrentDayName());
        getClientsApp(months[numberMonth],CurrentYear,arangeDays(y)[0]);
        setCurrentYear(new Date().getFullYear());
        if(AuthService.handleGetRank() == "Standard"){
            setDisableButtons(true);
        }
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
        const res1 = await DoctorService.getEmailUnderId(AuthService.handleGetId());

        const response = await MyClientsService.getMyClientsUnderDoctorEmail(res1,months,year,numberDays);
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
        return (<Text margin="40px 0px 0px 0px" font="--headline3" color="--darkL2" text-align="center">
            {months[currentMoth[MonthArray]]}
        </Text>);
    }
    
    function NumberFunctionArray(){
        return (<Text margin="0px 0px 0px 0px" font="--headline3" color="--darkL2" text-align="center">
            {numberDays[DayNumberArray]}
        </Text>);
    }

    function NameFunctionArray(){
        return (<Text margin="40px 0px 0px 0px" font="--headline3" color="--darkL2" text-align="center">
            {dayNames[DayNameArray]}
        </Text>);
    }

    function MapApp(List){
        if(!List){List=[];}
        const Filtered = List.slice(0, visible).map((item) =>
            <div marginRight="10px">
                <Box
                padding="50px 55px 50px 55px"
                border-width="1px"
                border-style="solid"
                border-radius="30px"
                border-color="--color-lightD2"
                flex-direction="column"
                marginRight="10px"
                margin="10px"
                height="300px"
                >
                    <Text
                        justifyContent="center"
                        alignItems="center"
                        margin="25px 10px 35px 40px"
                        color="--dark"
                        font="--lead"
                        lg-margin="0px 0px 50px 0px"
                        sm-margin="0px 0px 30px 0px"
                        marginRight="10px"
                        position="relative"
                        top="-60px"
                        font-weight="bold"
                    >
                        Hour :
                    </Text>
                    <Text
                        justifyContent="center"
                        alignItems="center"
                        margin="25px 10px 35px 40px"
                        color="--dark"
                        font="--lead"
                        lg-margin="0px 0px 50px 0px"
                        sm-margin="0px 0px 30px 0px"
                        marginRight="10px"
                        position="relative"
                        top="-90px"
                    >
                        {item.hour}
                    </Text>
                    <Text 
                        justifyContent="center"
                        alignItems="center"
                        margin="-100px 0px 100px 550px"
                        color="--dark"
                        font="--lead"
                        lg-margin="0px 0px 50px 0px"
                        sm-margin="0px 0px 30px 0px"
                        flex="1 0 auto"
                        position="relative"
                        left="-260px"
                        font-weight="bold"
                    >
                        Email: 
                    </Text>
                    <Text 
                        justifyContent="center"
                        alignItems="center"
                        margin="-100px 0px 100px 200px"
                        color="--dark"
                        font="--lead"
                        lg-margin="0px 0px 50px 0px"
                        sm-margin="0px 0px 30px 0px"
                        flex="1 0 auto"
                        overflow="hidden"
                        white-space="normal"
                        word-wrap= "break-word"
                        position="relative"
                        left="-80px"
                    >
                        {item.clients}
                    </Text>
                    <Text 
                        justifyContent="center"
                        alignItems="center"
                        margin="-100px 0px 100px 550px"
                        color="--dark"
                        font="--lead"
                        lg-margin="0px 0px 50px 0px"
                        sm-margin="0px 0px 30px 0px"
                        flex="1 0 auto"
                        position="relative"
                        left="-260px"
                        font-weight="bold"
                    >
                        Name: 
                    </Text>
                    <Text 
                        justifyContent="center"
                        alignItems="center"
                        margin="-100px 0px 100px 200px"
                        color="--dark"
                        font="--lead"
                        lg-margin="0px 0px 50px 0px"
                        sm-margin="0px 0px 30px 0px"
                        flex="1 0 auto"
                        overflow="hidden"
                        white-space="normal"
                        word-wrap= "break-word"
                        position="relative"
                        left="-80px"
                    >
                        {item.name}
                    </Text>
                    <Text 
                        justifyContent="center"
                        alignItems="center"
                        margin="-100px 0px 100px 550px"
                        color="--dark"
                        font="--lead"
                        lg-margin="0px 0px 50px 0px"
                        sm-margin="0px 0px 30px 0px"
                        flex="1 0 auto"
                        position="relative"
                        left="-260px"
                        font-weight="bold"
                    >
                        Surname: 
                    </Text>
                    <Text 
                        justifyContent="center"
                        alignItems="center"
                        margin="-100px 0px 100px 200px"
                        color="--dark"
                        font="--lead"
                        lg-margin="0px 0px 50px 0px"
                        sm-margin="0px 0px 30px 0px"
                        flex="1 0 auto"
                        overflow="hidden"
                        white-space="normal"
                        word-wrap= "break-word"
                        position="relative"
                        left="-80px"
                    >
                        {item.surname}
                    </Text>
                    
                </Box>
            </div>
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
        <motion.div
			initial={{
				x: 100,
				opacity:0
			}}
			animate={{
				x: 0,
				opacity:1,
				transition: {
					delay:0.3,
					duration:0.4
				}
			}}
			exit={{
				x:100,
				opacity:0,
				transition: {
					duration: 0.3
				}
			}}
		>
			<Section>
				<motion.div
					initial={{
						x: 100,
						opacity:0
					}}
					animate={{
						x: 0,
						opacity:1,
						transition: {
							delay:0.2,
							duration:0.3
						}
					}}
					exit={{
						x:100,
						opacity:0,
						transition: {
							duration: 0.3
						}
					}}
				>
					<Box
						display="flex"
						padding="12px 0"
						justify-content="space-between"
						align-items="center"
						flex-direction="row"
						md-flex-direction="column"
					>
						<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead" color="black" >
							Doctors For You
						</Text>
					</Box>
					<Box
						display="flex"
						padding="12px 0"
						justify-content="space-between"
						align-items="center"
						flex-direction="row"
						md-flex-direction="column"
						style={{
							background: "black",
							borderRadius: "20px",
							position: "relative",
							overflow: "hidden"
						}}
					>
						<motion.div
							initial={{
								x: 100,
								opacity:0
							}}
							animate={{
								x: 0,
								opacity:1,
								transition: {
									delay:0.1,
									duration:0.6
								}
							}}
							exit={{
								x:100,
								opacity:0,
								transition: {
									duration: 0.3
								}
							}}
						>
							<NavbarLink href="/doctor" onClick={() => {setTypeButton(2)}}>Home</NavbarLink>
						</motion.div>
						<motion.div
							initial={{
								x: 100,
								opacity:0
							}}
							animate={{
								x: 0,
								opacity:1,
								transition: {
									delay:0.3,
									duration:0.6
								}
							}}
							exit={{
								x:100,
								opacity:0,
								transition: {
									duration: 0.3
								}
							}}
						>   
                            <NavBarLinkOnPage style={{"background-color": "white" }} href="/schedule">My Schedule</NavBarLinkOnPage>
						</motion.div>
						<motion.div
							initial={{
								x: 100,
								opacity:0
							}}
							animate={{
								x: 0,
								opacity:1,
								transition: {
									delay:0.5,
									duration:0.6
								}
							}}
							exit={{
								x:100,
								opacity:0,
								transition: {
									duration: 0.3
								}
							}}
						>
							<NavbarLink href="/myclients">My Client</NavbarLink>
						</motion.div>
						<motion.div
							initial={{
								x: 100,
								opacity:0
							}}
							animate={{
								x: 0,
								opacity:1,
								transition: {
									delay:0.9,
									duration:0.6
								}
							}}
							exit={{
								x:100,
								opacity:0,
								transition: {
									duration: 0.3
								}
							}}
						>
							<NavbarLink href="/logout">logout</NavbarLink>
						</motion.div>
					</Box>
				</motion.div>
			</Section>
		</motion.div>
        {AuthService.handleGetRank() == "Standard" ? (
            <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center", 
                alignItems: "center", 
                textAlign: "center",
            }}>
                <h1>Please upgrade to premium</h1>
            </div>
        ) : (
            <div>

            </div>
        )}
        <div className="content" style={{ 
            filter: AuthService.handleGetRank() == "Premium"  ? "" : "blur(5px)", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center", 
            textAlign: "center" 
        }}>
            {AuthService.handleGetRank() == "Premium" ? (
                <div>
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
                        <button
                            style={{
                                fontSize: '50px',
                                top: '57%',
                                left: '43%',
                                transform: 'translate(-50%, -50%) rotate(180deg)',
                                padding: '10px',
                                position: 'absolute',
                                border: 'none',
                                backgroundColor: 'transparent',
                                color: '#000',
                                cursor: 'pointer',
                            }}
                            onClick={() => yearSubOnClickFunction()}
                        >
                            &#8594;
                        </button>                    
                        {ArrayYear()}
                        <button
                            style={{
                                fontSize: '50px',
                                top: '50.55%',
                                left: '54%',
                                padding: '10px',
                                position: 'absolute',
                                border: 'none',
                                backgroundColor: 'transparent',
                                color: '#000',
                                cursor: 'pointer',
                            }}
                            onClick={() => yearAddOnClickFunction()}
                        >
                            &#8594;
                        </button> 
                        <p></p>
                        <button
                            style={{
                                fontSize: '50px',
                                top: '67%',
                                left: '43%',
                                transform: 'translate(-50%, -50%) rotate(180deg)',
                                padding: '10px',
                                position: 'absolute',
                                border: 'none',
                                backgroundColor: 'transparent',
                                color: '#000',
                                cursor: 'pointer',
                            }}
                            onClick={() => MonthSubOnClickFunction()}
                        >
                            &#8594;
                        </button>  
                        {MonthFunctionArray()}
                        <button
                            style={{
                                fontSize: '50px',
                                top: '60.55%',
                                left: '54%',
                                padding: '10px',
                                position: 'absolute',
                                border: 'none',
                                backgroundColor: 'transparent',
                                color: '#000',
                                cursor: 'pointer',
                            }}
                            onClick={() => MonthAddOnClickFunction()}
                        >
                            &#8594;
                        </button>
                        <p></p>
                        <button
                            style={{
                                fontSize: '50px',
                                top: '81%',
                                left: '43%',
                                transform: 'translate(-50%, -50%) rotate(180deg)',
                                padding: '10px',
                                position: 'absolute',
                                border: 'none',
                                backgroundColor: 'transparent',
                                color: '#000',
                                cursor: 'pointer',
                            }}
                            onClick={() => NumberNameSubOnClickFunction()}
                        >
                            &#8594;
                        </button>  
                        {NameFunctionArray()}
                        <p></p>
                        {NumberFunctionArray()}
                        <button
                            style={{
                                fontSize: '50px',
                                top: '74.55%',
                                left: '54%',
                                padding: '10px',
                                position: 'absolute',
                                border: 'none',
                                backgroundColor: 'transparent',
                                color: '#000',
                                cursor: 'pointer',
                            }}
                            onClick={() => NumberNameAddOnClickFunction()}
                        >
                            &#8594;
                        </button>
                    </Box>
                    </Section>
                
                    {MapApp(clientsApp)}
                </div>
            ) : (
                <div>
                    
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
                        <Button display="inline-flex" disabled={disableButtons} alignItems="center" justify-cont position="relative" top="30px" right="100px" onClick={() => yearSubOnClickFunction()}></Button>
                        {ArrayYear()}
                        <Button position="relative" disabled={disableButtons} top="-35px" right="-100px" onClick={() => yearAddOnClickFunction()}></Button>
                        <p></p>
                        <Button position="relative" disabled={disableButtons} top="25px" right="100px" onClick={() => {MonthSubOnClickFunction();}}></Button>
                        {MonthFunctionArray()}
                        <Button position="relative" disabled={disableButtons} top="-34px" right="-125px" onClick={() => {MonthAddOnClickFunction(); }}></Button>
                        <Button position="relative" disabled={disableButtons} top="50px" right="125px" onClick={() => {NumberNameSubOnClickFunction();}}></Button>
                        {NameFunctionArray()}
                        <p></p>
                        {NumberFunctionArray()}
                        <Button position="relative" disabled={disableButtons} top="-60px" right="-100px" onClick={() => {NumberNameAddOnClickFunction();}}></Button>
                    </Box>
                    </Section>

                </div>
            )}
            
        </div>
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