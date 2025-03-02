export function ImageContainer(props: { path: string, alt?: string }) {
    return (
        <img
            src={props.path}
            alt={props?.alt ?? 'imagem container'}
            className="h-[150px] md:h-[350px] w-[150px] md:w-[350px] rounded-md shadow-lg"
        />
    )
}