import '../../../App.css'
export const GetDate = () => {
    function GetDateTodo() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const withSlashes = [year, month, day].join('/');
        const time = [hour, minute].join(":")
        const mached = [withSlashes, time].join("__")
        return mached
    }
    let handleGetDate = {
        date: GetDateTodo()
    }
    return (
        <>
            <p className='footerTag'>Date: {handleGetDate.date}</p>
        </>
    )
}