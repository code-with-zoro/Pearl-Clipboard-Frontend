// @ts-ignore
import {Card} from "@/components/ui/card.tsx";
import {FieldLabel} from "@/components/ui/field.tsx";
import {Files} from "lucide-react";
import React from "react";
function RetrievedTextBox({Url}: {Url: string}) {
    React.useEffect(() => {
        if (!Url) return;

        const downloadFile = async () => {
            try {
                const response = await fetch(Url);
                const blob = await response.blob();

                const blobUrl = window.URL.createObjectURL(blob);

                const link = document.createElement("a");
                link.href = blobUrl;
                link.download = "download";

                document.body.appendChild(link);
                link.click();
                link.remove();

                window.URL.revokeObjectURL(blobUrl);
            } catch (error) {
                console.error("Download failed:", error);
            }
        };
        downloadFile();
    }, [Url]);
    return (
        <>
            <div>
               <Card className=" ml-40 mt-10 mb-4 rounded-t-2xl rounded-b-2xl h-40 w-70">
                       <FieldLabel htmlFor="picture" className="cursor-pointer">
                           {Url ? (
                               <div className="mt-20 flex flex-row justify-center h-full">
                                   <Files className=" h-7 w-7" />
                                   <p className=" wrap-break-word mt-2 text-sm text-center px-1 truncate max-w-fit">
                                       = Your file is being downloaded
                                   </p>
                               </div>
                           ) : (
                               <div className=" mt-7">
                               <Files className=" ml-31  h-7 w-7"/>
                               <p className=" text-wrap mt-2 text-sm text-center px-1 truncate max-w-fit">
                                No Files To Show , Check Your Key
                               </p>
                               </div>
                           )}
                       </FieldLabel>
               </Card>
            </div>
        </>
    )
}
export default RetrievedTextBox;