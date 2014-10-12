//var firstName="Dean";
//var awesomeThoughts="I am "+firstName+" and I am AWESOME!";
//var funThoughts=awesomeThoughts.replace("AWESOME","FUN");
//console.log(funThoughts);

//$("#main").append(funThoughts);

var name="Dean Throop";
var role="Software Engineer";

var formattedName=HTMLheaderName.replace("%data%", name);
var formattedRole=HTMLheaderRole.replace("%data%", role);

//console.log(formattedName);
//console.log(formattedRole);

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);
