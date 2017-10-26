NodeJs/Express Web Api
Api que gestiona CRUD en json sobre listas de usuarios autenticados

<h1>Configuracion del entorno</h1>
Para el desarrollo de la aplicación usamos VS Code
    - instalar nodejs (apt-get installa nodejs)
    - instalar npm (apt-get install npm)
    - instalar Express (apt-get express)
    - instalar express code generator (npm install -g express-generator)

<h1>Creación de la la plantilla</h1>
Con express code generator es facíl crear una plantilla inicial:

express <myExpressApp>

Después hacer un npm install para instalar los modulos necesarios. Ya podriamos arrancar la aplicación, bien desde bin/www y lanzar el depurador de VS Code o con el comando

npm start

Node.js web server se iniciará y desde un navegador se puede comprobar con esta url:

http://localhost:3000

<h1>Arquitectura</h1>
La aplicación gestiona listas y comentarios.
En bin/www tenemos la creación del servidor
app.js es el punto de inicio de la aplicación 
Los routes o middleware con los metodos http(get, put, post, etc...) están en routes/*
La configuación y conexión a la bd de mongoAtlas cloud está en bd/connection/bd.js
Los modelos y esquemas usados que representan las tablas de mongo están en bd/models/*
La capa que interacciona con mongo está en modules/*

Tabla con las operaciones de la API
---------------------------------------------------------------------------------------------------------------
Method |  URI                             |   Description
---------------------------------------------------------------------------------------------------------------
GET    | /contacts                        | Retrieves all available contacs
GET    | /contacts/:primary-phone-number  | Retrieves a single contact by its primary phone number.
POST   | /contacts/                       | Updates a contact, if it exits.Otherwise, it creates a new contact.
PUT    | /contacts/                       | Creates a new contact.
DELETE | /contacts/:primary-phone-number  | Deletes an existing contact.
GET    | /groups                          | Retrieves all available groups that have contacts assigned.
GET    | /groups:group-name               | Retrieves a unique list of all the groups assigned to contacts.
DELETE | /groups/:name                    | Deletes a group from all the contacts it is assigned to

