import React from"react";
import Button from './components/ui/Button'
import StudentList from './components/StudentList'

function App() {
  const studenList = [
    {id:'1',name: 'Bermet'},
    {id:'2',name: 'Meerim'},
    {id:'3',name: 'Ulan'},
  ]
  return (
    <div>
      <StudentList student={studenList}/>
      
     <Button/>
    </div>
  );
}

export default App