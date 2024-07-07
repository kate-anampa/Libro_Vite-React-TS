import { personas } from './../../Objetcs/PersonaArray';
import { ListaPersona } from './ListaPersona';

export const Persona = () => {
    return (
        <>
            <ol>
                {personas.map((prop) => (

                    <ListaPersona propiedad={prop} />
                ))}

            </ol>
        </>
    );
}