const test = ({ foo, bar, ...others }) => {
	console.log(foo, bar);
  // polyfillが必要
  new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve(others);
    }, 2000);

  }).then(data => {
		alert(data)
    //console.log(data);
  })
  
}

export { test };