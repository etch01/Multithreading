function MakingRequest(rNumber){
  console.log("This is request number : ",rNumber);
  console.log(".................................");
  Operating(function(){
    console.log("Handled request number : ",rNumber);
  });
};

//Processing the requests
function Operating(callBack){
  setTimeout(callBack,3000);
};

for (var i = 1;i<=6;i++)
{
  MakingRequest(i);
}
