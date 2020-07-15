console.log('Data Poster');
const cosmo = require('../../routes/conn/cosmo-conn')
const data = document.querySelector('form')
const name = document.querySelector('cdfirst')
data.addEventListener('submit',()=>{
    
    console.log('testing', name)
})