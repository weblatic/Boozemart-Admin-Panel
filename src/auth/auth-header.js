export default function authHeader() {
    const rawUser = sessionStorage.getItem("user");
    if(rawUser){
        const user = JSON.parse(sessionStorage.getItem('user'));

        if (user && user.remember_token) {
            // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
            return {'x-access-token': user.remember_token};       // for Node.js Express back-end
        } else {
            return {};
        }
    }else {
        return {};
    }

}
