import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest"
import app from "../../../app";
import { mockedCustomer, mockedCustomerLogin } from "../../mocks"


describe("/customers", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize().then((res) => {
      connection = res
    }).catch((err) => {
      console.error("Error during Data Source initialization", err)
    })
  })

  afterAll(async () => {
    await connection.destroy()
  })

  test("POST /customers -  Must be able to create a customer", async () => {
    const response = await request(app).post('/customers').send(mockedCustomer)

    expect(response.body).toHaveProperty("id")
    expect(response.body).toHaveProperty("name")
    expect(response.body).toHaveProperty("email")
    expect(response.body).toHaveProperty("phone")
    expect(response.body).toHaveProperty("createdAt")
    expect(response.body).not.toHaveProperty("password")
    expect(response.body.name).toEqual("Alberto")
    expect(response.body.email).toEqual("alberto@mail.com")
    expect(response.body.phone).toEqual("41999778877")
    expect(response.status).toBe(201)
  })

  test("POST /customers -  should not be able to create a customer that already exists", async () => {
    const response = await request(app).post('/customers').send(mockedCustomer)

    expect(response.body).toHaveProperty("message")
    expect(response.status).toBe(400)

  })

  test("GET /customers -  Must be able to list customers", async () => {
    await request(app).post('/customers').send(mockedCustomer)
    const loginResponse = await request(app).post("/login").send(mockedCustomerLogin);
    const response = await request(app).get('/customers').set("Authorization", `Bearer ${loginResponse.body.token}`)

    expect(response.body).toHaveLength(2)

  })
}
//   test("GET /customers -  should not be able to list customers without authentication", async () => {
//     const response = await request(app).get('/customers')

//     expect(response.body).toHaveProperty("message")
//     expect(response.status).toBe(401)

//   })

//   test("GET /customers -  should not be able to list customers not being admin", async () => {
//     const userLoginResponse = await request(app).post("/login").send(mockedUserLogin);
//     const response = await request(app).get('/customers').set("Authorization", `Bearer ${userLoginResponse.body.token}`)

//     expect(response.body).toHaveProperty("message")
//     expect(response.status).toBe(403)

//   })

//   test("DELETE /customers/:id -  should not be able to delete user without authentication", async () => {
//     const adminLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
//     const UserTobeDeleted = await request(app).get('/customers').set("Authorization", `Bearer ${adminLoginResponse.body.token}`)

//     const response = await request(app).delete(`/customers/${UserTobeDeleted.body[0].id}`)

//     expect(response.body).toHaveProperty("message")
//     expect(response.status).toBe(401)

//   })

//   test("DELETE /customers/:id -  should not be able to delete user not being admin", async () => {
//     const userLoginResponse = await request(app).post("/login").send(mockedUserLogin);
//     const adminLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
//     const UserTobeDeleted = await request(app).get('/customers').set("Authorization", `Bearer ${adminLoginResponse.body.token}`)

//     const response = await request(app).delete(`/customers/${UserTobeDeleted.body[0].id}`).set("Authorization", `Bearer ${userLoginResponse.body.token}`)

//     expect(response.body).toHaveProperty("message")
//     expect(response.status).toBe(403)

//   })

//   test("DELETE /customers/:id -  Must be able to soft delete user", async () => {
//     await request(app).post('/customers').send(mockedAdmin)

//     const adminLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
//     const UserTobeDeleted = await request(app).get('/customers').set("Authorization", `Bearer ${adminLoginResponse.body.token}`)

//     const response = await request(app).delete(`/customers/${UserTobeDeleted.body[0].id}`).set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
//     const findUser = await request(app).get('/customers').set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
//     expect(response.status).toBe(204)
//     expect(findUser.body[0].isActive).toBe(false)

//   })

//   test("DELETE /customers/:id -  shouldn't be able to delete user with isActive = false", async () => {
//     await request(app).post('/customers').send(mockedAdmin)

//     const adminLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
//     const UserTobeDeleted = await request(app).get('/customers').set("Authorization", `Bearer ${adminLoginResponse.body.token}`)

//     const response = await request(app).delete(`/customers/${UserTobeDeleted.body[0].id}`).set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
//     expect(response.status).toBe(400)
//     expect(response.body).toHaveProperty("message")

//   })

//   test("DELETE -  should not be able to delete user with invalid id", async () => {
//     await request(app).post('/customers').send(mockedAdmin)

//     const adminLoginResponse = await request(app).post("/login").send(mockedAdminLogin);

//     const response = await request(app).delete(`/customers/13970660-5dbe-423a-9a9d-5c23b37943cf`).set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
//     expect(response.status).toBe(404)
//     expect(response.body).toHaveProperty("message")

//   })

//   test("PATCH /customers/:id -  should not be able to update user without authentication", async () => {
//     const adminLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
//     const userTobeUpdate = await request(app).get('/customers').set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
//     const response = await request(app).patch(`/customers/${userTobeUpdate.body[0].id}`)

//     expect(response.body).toHaveProperty("message")
//     expect(response.status).toBe(401)

//   })

//   test("PATCH /customers/:id - should not be able to update user with invalid id", async () => {
//     const newValues = { name: "Joana Brito", email: "joanabrito@mail.com" }

//     const admingLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
//     const token = `Bearer ${admingLoginResponse.body.token}`

//     const userTobeUpdateRequest = await request(app).get("/customers").set("Authorization", token)
//     const userTobeUpdateId = userTobeUpdateRequest.body[0].id

//     const response = await request(app).patch(`/customers/13970660-5dbe-423a-9a9d-5c23b37943cf`).set("Authorization", token).send(newValues)

//     expect(response.body).toHaveProperty("message")
//     expect(response.status).toBe(404)
//   })

//   test("PATCH /customers/:id - should not be able to update isAdm field value", async () => {
//     const newValues = { isAdm: false }

//     const admingLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
//     const token = `Bearer ${admingLoginResponse.body.token}`

//     const userTobeUpdateRequest = await request(app).get("/customers").set("Authorization", token)
//     const userTobeUpdateId = userTobeUpdateRequest.body[0].id

//     const response = await request(app).patch(`/customers/${userTobeUpdateId}`).set("Authorization", token).send(newValues)

//     expect(response.body).toHaveProperty("message")
//     expect(response.status).toBe(401)
//   })

//   test("PATCH /customers/:id - should not be able to update isActive field value", async () => {
//     const newValues = { isActive: false }

//     const admingLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
//     const token = `Bearer ${admingLoginResponse.body.token}`

//     const userTobeUpdateRequest = await request(app).get("/customers").set("Authorization", token)
//     const userTobeUpdateId = userTobeUpdateRequest.body[0].id

//     const response = await request(app).patch(`/customers/${userTobeUpdateId}`).set("Authorization", token).send(newValues)
//     expect(response.body).toHaveProperty("message")
//     expect(response.status).toBe(401)
//   })

//   test("PATCH /customers/:id - should not be able to update id field value", async () => {
//     const newValues = { id: false }

//     const admingLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
//     const token = `Bearer ${admingLoginResponse.body.token}`

//     const userTobeUpdateRequest = await request(app).get("/customers").set("Authorization", token)
//     const userTobeUpdateId = userTobeUpdateRequest.body[0].id

//     const response = await request(app).patch(`/customers/${userTobeUpdateId}`).set("Authorization", token).send(newValues)
//     expect(response.body).toHaveProperty("message")
//     expect(response.status).toBe(401)
//   })

//   test("PATCH /customers/:id - should not be able to update another user without adm permission", async () => {
//     const newValues = { isActive: false }

//     const userLoginResponse = await request(app).post("/login").send(mockedCustomer);
//     const admingLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
//     const userToken = `Bearer ${userLoginResponse.body.token}`
//     const adminToken = `Bearer ${admingLoginResponse.body.token}`

//     const userTobeUpdateRequest = await request(app).get("/customers").set("Authorization", adminToken)
//     const userTobeUpdateId = userTobeUpdateRequest.body[1].id

//     const response = await request(app).patch(`/customers/${userTobeUpdateId}`).set("Authorization", userToken).send(newValues)

//     expect(response.body).toHaveProperty("message")
//     expect(response.status).toBe(401)
//   })

//   test("PATCH /customers/:id -  should be able to update user", async () => {
//     const newValues = { name: "Joana Brito", email: "joanabrito@mail.com" }

//     const admingLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
//     const token = `Bearer ${admingLoginResponse.body.token}`

//     const userTobeUpdateRequest = await request(app).get("/customers").set("Authorization", token)
//     const userTobeUpdateId = userTobeUpdateRequest.body[0].id

//     const response = await request(app).patch(`/customers/${userTobeUpdateId}`).set("Authorization", token).send(newValues)

//     const userUpdated = await request(app).get("/customers").set("Authorization", token)

//     expect(response.status).toBe(200)
//     expect(userUpdated.body[0].name).toEqual("Joana Brito")
//     expect(userUpdated.body[0]).not.toHaveProperty("password")
//   })
// })