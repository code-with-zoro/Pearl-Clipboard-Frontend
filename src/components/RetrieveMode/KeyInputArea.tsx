// @ts-ignore

import {InputOTP, InputOTPGroup, InputOTPSlot} from "@/components/ui/input-otp.tsx";
import {REGEXP_ONLY_DIGITS} from "input-otp";
import {Button} from "@/components/ui/button.tsx";
import RetrievedTextBox from "@/components/RetrieveMode/RetrievedTextBox.tsx";
import React from "react";
import axios from "axios";

const baseUrl = import.meta.env.VITE_GATEWAY_URL || "http://localhost:8081/new";

function KeyInputArea(){
    const [showText , setShowText] = React.useState<boolean>(false);
    const [ otp , setOtp] = React.useState<string>()
    const[viewText , setViewText] = React.useState<string>("")
    const onGenrate = async () => {
        const response = await axios.post(`${baseUrl}/retrieve_text` ,{
            key: otp,
        })
       setViewText(response.data.text)
    }
    return(
        <>
            <div >
                <h1 className="font-serif text-xl ">your key</h1>
                <div className="flex justify-center items-center ">
                    <InputOTP id="digits-only" maxLength={6} value={otp} onChange={(value) => setOtp(value)} pattern={REGEXP_ONLY_DIGITS}>
                        <InputOTPGroup className={"bg-green-200"}>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>
                </div>
                <div>
                    <Button
                        onClick={async ()=>{
                            setShowText(true);
                            onGenrate();
                        }}
                        className=" pl-2  pr-2 mt-2 ml-2 mb-3 bg-green-700 rounded-b-2xl rounded-t-2xl font-serif text-center text-1xl text-green-100 h-fit w-140 ">
                        Show Text
                    </Button>
                    {showText && <RetrievedTextBox Text={viewText}/>}
                </div>
            </div>
        </>
    )
}
export default KeyInputArea;