import {Card} from "@/components/ui/card.tsx";
import {ImageInputButton} from "@/components/Buttons/ImageInputButton.tsx";

function SendTypeImage() {
    return(
        <>
            <Card className=" ml-40 mt-10 mb-4 rounded-t-2xl rounded-b-2xl h-40 w-70">
                <ImageInputButton/>
            </Card>
        </>
    )
}
export default SendTypeImage;