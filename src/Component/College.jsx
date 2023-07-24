

const College = ({item}) => {
    const {college_name, rating,  admission_date, image_url} = item
    return (
        <div>
        <div className="card rounded-none w-96 bg-blue-100 shadow-xl  h-96">
    <figure><img className="w-full h-84" src={image_url} alt="image" /></figure>
    <div className="card-body">
   <div className="flex justify-between ">
   <h2 className="card-title">{college_name}</h2>
   
   </div>
   
    <p>Rating : {rating}</p>
    <p>Admission : {admission_date}</p>
    
  </div>
</div>
        </div>
    );
};

export default College;