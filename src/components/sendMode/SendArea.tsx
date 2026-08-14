// @ts-ignore


import {Textarea} from "@/components/ui/textarea.tsx";
import GenerateKeyButton from "@/components/sendMode/GenerateKeyButton.tsx";
import axios from 'axios';
import React from "react";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import SendTypeText from "@/components/RetrieveType/SendTypeText.tsx";
import SendTypeImage from "@/components/RetrieveType/SendTypeImage.tsx";
import TypeButtton from "@/components/Buttons/TypeButtton.tsx";
import SendTypeFile from "@/components/RetrieveType/SendTypeFile.tsx";

const baseUrl = import.meta.env.VITE_GATEWAY_URL || "http://localhost:8081/new";

function SendArea() {
    const [mode , setMode] = React.useState("Text")
    const [checked, setChecked] = React.useState(false)
    const [textValue , setTextValue] = React.useState("")
    const [key , setKey] =React.useState<string>("")


    function type(){
        if(checked === true){
            return "ONE_TIME";
        }else return "A_DAY";
    }
   /* const genrateKeyfunc = async () => {
        const response = await axios.post(`${baseUrl}/save_text`, {
            text: textValue,
            type: type()
        })
        setKey(response.data.key);
    }*/
return(
    <>
        <div>
            <TypeButtton onModeChange={setMode} />
            {
                mode === "Text" &&(
                    <SendTypeText
                    />
                )
            }
            {
                mode === "Image" &&(
                    <SendTypeImage/>
                )
            }
            {
                mode === "File" &&(
                    <SendTypeFile/>
                )
            }

           {/* <div className="ml-5 flex">
            <Checkbox className="rounded-b-md ml-3 rounded-t-md bg-green-400 size-5" checked={checked} onCheckedChange={(checked)=>{setChecked(checked === true)}}/>
                <h1 className="ml-2 text-green-950"> Self-district</h1>
            </div>*/}
        </div>

       {/* <GenerateKeyButton onGenrate={genrateKeyfunc} keyValue={key}/>*/}
    </>
)
}
export default SendArea