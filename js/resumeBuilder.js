//var firstName="Dean";
//var awesomeThoughts="I am "+firstName+" and I am AWESOME!";
//var funThoughts=awesomeThoughts.replace("AWESOME","FUN");
//console.log(funThoughts);

//$("#main").append(funThoughts);

//var name="Dean Throop";
//var role="Software Engineer";

//$("#main").append(skills[0]);

//$("#main").append(skills.length);
//var skills=["awesomeness","programming","teaching","JS"];

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
  "skills" : [
  "awesomeness",
  "programming",
  "teaching",
  "JS"
  ]
};

var work={
  "jobs" : [
  {
    "company" : "Pacific Cabinets, Inc.",
    "city" : "Ferdinand",
    "title" : "IT Manager",
    "state" : "ID",
    "date" : "April 2009-current",
    "description" : "I did something"
  },
  {
    "company" : "University of Idaho",
    "city" : "Moscow",
    "title" : "Bitch",
    "state" : "ID",
    "date" : "May 2008-April 2009",
    "description" : "I did something"
  }
  ]
};

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

//$("#main").append(currentJob.position);
$("#main").append(education["schools"].name);

//$("#header").append(HTMLskillsStart);
//for(skill in bio.skills)
if(bio.skills!=0)
{
  $("#header").append(HTMLskillsStart);
  $("#skills").append(HTMLskills.replace("%data%",bio.skills));
}

for(job in work.jobs)
{
  var formattedEmployer =
    HTMLworkEmployer.replace("%data%",work.jobs[job].company);
  var formattedTitle =
    HTMLworkTitle.replace("%data%",work.jobs[job].title);

  $("#workExperience").append(HTMLworkStart);
  $(".work-entry:last").append(formattedEmployer+formattedTitle);
  $(".work-entry:last").append(
    HTMLworkDates.replace("%data%",work.jobs[job].date));
}