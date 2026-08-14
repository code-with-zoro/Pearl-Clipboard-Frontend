import {Card} from "@/components/ui/card.tsx";
import {FileInputButton} from "@/components/Buttons/FileInputButton.tsx";

function SendTypeFile() {
    return(
        <>
            <Card className=" ml-40 mt-10 mb-4 rounded-t-2xl rounded-b-2xl h-40 w-70">
                <FileInputButton/>
            </Card>
        </>
    )
}
export default SendTypeFile;