import Problem from "@/components/practise/Problem";

function Practice(){

    function getCourses(){
        fetch('/api/courses')
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return <div>
        <Problem/>
    </div>
}
export default Practice;