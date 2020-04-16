import cookie from 'js-cookie'

//check session and cookies, if none create and push to database
//test in app first?

//1. check cookie, if none create cookie
//2. connect to db, get cart or create if needed

//id doesn't have to be random, can be sequenced aka just get database entries and add one?
export default function checkCookie(){
    const User = Cookies.get('User'); // => 'value'
    console.log(User)
}


function getId(){
    //fetch getIds

} 

