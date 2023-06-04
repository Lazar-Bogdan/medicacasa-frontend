import React, {useEffect} from 'react';
import MDSpinner from "react-md-spinner";
import AuthService from './AuthService';


const appID="23937075945f69e5";
const region="eu";
const AUTH_KEY="f85e20853ed0f33e25a7ccfe5bd4a0e24b96995b";
const wid="ae702144-72b2-4f9d-b3a4-4a851ceed332";

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