type Props = {};

const Footer = (props: Props) => {
    return (
        <div
            style={{
                display: "flex",
                height: "100px",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "rgba(0, 255, 240, 0.2)",
            }}
        >
            <div style={{ margin: "16px" }}>Footer</div>
        </div>
    );
};

export default Footer;
