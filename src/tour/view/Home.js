import {useEffect, useState} from "react";
import {listTour, deleteTourById} from "../service/TourService"
import {Link} from "react-router-dom";

function Home() {
    const [tours, setTours] = useState([])
    const [checkDelete, setCheckDelete] = useState(false)
    useEffect(() => {
        listTour().then((res) => {
            setTours(res)
        })
    }, [checkDelete])

    function deleteTour(id) {
        if (window.confirm("Bạn có chắc chắn xoá không?")) {
            deleteTourById(id).then(() => {
                setCheckDelete(!checkDelete)
            })
        }
    }

    return (
        <>
            <Link to={"/create"}>
                <button className={'btn btn-primary'}>Thêm</button>
            </Link>
            <table className={"table table-striped"}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Tên</th>
                    <th>Giá</th>
                    <th colSpan={2}></th>
                </tr>
                </thead>
                <tbody>
                {tours.map((item, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td><Link to={"/tourInformation/" + item.id}>{item.title}</Link></td>
                            <td>{item.price}</td>
                            <td>
                                <Link to={"/edit/" + item.id}> <button className={"btn btn-warning"}>Edit</button></Link>
                            </td>
                            <td>
                                <button onClick={() => deleteTour(item.id)} className={"btn btn-danger"}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}

export default Home;