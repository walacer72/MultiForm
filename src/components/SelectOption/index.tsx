import { ReactNode } from 'react';
import * as C from './styles';


type Props = {
    Title: string;
    Description: string;
    Icon: ReactNode; 
    selected: boolean;
    onClick: () => void;
}

export const SelectOption = ({Title, Description, Icon, selected, onClick}: Props) => {
    return (
        <C.Container onClick={onClick} selected={selected}>
            <C.Icon>
                {Icon}
            </C.Icon>
            <C.Info>
                <C.Title>{Title}</C.Title>
                <C.Description>{Description}</C.Description>
            </C.Info>
        </C.Container>
    )
}