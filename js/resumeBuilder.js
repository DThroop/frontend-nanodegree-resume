//var firstName="Dean";
//var awesomeThoughts="I am "+firstName+" and I am AWESOME!";
//var funThoughts=awesomeThoughts.replace("AWESOME","FUN");
//console.log(funThoughts);

//$("#main").append(funThoughts);

//var name="Dean Throop";
//var role="Software Engineer";

var skills=["awesomeness","programming","teaching","JS"];

//$("#main").append(skills[0]);

//$("#main").append(skills.length);

var bio={
  "name" : "Dean Throop",
  "role" : "Software Engineer",
  "contacts" : {
    "mobile" : "208-305-4361",
    "email" : "DThroop@TrackITServices.com",
    "github" : "DThroop",
    "twitter" : "@Dean.Throop",
    "location" : "Craigmont, ID"
  },
  "BioPic" : "images/fry.jpg",
  "welcome" : "Howdy ho neighbor!",
  "skills" : skills
};

var currentJob={};
currentJob["position"]="IT Manager";
currentJob["employer"]="Pacific Cabinets, Inc.";
currentJob["years"]=10;
currentJob["city"]="Ferdinand";

var education = {
  "schools" : [
    {
      "name" : "University of Idaho",
      "city" : "Moscow, ID",
      "degree" : "BS",
      "major" : ["Computer Science","Political Science"]
    },
    {
      "name" : "Kamiah High School",
      "city" : "Kamiah, ID",
      "degree" : "Diploma"
    }
  ]
};
//education.name="University of Idaho";
//education.years=4;
//education.city="Moscow, ID";

//var formattedName=HTMLheaderName.replace("%data%", bio.name);
//var formattedRole=HTMLheaderRole.replace("%data%", bio.role);

//console.log(formattedName);
//console.log(formattedRole);

$("#header").prepend(HTMLlocation.replace("%data%",bio.contacts.location));
$("#header").prepend(HTMLgithub.replace("%data%",bio.contacts.github));
$("#header").prepend(HTMLtwitter.replace("%data%",bio.contacts.twitter));
$("#header").prepend(HTMLemail.replace("%data%",bio.contacts.email));
$("#header").prepend(HTMLmobile.replace("%data%",bio.contacts.mobile));
$("#header").prepend(HTMLWelcomeMsg.replace("%data%",bio.welcome));
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").prepend(HTMLbioPic.replace("%data%",bio.BioPic));

$("#main").append(currentJob.position);
$("#main").append(education["schools"].name);

if(skills.length!=0)
{
  $("#header").append(HTMLskillsStart)
  $("#skills").append(HTMLskills.replace("%data%",bio.skills));
}
