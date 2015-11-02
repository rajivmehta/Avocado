var configJson={
  "config": [
    {
      "fieldName": "First Name",
      "isSelected": true,
      "type": 1,
      "model": "firstName",
      "firstName": "gdata",
      "validation": {
        "required": "true",
        "maxFieldLength": "7"
      }
    },
    {
      "fieldName": "Last Name",
      "isSelected": true,
      "type": 1,
      "model": "LastName",
      "LastName": "SH",
      "validation": {
        "required": "true"
      }
    },
    {
      "fieldName": "Birth Date",
      "isSelected": true,
      "type": 2,
      "model": "BDate",
      "BDate": new Date(),
      "validation": {
        "required": "true"
      }
    },
    {
      "fieldName": "city",
      "isSelected": true,
      "type": 3,
      "model": "selectedCity",
      "selectedCity": "1",
      "options": [
        {
          "id": 1,
          "name": "Ahmedabad"
        },
        {
          "id": 2,
          "name": "Junagadh"
        },
        {
          "id": 3,
          "name": "Vadodara"
        }
      ],
      "validation": {}
    },
    {
      "fieldName": "Age",
      "isSelected": true,
      "type": 4,
      "model": "age",
      "age": 42,
      "validation": {
        "required": "true",
        "minField": 20,
        "maxField": 50
      }
    },
    {
        "fieldName": "Candidate E-Mail",
        "isSelected": true,
        "type": 5,
        "model": "candidateemail",
        "candidateemail": "g@gmail.com",
        "validation": {
            "required": "true"
        }
    }
  ]
};