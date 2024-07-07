import { PersonaProps } from './../../Objetcs/PersonaArray';


interface typeProps {
    propiedad : PersonaProps;
}

export const ListaPersona = ({propiedad} : typeProps) => {
    return (
        <li key={propiedad.id}> {propiedad.nombre} {propiedad.apellido}</li>
    );
}