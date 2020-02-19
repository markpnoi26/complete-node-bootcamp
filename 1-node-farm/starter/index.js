const fs = require('fs')
const http = require('http')
const url = require('url')

///////////////////////////
// FILES //

// Blocking, syc way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(textIn)
//
//
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
//
// fs.writeFileSync('./txt/input.txt', textOut)

// Non-blocking, async
// fs.readFile('./text/start.txt', 'utf-8', (err, data) => {
//   if (err) return(console.log('error!'))
//   fs.readFile(`./txt/${data}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2)
//     fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//       console.log(data3)
//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//         console.log('Your File has been written :)')
//       })
//     })
//   })
// })
//
//

// console.log('Will read file!')


///////////////////////////////////////////
// SERVER

const server = http.createServer((req, resp) => {
  // console.log(req.url)

  const pathName = req.url

  if (pathName === '/overview') {
    resp.end('This is the OVERVIEW')
  } else if (pathName === '/product') {
    resp.end('This is the PRODUCT')
  } else {
    resp.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    })
    resp.end('<h1>Page not Found</h1>')
  }

  resp.end('Hello from the server!')
})

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000')
})
