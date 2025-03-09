export interface WhatsappProps {
    message?: string;
}

export const redirectToWhatsapp = (props?: WhatsappProps): void => {
    const phoneNumber: string = "5561983536556";
    const message: string = props?.message ?? "Olá, gostaria de fazer um orçamento";
    const url: string = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}