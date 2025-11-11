import styled from "styled-components";

export const Container = styled.div<{ selected: boolean; }>`
    display: flex;
    border: 2px solid ${props => props.selected ? '#06b6d4' : '#083344'};
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px;
    align-itens: center;
    cursor: pointer;
    transition: border-color 0.3s ease;

    &:hover {
        
        border: 2px solid #06b6d4;
    }
`;

export const Icon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #083344;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: 06b6d4;

`;

export const Info = styled.div`
    flex: 1;
    margin-left: 20px;
`;

export const Title = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 7px;

`;

export const Description = styled.div`
    font-size: 13px;
    color: #b8b8d4;    
`;