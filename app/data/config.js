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
        "maxFieldLength": "10"
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
      "type": 1,
      "model": "BDate",
      "BDate": "new",
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
    }
  ]
};