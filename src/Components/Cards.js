import React from 'react'
import Card from "./Card"
import {useState} from "react"


 const Cards = (props) => {
let courses = props.courses;
let category = props.category;
const [likedCourses, setLikedCourses] = useState([]);//yha initially empty array rkha h 


function getCourses() {
    if (category==="All"){// mainly bina category ka props pass kre hi category access kr rhe the esliye error tha
        let allCourses = [];
    Object.values(courses).forEach(array => {
        array.forEach(courseData => {
            allCourses.push(courseData);
        })
    })
    return allCourses;
}
    else
    {
       return courses[category]; 
    }
   
}
return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
     {
        getCourses().map((course) => (
            <Card key = {course.id} 
            course = {course} 
            likedCourses={likedCourses} 
            setLikedCourses={setLikedCourses}/>
        ))
      }
    </div>
  )
}

export default Cards;
