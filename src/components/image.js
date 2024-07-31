import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function Image({ image, ...rest }) {
    return (
        <>
            <LazyLoadImage src={image.src} alt={image.alt} width={image.width} height={image.height} {...rest} />
        </>
    )
}