import {Field, Form, Formik} from "formik";
import {saveTour} from '../service/TourService'
import {Link, useNavigate} from "react-router-dom";

export function FormCreate() {
    const navigate = useNavigate();

    function createTour(tour) {
        saveTour(tour).then(() => {
            alert("Thêm tour thành công!")
            navigate("/")
        })
    }

    return (
        <>
            <h1>Thêm tour</h1>
            <Formik
                initialValues={{}}
                onSubmit={(tour) => {
                    createTour(tour)
                }}
            >
                <Form>
                    <p>Tên tour</p>
                    <Field name={"title"}></Field>
                    <p>Giá</p>
                    <Field name={"price"}></Field>
                    <p>Mô tả</p>
                    <Field name={"description"} component={"textarea"}></Field>
                    <br/>
                    <button type={"submit"} className={"btn btn-primary"}>Thêm mới</button>
                    <Link to={"/"}>
                        <button type={"submit"} className={'btn btn-info'}>Huỷ</button>
                    </Link>
                </Form>
            </Formik>
        </>
    )
}