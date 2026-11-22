const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

console.log(myInfo.get('first'));

document.querySelector('#results').innerHTML = `
<p>Thank you ${myInfo.get('first')} ${myInfo.get('last')} for joining Idaho Falls Chamber of Commerce!</p>
<p>${myInfo.get('organization')} will be well taken care of</p>
<p>Email: ${myInfo.get('email')}</p>
<p>Here is your phone number in case you want to call yourself: ${myInfo.get('phone')}</p>
<p>Membership Tier: ${myInfo.get('membership')}</p>
<p>Date: ${myInfo.get('timestamp')}</p>
<p>Make sure to check for spelling mistakes. Just know, as per our terms and services, 
you cannot ever change your buisness description</p>
<p>${myInfo.get('description')}</p>
`


