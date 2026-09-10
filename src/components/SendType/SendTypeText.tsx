import {Textarea} from "@/components/ui/textarea.tsx";
import axios from "axios";
import React from "react";
import GenerateKeyButton from "@/components/sendMode/GenerateKeyButton.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";

const baseUrl = import.meta.env.VITE_GATEWAY_URL || "http://localhost:8081/new";
function SendTypeText() {
    const [textValue , setTextValue] = React.useState("")
    const [key , setKey] =React.useState<string>("")
    const [checked, setChecked] = React.useState(false)

    function type(){
        if(checked === true){
            return "ONE_TIME";
        }else return "A_DAY";
    }

    const genrateKeyfunc = async () => {
        try {
            const response = await axios.post(`${baseUrl}/save_text`, {
                text: textValue,
                type: type()
            })
            setKey(response.data.key);
        } catch (error) {
            alert(error);
        }
    }

    return(
        <><div>
            <Textarea
                onChange={(event) => setTextValue(event.target.value)}
                className="bg-white font-serif border-b-2 rounded-b-2xl rounded-t-2xl ml-6 mr-3 mt-4 mb-3 w-140"
                placeholder="Paste or Type Your Text Here">
            </Textarea>
        </div>
        <div className="ml-5 flex">
            <Checkbox className="rounded-b-md ml-3 rounded-t-md bg-green-400 size-5" checked={checked} onCheckedChange={(checked)=>{setChecked(checked === true)}}/>
            <h1 className="ml-2 text-green-950"> Self-district</h1>
        </div>

        <GenerateKeyButton onGenrate={genrateKeyfunc} keyValue={key}/>
        </>
    )
}
export default SendTypeText;