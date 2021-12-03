const ovejas = [
   { name: 'Noa', color: 'azul' },
   { name: 'Euge', color: 'rojo' },
   { name: 'Navidad', color: 'rojo' },
   { name: 'Ki Na Ma', color: 'rojo'}
]

function contarOvejas(ovejas) {
   // aquí tu magia
   return ovejas.filter(
     item => 
       {
         const name = item.name.toLowerCase()
         return item.color === 'rojo' &&
               name.indexOf('a') !== -1 &&
               name.indexOf('n') !== -1
       }
   )
}
