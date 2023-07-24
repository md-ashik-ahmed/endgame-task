import College from "../../Component/College";
import useCollege from "../../hooks/useCollege";


const Colleges = () => {

    const [users]= useCollege()

    return (
        <div className="grid md:grid-cols-3 gap-6 pt-10 px-4">
       {
            users.map(item => <College
            key = {item._id}
            item = {item}
            ></College>)
        }
       </div>
    );
};

export default Colleges;