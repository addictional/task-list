import React, { useCallback, useEffect} from 'react';
import {createPortal} from 'react-dom';
import {CSSTransition} from 'react-transition-group';
import {
    Background,
    Overlay,
    Wrapper,
    Cross,
    TransitionName
} from './styles';


interface Props {
    visibility? : boolean,
    onClose() : void; 
}

export const Popup : React.FC<Props> = ({children,visibility = true,onClose}) => {
    const root = document.getElementById('modal');
    
    useEffect(()=>{
        if(visibility) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    },[visibility]);



    const handleClose : React.MouseEventHandler = useCallback((e) => {
        const target = e.target as any;
        if(target.dataset.close) {
            if(typeof onClose === 'function') {
                onClose();
            } else {
                throw new Error('handler onClose required!');
            }    
        }
    },[]);// eslint-disable-line react-hooks/exhaustive-deps
    
    
    return createPortal(
            <CSSTransition
                in={visibility}
                classNames={TransitionName}
                timeout={200} 
            >
                {state => (
                    <React.Fragment>
                        <Background className={`${TransitionName}-${state}`} />
                        <Overlay className={`${TransitionName}-${state}`} data-close={true} onClick={handleClose}>
                            <Wrapper className={`${TransitionName}-${state}`}>
                                <Cross data-close={true} onClick={handleClose}>
                                    <use xlinkHref="/sprite.svg#cross"/>
                                </Cross>
                                {children}
                            </Wrapper>
                        </Overlay>
                    </React.Fragment>
                )}
            </CSSTransition>
    ,root as HTMLElement);
}