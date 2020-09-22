import React, { useEffect, useState } from 'react';
import Modal from '@components/modal';
import {
    Overlay,
    Wrapper,
    Cross
} from './styles';


interface Props {
    visibility? : boolean,
    onClose?() : void; 
}

export const Popup : React.FC<Props> = ({children,visibility = true,onClose}) => {
    const [isVisible,setVisibility] = useState(visibility);

    useEffect(()=>{
        setVisibility(visibility);
    },[visibility]);

    const handleClose : React.MouseEventHandler = (e) => {
        const target = e.target as any;
        if(target.dataset.close) {
            if(typeof onClose === 'function') {
                onClose();
            } else {
                setVisibility(false);
            }
        }
    }

    return (
        <Modal>
            <Overlay data-close={true} onClick={handleClose} visibility={isVisible}>
                <Wrapper>
                    <Cross data-close={true} onClick={handleClose}>
                        <use xlinkHref="/sprite.svg#cross"/>
                    </Cross>
                    {children}
                </Wrapper>
            </Overlay>
        </Modal>
    );
}

