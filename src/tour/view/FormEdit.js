import {Field, Form, Formik} from "formik";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {findById, updateTour} from "../service/TourService";


export function FormEdit() {
    const navigate = useNavigate();
    const {id} = useParams()
    const [tour, setTour] = useState({
        id: "",
        title: "",
        price: "",
        description: "",
    })
    useEffect(() => {
        findById(id).then((res) => {
            setTour(res)
        })
    })

    function editTour(tour) {
        tour.id = id;
        console.log(tour)
        updateTour(tour).then(() => {
            alert("Sửa tuor thành công!")
            navigate("/")
        })
    }

    return (
        <>
            <h1>Sửa tour</h1>
            <Formik
                initialValues={tour}
                onSubmit={(tour) => {
                    editTour(tour)
                }}
                enableReinitialize={true}
            >
                <Form>
                    <p>Tên tour</p>
                    <Field name={"title"}></Field>
                    <p>Giá</p>
                    <Field name={"price"}></Field>
                    <p>Mô tả</p>
                    <Field name={"description"} component={"textarea"}></Field>
                    <br/>
                    <button type={"submit"} className={"btn btn-primary"}>Sửa</button>
                    <Link to={"/"}>
                        <button type={"submit"} className={'btn btn-info'}>Huỷ</button>
                    </Link>
                </Form>
            </Formik>
        </>
    )
}