const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString()); //gives the same thing as href

// Host (root domain)
console.log(myUrl.host);

// Hostname
console.log(myUrl.hostname); //hostname doesnot get the port but host does

// Pathname
console.log(myUrl.pathname);

// Serialized Query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));