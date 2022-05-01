
Esta semilla implementa  las siguientes librerias: 
react 18
redux 4 ,
redux toolkit 1.6
react-redux 8
react-router v6
sass 1
typescript 4
formik 2
yup 0.32
i18n 21
redux saga 1



Proyecto coder front
antes de correrlo instalar todas las dependencias con npm i y asegurarse que en el puerto 3000 no haya nada que lo este ocupando o cambiar de puerto en el package .json en el comando npm start agregarle PORT=33000 por ejemplo

npm start
existen 2 modos de produccion o de desarrollo para correr , desarrollo que va a estar apuntando a todas las apis en localhost:8080 es npm run start:dev en cambio si es npm run start:prod la url seteada por defecto es la de heroku que esta en produccion

npm test
de momento no tiene testing

npm run build
existen 2 modos de deployar modo de desarrollo o modo produccion al igual que el anterior npm run build:dev o npm run build:prod