# Project

The Project route is `/project`.

To create project use following example:

```js
POST: /project
Body:
    {
        "ID": "Project1",
        "name": "Project 1",
        "startDate": "2019-09-30T02:50:25.399Z",
        "endDate": "2019-09-30T02:50:25.399Z",
        "changedOn": "2019-09-30T02:50:25.399Z",
        "createdOn": "2019-09-30T02:50:25.399Z"
    }
```

To update project use the following example:

```js
PUT: /project/Project1
Body:
    {
        "_id": "5d916d91bc4c3748a4c35da6",
        "ID": "Project1",
        "name": "Project 1",
        "startDate": "2019-09-30T02:50:25.399Z",
        "endDate": "2019-09-30T02:50:25.399Z",
        "changedOn": "2019-09-30T02:50:25.399Z",
        "createdOn": "2019-09-30T02:50:25.399Z",
        "__v": 0
    }
```

To delete:

```js
DELETE: /project/Project1
```

To get app projects:

```js
GET: /project
```

To get a particular project

```js
GET: /project/Project1
```
