
interface CardProps {
    titulo: string;
    autor: string;
    anio: string;
    imagen: string;

}

export const Card = ({ titulo, autor, anio, imagen }: CardProps) => {
    return (
        <>
            <div className="card m-2 border-0 shadow" style={{width:'18rem'}}>
                <img src={imagen} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{titulo}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{autor}</li>
                        <li className="list-group-item">{anio}</li>
                    </ul>
                    
            </div>
        </>
    );
}