const FB = window.FB

const FBLoginStatus = {
    CONNECTED: 'connected', //사용자가 Facebook에 로그인하고 앱에 로그인
    NOT_AUTHORIZED: 'not_authorized', //Facebook에는 로그인했지만 앱에 로그인하지 않음
    UNKNOWN: 'unknown' // Facebook에 로그인 하지 않음. 또는 이전에 FB.logout()이 호출되어 Fackebook에 연결 불가
};

export default class Facebook {
    constructor(appId) {
        this.userID = null
        FB.init({
            appId,
            status : true,
            cookie : true,
            xfbml  : true,
            version: "v3.0"
        });
        FB.Event.subscribe('auth.login', function(response) {
            console.log('logged in');
        });
        FB.Event.subscribe('auth.logout', function(response) {
            console.log('logged out');
        }); 
        FB.Event.subscribe('auth.authResponseChange', function(response) {
            console.log("auth_response_change_callback", response);
        }); 
        FB.Event.subscribe('auth.statusChange', function(response) {
            console.log("auth_status_change_callback: " + response.status);
        }); 
    }
    getLoginStatus() {
        console.log("getLoginStatus")
        return new Promise(res => {
            FB.getLoginStatus((response) => {
                const userID = response.authResponse.userID
                this.userID = userID
                const loginStatus = response.status
                switch (loginStatus) {
                    case FBLoginStatus.CONNECTED:   
                        break;
                    case FBLoginStatus.NOT_AUTHORIZED:
                    case FBLoginStatus.UNKNOWN:
                        break;
                    default:
                        break;
                }
                console.log("getLoginStatus result", {userID, loginStatus})
                res({userID, loginStatus})
            })
        })
    }
}

