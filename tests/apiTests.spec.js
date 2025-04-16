const { test, expect } = require("@playwright/test");
const { request } = require("http");
var userId;
test("Get Request", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users/2");
  console.log(await response.json());
  expect(response.status()).toBe(200);
});

test("Create User", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/user", {
    data: {
      name: "shabab",
      job: "leader",
    },
    headers:{
        "Accept": "application/json"
    }
  });
//  console.log(await response.json());
var data=await response.json();

  expect (response.status()).toBe(201)
  userId=data.id;
  console.log("ID is ",userId)
  expect(data.name).toBe("shabab")
  
});


test("Update User",async ({request})=>{
    const response= await request.put("https://reqres.in/api/users/"+userId,{
        data:{
            
                "name": "shabab",
                "job": "tester"
            
        },headers:{
            "Accept": "application/json"
        }
    })



    console.log(await response.json())
    expect (response.status()).toBe(200)
  
})

test("Delete API",async ({request})=>{
    const response=await request.delete("https://reqres.in/api/users/"+userId)
    expect(response.status()).toBe(204)
})