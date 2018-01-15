NodeJs/Express Web Api
Api que gestiona CRUD en json sobre listas de usuarios autenticados con OAuth2

<h1>Configuracion del entorno</h1>
Para el desarrollo de la aplicación usamos VS Code<br />
    - instalar nodejs (apt-get installa nodejs)<br />
    - instalar npm (apt-get install npm)<br />
    - instalar Express (apt-get express)<br />
    - instalar express code generator (npm install -g express-generator)<br />

<h1>Creación de la la plantilla</h1>
Con express code generator es facíl crear una plantilla inicial lanzando el siguiente comando:

express <myExpressApp>

Después hacer un npm install para instalar los modulos necesarios. Ya podriamos arrancar la aplicación, bien desde bin/www y lanzar el depurador de VS Code o con el comando

npm start

Node.js web server se iniciará y desde un navegador se puede comprobar con esta url:

http://localhost:3000

<h1>Arquitectura</h1>
La aplicación gestiona listas y comentarios siendo necesario estar autenticado en la app.
En bin/www tenemos la creación del servidor
app.js es el punto de inicio de la aplicación 
Los routes o middleware con los metodos http(get, put, post, etc...) están en routes/*
La configuación y conexión a la bd de mongoAtlas cloud está en bd/connection/bd.js
Los modelos y esquemas usados que representan las tablas de mongo están en bd/models/*
La capa que interacciona con mongoDB está en dataservices/*

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

<h1>Access control — OAuth 2.0, Passport</h1>

Modelos usados para la autenticacion
User – a user who has a name, password hash and a salt.
Client – a client application which requests access on behalf of a user, has a name and a secret code.
AccessToken – token (type of bearer), issued to the client application, limited by time.
RefreshToken – another type of token allows you to request a new bearer-token without re-request a password from the user.

<h1>Haciendo Requests</h1>

* Creating and refreshing access tokens:
http POST http://localhost:3000/api/oauth/token grant_type=password client_id=android client_secret=SomeRandomCharsAndNumbers username=myapi password=abc1234
http POST http://localhost:3000/api/oauth/token grant_type=refresh_token client_id=android client_secret=SomeRandomCharsAndNumbers refresh_token=[TOKEN]

* Creating your article data:
http POST http://localhost:1337/listorders title=NewArticle author='John Doe' description='Lorem ipsum dolar sit amet' images:='[{"kind":"thumbnail", "url":"http://habrahabr.ru/images/write-topic.png"}, {"kind":"detail", "url":"http://habrahabr.ru/images/write-topic.png"}]' Authorization:'Bearer PUT_YOUR_TOKEN_HERE'

* Getting listorder
http http://localhost:3000/listorders/mylist/ Authorization:'Bearer PUT_YOUR_TOKEN_HERE'

* Get info user
http http://localhost:3000/api/users/info Authorization:'Bearer PUT_YOUR_TOKEN_HERE'
