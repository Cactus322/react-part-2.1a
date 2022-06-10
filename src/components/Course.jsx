import { Part } from "./Part";
import { CourseName } from "./CourseName";

export const Course = ({courses}) => {
    return (
        <>
            {courses.map(course => {
                let total = course.parts.reduce((prev, current) => 
                    prev + current.exercises, 0
                )

                return (
                    <div key={course.id}>
                        <CourseName course={course.name} />
                        
                        <ul>
                            {course.parts.map(part =>
                                <Part key={part.id} part={part.name} exercises={part.exercises}/>
                            )}

                            <li>Total of {total} exercises</li>
                        </ul>
                    </div>
                )
            })}
            
            
        </>
    )
}