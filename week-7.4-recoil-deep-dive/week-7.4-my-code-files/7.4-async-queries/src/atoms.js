import axios from "axios";
import { atom, selector } from "recoil";
/*
//if we don't want to directly fetch the server then the below mwthod is used

export const notifications = atom({
    key: "networkAtom",
    default: {
        network: 4, 
        jobs: 6, 
        messaging: 3, 
        notifications: 3
    }
});
*/

//the below is not possible as an a atom cannot be async but but but if we use selectors async atom is 100% possible

/*export const notifications = atom({
    key: "networkAtom",
    default:async()=> {
        const res = await axios.get("https://sum-server.100xdevs.com/notifications");//fetching the server
        return res.data;
    }
});*/

//by using selector we r creating atoms which can directly fetch the backend server asynchrounously'
//here below is the real code which is acceptable and works 
/*async data queries is being used to fetch data only because if we dont use it un unnecessary loading will
take place during refreshing which will make the exprencience more awfull its better to use it to make the code a quality code
if not used a flash with default zero(0) will be seen when the backend gets updated
*/
export const notifications = atom({
    key: "networkAtom",
    default: selector({// a selector is being used
        key:"networkAtomSelector",
        get:async()=> {
            const res = await axios.get("https://sum-server.100xdevs.com/notifications");//fetching the server
            return res.data;
        }    
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})