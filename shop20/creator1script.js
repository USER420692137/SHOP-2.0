function start(){
  console.log("1111");
  const fs = require('fs')

  const content = 'this is what i want to write to file'
  
  fs.writeFile('\Users\User\test.txt', content, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })

  console.log("1112");
}

window.onload = start();