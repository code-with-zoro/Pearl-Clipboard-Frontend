// @ts-ignore


import {Button} from "@/components/ui/button.tsx";
import KeyArea from "@/components/sendMode/KeyArea.tsx";
import * as React from "react";



function GenerateKeyButton({ onGenrate, keyValue }: { onGenrate: () => void; keyValue: string }) {
    const [showKeyArea , setShowKeyArea] = React.useState(false);
    return (
        <>
            <div className="flex items-center justify-between w-full">
            <Button
                onClick={ async ()=>{
                    onGenrate();
                    setShowKeyArea(true);
                }}
                className="pl-2  pr-2 mt-2 ml-6 mb-2 bg-green-700 rounded-b-2xl rounded-t-2xl font-serif text-center text-2xl text-green-100 h-fit w-140" >
                Generate Key
            </Button>
            </div>
            {showKeyArea &&  <KeyArea setShowKeyArea={setShowKeyArea} keyValue={keyValue} />}
        </>
    )

}
export default GenerateKeyButton;