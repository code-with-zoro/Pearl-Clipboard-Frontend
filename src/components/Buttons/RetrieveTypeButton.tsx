
import {ClipboardPenIcon, Files} from "lucide-react"
import {Button} from "@/components/ui/button.tsx";

function RetrieveTypeButtton({
                             onModeChange
                         }: {
    onModeChange: (mode: string) => void
}) {
    return (
        <>
            <div className="flex ml-45">
                <Button
                    onClick={() => onModeChange("File")}
                    className=" pl-2  pr-2 mt-2 ml-2  bg-green-700 rounded-b-xl rounded-t-xl font-serif text-center text-xl text-green-100 h-fit w-fit ">
                    <Files className="mr-1 mt-1 ml-1 mb-1" />
                </Button>
                <Button
                    onClick={() => onModeChange("Text")}
                    className=" pl-2  pr-2 mt-2 ml-35 bg-green-700 rounded-b-xl rounded-t-xl font-serif text-center text-xl text-green-100 h-fit w-fit ">
                    <ClipboardPenIcon className="mr-1 mt-1 ml-1 mb-1" />
                </Button>
            </div>
        </>
    )

}
export default RetrieveTypeButtton;