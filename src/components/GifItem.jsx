export const GifItem = ({ title, url }) => {
    return (
        <div className="gif">
            <img src={url} alt={title}/>
            <p className="gif-name">{title}</p>
        </div>
    )
}
