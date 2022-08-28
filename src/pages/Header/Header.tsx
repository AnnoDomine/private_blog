type Props = {
    loggedin?: boolean;
    height: number;
};

const Header = ({ loggedin = false, height }: Props) => {
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                position: "fixed",
                top: "0",
                left: "0",
                height: `${height}px`,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "rgba(0, 255, 240, 0.2)",
            }}
        >
            <div style={{ margin: "16px" }}>Header</div>
        </div>
    );
};

export default Header;
