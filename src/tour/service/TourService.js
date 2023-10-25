import axios from "axios";

export function listTour() {
    return new Promise((resolve) => {
        resolve(
            axios.get('http://localhost:3000/tuors')
                .then((res) => {
                    return res.data
                })
                .catch(() => {
                    return []
                })
        )
    })
}

export function deleteTourById(id) {
    return new Promise((resolve) => {
        resolve(
            axios.delete("http://localhost:3000/tuors/" + id)
                .then(() => {
                    alert("Xoá thành công!")
                }).catch(() => {
                alert("Xảy ra lỗi kết nối tới máy chủ!")
            })
        )
    })
}

export function findById(id) {
    return new Promise((resolve) => {
        resolve(
            axios.get("http://localhost:3000/tuors/" + id)
                .then((res) => {
                    return res.data
                }).catch(() => {
                return {}
            })
        )
    })
}

export function saveTour(tour) {
    return new Promise((resolve) => {
        resolve(
            axios.post("http://localhost:3000/tuors", tour)
                .then()
                .catch(() => {
                    alert("Xảy ra lỗi kết nối tới máy chủ!")
                })
        )
    })
}

export function updateTour(tour) {
    return new Promise((resolve) => {
        resolve(
            axios.put("http://localhost:3000/tuors/" + tour.id, tour)
                .then()
                .catch()
        )
    })
}