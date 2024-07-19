const Loading = () => {
    const style = {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7,
    };

    return (
        <>
            <div style={style} className=" bg-white w-100 h-100">
                <div className="spinner-border m-5" role="status"></div>
                <span className="sr-only">Loading...</span>
            </div>
        </>
    );
};

export default Loading;
