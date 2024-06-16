const express=require("express")
const students=require('./data')

const router=express.Router()
router.get("/", (req, res) => {
    console.log(students)
    res.status(200).json(students)
})

router.post('/api/createStudent', (req, res) => {
    try {
        let createdStudent = {
            "id": req.body.id,
            "studentName": req.body.name,
            "year": req.body.year,
            "age": req.body.age,
            "department":req.body.department
        }

        students.push(createdStudent)
        res.json({ "data": students, "success": "true" }).status(200)


    }
    catch (error) {
        res.send(error)

    }
})


router.get("/api/getStudent/:id", (req, res) => {
    console.log("this server is running");

    let student = students.find(student => student.id == req.params.id);

    if (student) {
        res.status(200).send(student);
    } else {
        res.status(404).send({ "message": "Student not found" });
    }
});


router.put("/api/updateStudentDepartment/:id",(req,res)=>{
let student=students.find((student)=>student.id==req.params.id)
if(student){
   let  myStudent={...student,"department":req.body.department} 
  res.send({"updated student":myStudent})
}
else{
res.json(404).send("Student not found")
}
})


router.delete("/api/deleteStudent/:id",(req,res)=>{
console.log("you got me here")
const studentId=req.params.id
let index=students.findIndex((student)=>student.id==studentId)
console.log(`the index to be deleted ${index}`)
if(index==-1){
  res.send("Student not found")
}
else{
let deltedStudent=students.splice(index,1)[0]
res.send({"deletedStudent":deltedStudent})
}

})

router.get('/api/filterStudent',(req,res)=>{

let searchTerm=req.query.name
console.log(`query name ${searchTerm}`)
let filteredStudents=students.filter((student)=>{
return student.studentName.toLowerCase().includes(searchTerm.toLowerCase())

})


res.send({"students":filteredStudents})
})

module.exports=router