
// localStorage.clear();

const employees = [
  {
    "id" :1,
    "email": "e@e.com",
    "firstName": "Aarav",
    "password": "123",
    "taskSummary": { 
      "active": 2, 
      "newTask": 1,
      "completed": 1,
       "failed": 0 
      },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Update Homepage",
        "description": "Redesign the homepage layout",
        "date": "2025-04-25",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Fix login bug",
        "description": "Resolve the login issue on Safari browser",
        "date": "2025-04-20",
        "category": "Bugfix"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "firstName": "Isha",
    "password": "123",
    "taskSummary": { 
      "active": 2, 
      "newTask": 1,
      "completed": 1,
       "failed": 0 
      },    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Add dark mode",
        "description": "Implement dark mode toggle",
        "date": "2025-04-26",
        "category": "Feature"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "firstName": "Vivaan",
    "password": "123",
    "taskSummary": { 
      "active": 2, 
      "newTask": 1,
      "completed": 1,
       "failed": 0 
      },
      "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Deploy new release",
        "description": "Deploy version 2.1 to production",
        "date": "2025-04-24",
        "category": "DevOps"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Fix payment bug",
        "description": "Payment not processing for Visa cards",
        "date": "2025-04-22",
        "category": "Bugfix"
      }
    ]
  },
  {
    "id":4,
    "firstName": "Diya",
    "email": "employee4@example.com",
    "password": "123",
    "taskSummary": { 
      "active": 2, 
      "newTask": 1,
      "completed": 1,
       "failed": 0 
      },    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Write unit tests",
        "description": "Increase test coverage for Auth module",
        "date": "2025-04-27",
        "category": "Testing"
      }
    ]
  },
  {
    "id":5,
    "firstName": "Rohan",
    "password": "123",
    "email": "employee5@example.com",
    "taskSummary": { 
      "active": 2, 
      "newTask": 1,
      "completed": 1,
       "failed": 0 
      },    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Fix notification bug",
        "description": "Notifications not received on mobile",
        "date": "2025-04-21",
        "category": "Bugfix"
      }
    ]
  }
];

const admin = [
  {
    "id":1,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = ()=>{
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))

}
export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees, admin}
}