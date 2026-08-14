// @ts-ignore

import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";
import RetrievedTextArea from "@/components/RetrieveMode/RetrievedTextArea.tsx";
import SendArea from "@/components/sendMode/SendArea.tsx";



function sendandRecieveButton() {

const [ mode, setMode ] = useState<"send" | "receive">("send");


    return(
        <>

            <div>
                <Button
                    onClick={() => setMode("send")}
                    className=" pl-2  pr-2 mt-2  bg-green-700 rounded-b-2xl rounded-t-2xl font-serif text-center text-2xl text-green-100 h-fit w-70 ">
                    Send
                </Button>
                <Button
                    onClick={() => setMode("receive")}
                    className="pl-2  pr-2 mt-2 ml-1 bg-green-700 rounded-b-2xl rounded-t-2xl font-serif text-center text-2xl text-green-100 h-fit w-70 ">
                    Retrieve
                </Button>
            </div>
            {mode === "send" ? <SendArea/> :<RetrievedTextArea/> }
        </>
    )

}
export default sendandRecieveButton;