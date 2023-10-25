import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {findById} from "../service/TourService"

export function TourInformation() {
    const {id} = useParams();
    const [tour, setTour] = useState({})
    useEffect(() => {
        findById(id).then((res) => {
            setTour(res)
        })
    }, [id])
    return (
        <>
            <h1>Chi tiết tour</h1>
            <p>Tour du lịch {tour.title}</p>
            <p>Giá: {tour.price}</p>
            <p>Giới thiệu: {tour.description}</p>
            <Link to={"/"}><button className={"btn btn-primary"}>Danh sách</button></Link>
        </>
    )
}