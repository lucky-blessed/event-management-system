import { ConfigProvider } from "antd";

function ThemeProvider({ children }: { children: React.ReactNode }) {
    return <ConfigProvider theme={{
        token: {
            colorPrimary: '#222831',
            borderRadius: 1,
        },
        components: {
            Button: {
                controlHeight: 40,
                controlOutline: "none"
            },
            Input: {
                controlHeight: 40,
                controlOutline: "none",
            }
        },
    }}>{children}</ConfigProvider>;

}

export default ThemeProvider;