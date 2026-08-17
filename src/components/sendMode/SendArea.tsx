// @ts-ignore


import React from "react";
import SendTypeText from "@/components/SendType/SendTypeText.tsx";
import SendTypeImage from "@/components/SendType/SendTypeImage.tsx";
import SendTypeButtton from "@/components/Buttons/SendTypeButtton.tsx";
import SendTypeFile from "@/components/SendType/SendTypeFile.tsx";


function SendArea() {
    const [mode, setMode] = React.useState("Text")
    return (
        <>
            <div>
                <SendTypeButtton onModeChange={setMode}/>
                {
                    mode === "Text" && (
                        <SendTypeText
                        />
                    )
                }
                {
                    mode === "Image" && (
                        <SendTypeImage/>
                    )
                }
                {
                    mode === "File" && (
                        <SendTypeFile/>
                    )
                }

            </div>
        </>
    )
}

export default SendArea