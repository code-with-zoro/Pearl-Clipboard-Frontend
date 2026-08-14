// @ts-ignore

import {Textarea} from "@/components/ui/textarea.tsx";

function RetrievedTextBox({Text}: {Text: string}) {

    return (
        <>
            <div>
                <Textarea
                    value={Text || "no text to show"}
                    readOnly={true}
                    className="bg-white font-serif border-b-2 rounded-b-2xl rounded-t-2xl ml-3 mr-3 mt-4 mb-3 w-140"
                   >
                </Textarea>
            </div>
        </>
    )
}
export default RetrievedTextBox;