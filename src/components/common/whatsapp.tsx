import {redirectToWhatsapp, WhatsappProps} from "../../core/services/whatsapp.service.ts";

export function Whatsapp(props: WhatsappProps) {
    return (
        <img
            src="../../../public/assets/icons/whatsapp.svg"
            alt="whatsapp to contact"
            className="fixed bottom-4 right-4 w-16 h-16 cursor-pointer"
            onClick={() => redirectToWhatsapp(props)}
        />
    )
}

export const breakLineWhatsappMessage: string = '!%0';