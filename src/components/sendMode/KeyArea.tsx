// @ts-ignore

import {Button} from "@/components/ui/button.tsx";
import {InputOTP, InputOTPGroup, InputOTPSlot} from "@/components/ui/input-otp.tsx";
import {REGEXP_ONLY_DIGITS} from "input-otp"
import React from "react";



function KeyArea({ setShowKeyArea , keyValue }: { setShowKeyArea: React.Dispatch<React.SetStateAction<boolean>> ; keyValue: string }) {

    return(
        <>
            <div >
                <h1 className="font-serif text-xl ">your key</h1>
                <div className="flex justify-center items-center ">
                <InputOTP id="digits-only" maxLength={6} value={keyValue} readOnly pattern={REGEXP_ONLY_DIGITS}>
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
                    onClick={() => navigator.clipboard.writeText(keyValue)}
                    className=" pl-2  pr-2 mt-2 ml-2 mb-3 bg-green-700 rounded-b-2xl rounded-t-2xl font-serif text-center text-1xl text-green-100 h-fit w-40 ">
                    copy
                </Button>
                <Button
                    onClick={()=>{
                        setShowKeyArea(false)
                    }}
                    className="pl-2  pr-2 mt-2 ml-2 mb-3 bg-green-700 rounded-b-2xl rounded-t-2xl font-serif text-center text-1xl text-green-100 h-fit w-40 ">
                    New Text
                </Button>
                </div>
            </div>

        </>
    )

}
export default KeyArea;