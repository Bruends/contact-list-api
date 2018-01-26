# Contact List api

### installing and running:
a simple RESTFUL API with node, express and mongoDB 

first check if you have `node > 8` and `mongodb` installed

then install the dependencies with: 
`yarn` or `npm install`

and start the server with one of the commands:
`yarn start` or `npm start`

the server will listen in `localhost:3000`

### endpoints:

return all contacts:
> GET  &nbsp;&nbsp; /api/contact

return contacts with name:
> GET &nbsp;&nbsp; /api/contact/name=<contact name>

add a new contact: 
> POST &nbsp;&nbsp; /api/contact 

modify contact:
> PUT &nbsp;&nbsp; /api/contact

delete contact
> DELETE &nbsp;&nbsp; /api/contact/id=<contact id>

### contact format

```
{
    _id: String (required only on PUT),
    name: String (required),
    email: String,
    phone: String,
    cell_phone: String,
    twitter: String,
    facebook: String,
}
```
