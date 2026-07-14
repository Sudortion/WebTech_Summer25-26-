// console.log("Hello world")
let count=4;
function collect_data(){
    let Username=document.getElementById("username").value;
    let Password=document.getElementById("Password").value;
    
    if(count>1){

        if(Username=="" || Password=="")
        {
            document.getElementById("count_msg").innerHTML="Name or password can't be empty";
            return false;
        }

        if(Username=="AIUB" & Password=="$_student")
        {
            document.getElementById("count_msg").innerHTML="Successfully  logged in";
            count=4;
            return false;
        }else{
            count--;
            document.getElementById("count_msg").innerHTML="You have " +count+" attempts left";
        }
    }else{
        document.getElementById("count_msg").innerHTML="You are locked for 5 mins";
    }
    console.log(Username);
    console.log(Password);
    return false;
}
