// @ts-ignore
import {Button} from "@/components/ui/button.tsx";
import SendandRecieveButton from "@/components/Buttons/SendandRecieveButton.tsx";


function TextBox() {
    return (
        <>
            <div className="text-center items-center justify-center flex">
            <div className="mt-6 w-fit h-fit bg-green-100 rounded-t-2xl rounded-b-2xl">
                <SendandRecieveButton/>
            </div>
            </div>
        </>
        )
}
export default TextBox;