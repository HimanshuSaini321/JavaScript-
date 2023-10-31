// Destructuring of objects

const course = {
    name: "JS in Hindi",
    price: "999",
    courseInstructor : "Hitesh"
}


// course.courseInstructor

const { courseInstructor  : instructor} = course

console.log(instructor);