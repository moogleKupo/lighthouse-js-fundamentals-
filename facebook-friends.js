let facebookProfile = {
  name: Taylor,
  friends: 150,
  messages: ["Good Morning", "Good Evening", "Good Night"],
postMessage(message): function(){
  this.messages.push(message)
},
deleteMessage(index) = function(){
  this.messages.pop(index)
},
addFriend() = function(){
  this.friends += 1;
},
removeFrirend() = function{}
this.friends -+ 1;
}