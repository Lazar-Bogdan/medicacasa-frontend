import React, {useEffect} from 'react';
import MDSpinner from "react-md-spinner";
import AuthService from './AuthService';


const appID="218089f1f04422d7";
const region="eu";
const AUTH_KEY="17a6beee49348895b4781076a97ecc7352a4aae0";
const wid="035cd74a-203c-4fad-b807-792e316088a6";

const CometChat =()=>{
    useEffect(() => {
        window.CometChatWidget.init({
            appID: appID,
            appRegion: region,
            authKey: AUTH_KEY,
        }).then((response) => {
            console.log("Initialization completed successfully");
            //You can now call login function.
            let uid = AuthService.handleGetUid();
            //login-ul efectiv
            window.CometChatWidget.login({
                uid: uid,
            }).then((user) => {
                //launch la widget
                window.CometChatWidget.launch({
                    widgetID:wid,
                    roundedCorners: "true",
                    docked: "true",
                    height: "300px",
                    width: "400px",
                    friends:["120228123437"],
                    defaultType: "user", //user or group
                });
            });
        });
    }, []);

    return (
        <div className='App'></div>
    );
}


export default CometChat;