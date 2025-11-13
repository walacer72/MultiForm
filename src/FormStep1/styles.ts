import styled from "styled-components";

export const Container = styled.div`
    
    
    p {
        font-size: 13px;
        color: #B8B8D4;
    }

    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;

    }

    hr {
        height: 1px;
        border: 0;
        background-color: #27272a;
        margin: 30px 0;
    }

    label {
        
        font-size: 13px;

        input {
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            
            padding: 20px 10px;
            border-radius: 10px;
            border: 2px solid #083344;
            color: #fff;
            outline: 0;
            font-size: 15px;
            background-color: #18181b;

        }
    }

    button {
        background-color: #083344;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 20px;
        transition: opacity .3s ease;

        &:hover {
        
            opacity: 0.8;
        }
    }
`;