import {Card} from "@/components/ui/card.tsx";
import React from "react";
import axios from "axios";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import GenerateKeyButton from "@/components/sendMode/GenerateKeyButton.tsx";
import {Field, FieldLabel} from "@/components/ui/field.tsx";
import {Image} from "lucide-react";
import {Input} from "@/components/ui/input.tsx";

const baseUrl = import.meta.env.VITE_GATEWAY_URL || "http://localhost:8081/new";
function SendTypeImage() {

    const [fileValue , setFileValue] = React.useState<File |null>(null);
    const [key , setKey] =React.useState<string>("")
    const [checked, setChecked] = React.useState(false);

    function type(){
        if(checked === true){
            return "ONE_TIME";
        }else return "A_DAY";
    }
    const genrateKeyfunc = async () => {
        try {
            if (!fileValue) {
                alert("Please select an image");
                return;
            }
            const formData = new FormData();
            formData.append("file", fileValue);
            formData.append("type", type())
            const response = await axios.post(`${baseUrl}/save_file`, formData)
            setKey(response.data.key);
        }catch(error){
            alert("file size should be under 500KB ");
        }
    }
    return(
        <>
            <div>
            <Card className=" ml-40 mt-10 mb-4 rounded-t-2xl rounded-b-2xl h-40 w-70">
                <Field>
                    <FieldLabel htmlFor="picture" className="cursor-pointer">
                        {fileValue ? (
                            <img
                                src={URL.createObjectURL(fileValue)}
                                alt="Selected image"
                                className="flex justify-center items-center w-fit h-fit transition-all duration-300 hover:scale-180"
                            />
                        ) : (
                            <Image className="flex justify-center items-center ml-30 mt-14 lg:w-auto h-6 w-6" />
                        )}
                    </FieldLabel>

                    <Input
                        id="picture"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(event)=>{
                            const file = event.target.files?.[0];
                            if(file){
                                setFileValue(file);
                            }
                        }}
                    />
                </Field>
            </Card>
            </div>
            <div className="ml-5 flex">
                <Checkbox className="rounded-b-md ml-3 rounded-t-md bg-green-400 size-5" checked={checked} onCheckedChange={(checked)=>{setChecked(checked === true)}}/>
                <h1 className="ml-2 text-green-950"> Self-district</h1>
            </div>

            <GenerateKeyButton onGenrate={genrateKeyfunc} keyValue={key}/>
        </>
    )
}
export default SendTypeImage;