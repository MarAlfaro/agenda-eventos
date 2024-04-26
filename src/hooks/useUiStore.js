import { useDispatch, useSelector } from 'react-redux';
import { onOpenDateModal, onCloseDateModal } from '../store'; //importar desde la stor

export const useUiStore = () => {

    const { 
        isDateModalOpen 
    } = useSelector( state => state.ui );

    const dispatch = useDispatch();

    const openDateModal = () => {
        dispatch( onOpenDateModal() );
    }

    const closeDateModal = () => {
        dispatch( onCloseDateModal() );
    }

    return {
        //propiedades
        isDateModalOpen,

        //metodos
        openDateModal, 
        closeDateModal
    }

}