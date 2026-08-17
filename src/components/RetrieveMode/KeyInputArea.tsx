// @ts-ignore

import {InputOTP, InputOTPGroup, InputOTPSlot} from "@/components/ui/input-otp.tsx";
import React from "react";
import RetrieveTypeButton from "@/components/Buttons/RetrieveTypeButton.tsx";
import RetrieveTypeText from "@/components/RetrieveType/RetrieveTypeText.tsx";
import RetrieveTypeFile from "@/components/RetrieveType/RetrieveTypeFile.tsx";


function KeyInputArea(){
    const [mode , setMode] = React.useState("Text");
    return(
        <>
            <div>
                <RetrieveTypeButton onModeChange={setMode}/>
                {
                    mode === "Text" &&
                    <RetrieveTypeText/>
                }
                {
                    mode == "File" &&
                    <RetrieveTypeFile/>
                }
            </div>
        </>
    )
}
export default KeyInputArea;