import {
    Field,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Image } from "lucide-react";

export function ImageInputButton() {
    return (
        <Field>
            <FieldLabel htmlFor="picture" className="cursor-pointer">
                <Image className="flex justify-center items-center ml-30 mt-14  lg:w-auto h-6 w-6" />
            </FieldLabel>

            <Input
                id="picture"
                type="file"
                accept="image/*"
                className="hidden"
            />
        </Field>
    );
}


