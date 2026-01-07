# 🚀 Education Center API - Complete Testing Guide

## 📌 Understanding Roles and Access Control

The API has **4 User Roles** with different permissions:

| Role | Description | Permissions |
|------|-------------|-------------|
| **SUPERADMIN** | Full system access | Create/Read/Update/Delete ALL resources |
| **ADMIN** | Administrative staff | Create/Read/Update most resources, Delete only courses/groups/schedules |
| **TEACHER** | Course instructors | Create/Read lessons, Record attendance, Create groups with limitations |
| **STUDENT** | Learners | View own data only, cannot create/delete anything |

---

## 🔑 Step 1: Authentication (Getting JWT Tokens)

### A) Staff Login (ADMIN Role)
```
POST http://localhost:3000/api/auth/staff/login

Headers:
Content-Type: application/json

Body:
{
  "username": "admin_user",
  "password": "admin123"
}

Response:
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "staff": {
    "id": 1,
    "firstName": "Admin",
    "lastName": "User",
    "username": "admin_user",
    "role": "ADMIN",
    "position": "Manager"
  }
}
```

### B) Staff Login (TEACHER Role)
```
POST http://localhost:3000/api/auth/staff/login

Headers:
Content-Type: application/json

Body:
{
  "username": "teacher_user",
  "password": "teacher123"
}

Response:
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "staff": {
    "id": 2,
    "firstName": "Teacher",
    "lastName": "User",
    "username": "teacher_user",
    "role": "TEACHER",
    "position": "Instructor"
  }
}
```

### C) Staff Register (SUPERADMIN Role)
```
POST http://localhost:3000/api/auth/staff/register

Headers:
Content-Type: application/json

Body:
{
  "firstName": "Super",
  "lastName": "Admin",
  "username": "superadmin",
  "password": "superadmin123",
  "confirmPassword": "superadmin123",
  "role": "SUPERADMIN",
  "position": "System Administrator",
  "phone": "+998901234567",
  "address": "Tashkent, Uzbekistan"
}

Response:
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "staff": {
    "id": 3,
    "firstName": "Super",
    "lastName": "Admin",
    "username": "superadmin",
    "role": "SUPERADMIN",
    "position": "System Administrator"
  }
}
```

### D) Student Login
```
POST http://localhost:3000/api/auth/student/login

Headers:
Content-Type: application/json

Body:
{
  "username": "student1",
  "password": "student123"
}

Response:
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "student": {
    "id": 1,
    "firstName": "Ali",
    "lastName": "Student",
    "username": "student1"
  }
}
```

### E) Student Register
```
POST http://localhost:3000/api/auth/student/register

Headers:
Content-Type: application/json

Body:
{
  "firstName": "John",
  "lastName": "Doe",
  "username": "john_student",
  "password": "john123",
  "confirmPassword": "john123",
  "phone": "+998901234567",
  "address": "Tashkent, Uzbekistan",
  "birthDate": "2005-01-15"
}

Response:
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "student": {
    "id": 2,
    "firstName": "John",
    "lastName": "Doe",
    "username": "john_student"
  }
}
```

---

## 📋 Step 2: Testing Endpoints with Different Roles

> **Important**: Each request needs the JWT token in the Authorization header:
> ```
> Headers:
> Authorization: Bearer <YOUR_JWT_TOKEN>
> Content-Type: application/json
> ```

### ADMIN Role Access Tests

#### ✅ ADMIN CAN: Create Courses
```
POST http://localhost:3000/api/courses

Authorization: Bearer <ADMIN_TOKEN>
Content-Type: application/json

Body:
{
  "name": "English Language A1",
  "description": "Beginner level English course",
  "price": 500000,
  "duration": 12,
  "level": "beginner"
}

Response: 201 Created
{
  "success": true,
  "message": "Course created successfully",
  "course": {
    "id": 1,
    "name": "English Language A1",
    "level": "BEGINNER",
    "price": 500000
  }
}
```

#### ✅ ADMIN CAN: View All Staffs
```
GET http://localhost:3000/api/staffs

Authorization: Bearer <ADMIN_TOKEN>

Response: 200 OK
{
  "success": true,
  "count": 3,
  "staffs": [...]
}
```

#### ❌ ADMIN CANNOT: Delete Staffs (Only SUPERADMIN can)
```
DELETE http://localhost:3000/api/staffs/1

Authorization: Bearer <ADMIN_TOKEN>

Response: 403 Forbidden
{
  "statusCode": 403,
  "message": "Forbidden resource"
}
```

---

### TEACHER Role Access Tests

#### ✅ TEACHER CAN: Create Lessons
```
POST http://localhost:3000/api/lessons

Authorization: Bearer <TEACHER_TOKEN>
Content-Type: application/json

Body:
{
  "groupId": 1,
  "title": "Lesson 1: Introduction",
  "description": "First lesson of the course",
  "lessonDate": "2026-01-15",
  "startTime": "09:00",
  "endTime": "10:30",
  "roomNumber": "A101"
}

Response: 201 Created
{
  "success": true,
  "message": "Lesson created successfully",
  "lesson": {
    "id": 1,
    "groupId": 1,
    "title": "Lesson 1: Introduction",
    "createdBy": 2  // Teacher's ID
  }
}
```

#### ✅ TEACHER CAN: Record Attendance
```
POST http://localhost:3000/api/attendance

Authorization: Bearer <TEACHER_TOKEN>
Content-Type: application/json

Body:
{
  "lessonId": 1,
  "attendances": [
    {
      "studentId": 1,
      "status": "present",
      "comment": "On time"
    },
    {
      "studentId": 2,
      "status": "absent",
      "comment": "Sick"
    }
  ]
}

Response: 201 Created
{
  "success": true,
  "message": "Attendance recorded successfully",
  "attendance": {
    "id": 1,
    "lessonId": 1,
    "details": [...]
  }
}
```

#### ❌ TEACHER CANNOT: Create Courses (Admin only)
```
POST http://localhost:3000/api/courses

Authorization: Bearer <TEACHER_TOKEN>
Content-Type: application/json

Body:
{
  "name": "New Course",
  "price": 500000,
  "duration": 12,
  "level": "beginner"
}

Response: 403 Forbidden
{
  "statusCode": 403,
  "message": "Forbidden resource"
}
```

#### ❌ TEACHER CANNOT: Delete Anything (Superadmin only)
```
DELETE http://localhost:3000/api/courses/1

Authorization: Bearer <TEACHER_TOKEN>

Response: 403 Forbidden
{
  "statusCode": 403,
  "message": "Forbidden resource"
}
```

---

### STUDENT Role Access Tests

#### ✅ STUDENT CAN: View Own Data
```
GET http://localhost:3000/api/students/1

Authorization: Bearer <STUDENT_TOKEN>

Response: 200 OK
{
  "success": true,
  "student": {
    "id": 1,
    "firstName": "Ali",
    "lastName": "Student",
    "username": "student1"
  }
}
```

#### ✅ STUDENT CAN: View All Courses
```
GET http://localhost:3000/api/courses

Authorization: Bearer <STUDENT_TOKEN>

Response: 200 OK
{
  "success": true,
  "count": 5,
  "courses": [...]
}
```

#### ❌ STUDENT CANNOT: Create Courses
```
POST http://localhost:3000/api/courses

Authorization: Bearer <STUDENT_TOKEN>

Response: 403 Forbidden
{
  "statusCode": 403,
  "message": "Forbidden resource"
}
```

#### ❌ STUDENT CANNOT: View Other Students' Data
```
GET http://localhost:3000/api/students/2

Authorization: Bearer <STUDENT_1_TOKEN>

Response: 403 Forbidden
{
  "statusCode": 403,
  "message": "You can only view your own profile"
}
```

#### ❌ STUDENT CANNOT: Delete Anything
```
DELETE http://localhost:3000/api/students/1

Authorization: Bearer <STUDENT_TOKEN>

Response: 403 Forbidden
{
  "statusCode": 403,
  "message": "Forbidden resource"
}
```

---

### SUPERADMIN Role Access Tests

#### ✅ SUPERADMIN CAN: Delete Staffs
```
DELETE http://localhost:3000/api/staffs/2

Authorization: Bearer <SUPERADMIN_TOKEN>

Response: 200 OK
{
  "success": true,
  "message": "Staff deleted successfully",
  "deletedStaff": {
    "id": 2,
    "firstName": "Teacher"
  }
}
```

#### ✅ SUPERADMIN CAN: Delete Courses
```
DELETE http://localhost:3000/api/courses/1

Authorization: Bearer <SUPERADMIN_TOKEN>

Response: 200 OK
{
  "success": true,
  "message": "Course deleted successfully",
  "deletedCourse": {
    "id": 1,
    "name": "English Language A1"
  }
}
```

#### ✅ SUPERADMIN CAN: Delete Students
```
DELETE http://localhost:3000/api/students/1

Authorization: Bearer <SUPERADMIN_TOKEN>

Response: 200 OK
{
  "success": true,
  "message": "Student deleted successfully",
  "deletedStudent": {
    "id": 1,
    "firstName": "Ali"
  }
}
```

---

## 🎯 Role-Based Access Matrix

| Endpoint | SUPERADMIN | ADMIN | TEACHER | STUDENT |
|----------|:----------:|:-----:|:-------:|:-------:|
| POST /staffs | ✅ | ✅ | ❌ | ❌ |
| GET /staffs | ✅ | ✅ | ❌ | ❌ |
| DELETE /staffs/:id | ✅ | ❌ | ❌ | ❌ |
| POST /courses | ✅ | ✅ | ❌ | ❌ |
| GET /courses | ✅ | ✅ | ✅ | ✅ |
| PUT /courses/:id | ✅ | ✅ | ❌ | ❌ |
| DELETE /courses/:id | ✅ | ❌ | ❌ | ❌ |
| POST /groups | ✅ | ✅ | ❌ | ❌ |
| GET /groups | ✅ | ✅ | ✅ | ✅ |
| DELETE /groups/:id | ✅ | ❌ | ❌ | ❌ |
| POST /lessons | ✅ | ✅ | ✅ | ❌ |
| GET /lessons | ✅ | ✅ | ✅ | ✅ |
| POST /attendance | ✅ | ✅ | ✅ | ❌ |
| GET /attendance | ✅ | ✅ | ✅ | ❌ |
| POST /payments | ✅ | ✅ | ❌ | ❌ |
| GET /payments | ✅ | ✅ | ❌ | ❌ |
| POST /schedule | ✅ | ✅ | ❌ | ❌ |
| GET /schedule | ✅ | ✅ | ✅ | ✅ |

---

## 🧪 Quick Test Workflow

### 1️⃣ Register/Login as SUPERADMIN
```bash
# Get SUPERADMIN token (do this first to set up system)
POST /api/auth/staff/register
{
  "firstName": "Super", "lastName": "Admin",
  "username": "superadmin", "password": "superadmin123",
  "role": "SUPERADMIN", "position": "Administrator"
}
# Save the returned token as SUPERADMIN_TOKEN
```

### 2️⃣ Register/Login as ADMIN
```bash
# Create ADMIN via SUPERADMIN (or login if exists)
POST /api/auth/staff/register
{
  "firstName": "Admin", "lastName": "User",
  "username": "admin_user", "password": "admin123",
  "role": "ADMIN", "position": "Manager"
}
# Save token as ADMIN_TOKEN
```

### 3️⃣ Register/Login as TEACHER
```bash
POST /api/auth/staff/register
{
  "firstName": "Teacher", "lastName": "User",
  "username": "teacher_user", "password": "teacher123",
  "role": "TEACHER", "position": "Instructor"
}
# Save token as TEACHER_TOKEN
```

### 4️⃣ Register as STUDENT
```bash
POST /api/auth/student/register
{
  "firstName": "John", "lastName": "Student",
  "username": "student1", "password": "student123"
}
# Save token as STUDENT_TOKEN
```

### 5️⃣ Test ADMIN Capabilities
```bash
# ✅ ADMIN can create courses
POST /api/courses (with ADMIN_TOKEN)

# ✅ ADMIN can view staffs
GET /api/staffs (with ADMIN_TOKEN)

# ❌ ADMIN cannot delete staffs
DELETE /api/staffs/1 (with ADMIN_TOKEN) → 403
```

### 6️⃣ Test TEACHER Capabilities
```bash
# ✅ TEACHER can create lessons
POST /api/lessons (with TEACHER_TOKEN)

# ✅ TEACHER can record attendance
POST /api/attendance (with TEACHER_TOKEN)

# ❌ TEACHER cannot create courses
POST /api/courses (with TEACHER_TOKEN) → 403
```

### 7️⃣ Test STUDENT Limitations
```bash
# ✅ STUDENT can view courses
GET /api/courses (with STUDENT_TOKEN)

# ❌ STUDENT cannot create courses
POST /api/courses (with STUDENT_TOKEN) → 403

# ❌ STUDENT cannot view other students
GET /api/students/2 (with STUDENT_1_TOKEN) → 403
```

---

## 🔑 How to Change Roles

### Method 1: Create New User with Different Role
```bash
POST /api/auth/staff/register
{
  "role": "TEACHER"  # Change this value
}

# Or for ADMIN
{
  "role": "ADMIN"
}

# Or for SUPERADMIN
{
  "role": "SUPERADMIN"
}
```

### Method 2: Direct Database Update (Advanced)
If you need to change an existing user's role:
```bash
# Connect to PostgreSQL
psql postgresql://user:password@localhost/education_db

# Update staff role
UPDATE staffs SET role = 'SUPERADMIN' WHERE id = 1;

# Then login with that staff account to get new token
```

---

## 🔒 Security Important Notes

1. **JWT Token Expiration**: Tokens expire after 7 days
2. **Password Security**: Passwords are hashed with bcrypt (10 salt rounds)
3. **Role Enforcement**: Every endpoint checks the user's role before allowing access
4. **Self-Access Only**: Students can only view their own profile
5. **Token Header**: Always include: `Authorization: Bearer <TOKEN>`

---

## 📍 Common Error Messages

| Status | Message | Meaning |
|--------|---------|---------|
| 401 | Unauthorized | Missing or invalid JWT token |
| 403 | Forbidden resource | Your role doesn't have access to this endpoint |
| 404 | Not found | Resource doesn't exist |
| 400 | Bad request | Invalid data format or missing required fields |

---

## 🧑‍💻 Example: Using Postman

1. **Create a new request** → Set method to POST
2. **Add URL** → `http://localhost:3000/api/auth/staff/login`
3. **Headers tab** → Add `Content-Type: application/json`
4. **Body tab** → Select `raw` → `JSON` → Paste credentials
5. **Send** → Copy `token` from response
6. **New request for API call** → Add header: `Authorization: Bearer <PASTE_TOKEN>`
7. **Send** → See the response based on your role!

---

## ✨ Summary

- **SUPERADMIN**: Full access - Create/Read/Update/Delete everything
- **ADMIN**: Can create resources, can't delete staffs
- **TEACHER**: Can create lessons & record attendance only
- **STUDENT**: Can only view courses and own data

Change roles by registering new accounts with different `role` values! 🚀
