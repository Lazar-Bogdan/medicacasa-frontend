import React, {useEffect} from 'react';
import MDSpinner from "react-md-spinner";
import AuthService from './AuthService';


const appID="22278567a3f9fc18";
const region="eu";
const AUTH_KEY="df04fddb854b700fead7ba0ac2fde3fefa565e1d";
const wid="5e71efd5-f14a-4257-aa58-bd4d40516434";

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
            console.log("uid");
            console.log(uid);
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