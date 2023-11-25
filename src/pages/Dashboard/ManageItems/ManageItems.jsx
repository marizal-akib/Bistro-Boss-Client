import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { GiTrashCan } from "react-icons/gi";
import { FaEdit } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, ,refetch] = useMenu();
  const axiosSecure = useAxiosSecure()

  const handleDelete =  (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`)
        console.log(res.data);
        if(res.data.deletedCount >0){
            refetch();
            Swal.fire({
                title: "Deleted!",
                text: `${item.name} has been deleted.`,
                icon: "success",
              });
        }
    }
    });
  };
  return (
    <div>
      <SectionTitle
        heading={"Manage All Items"}
        subHeading={"--- Hurry up ---"}
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                  {item.name}
                  </td>
                  <td>${item.price}</td>
                  <td>
                  <Link to={`/dashboard/updateItem/${item._id}`}
                      
                      className="btn btn-ghost  bg-orange-600  btn-lg"
                    >
                      <FaEdit className="text-white "></FaEdit>
                    </Link>
                  </td>
                  <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn  btn-ghost btn-lg"
                  >
                    <GiTrashCan className="text-red-600"></GiTrashCan>
                  </button>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
