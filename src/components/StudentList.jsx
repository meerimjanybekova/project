const StudentList = (props) => {
    const student1=props.student[1].name
    const student2=props.student[2].name
    const student3=props.student[3].name
    return (
        <ul>
            <li>{student1}</li>
            <li>{student2}</li>
            <li>{student3}</li>
            
        </ul>
    )
}


export default StudentList