import College from "../../Component/College";
import useCollege from "../../hooks/useCollege";


const Colleges = () => {

    const [users]= useCollege()

    return (
       <div className="pt-20">
         <div className="grid md:grid-cols-3 gap-6 pt-10 px-4">
       {
            users.map(item => <College
            key = {item._id}
            item = {item}
            ></College>)
        }
       </div>
       </div>
    );
};

export default Colleges;