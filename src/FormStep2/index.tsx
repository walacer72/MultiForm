import { Theme } from '../components/Theme';
import * as C from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../components/SelectOption';
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import CodeIcon from "@mui/icons-material/Code";

export const FormStep2 = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
        
    }, [dispatch, navigate, state.name]);

    const handleNextStep = () => {
        if (state.name !== '') {
            navigate('/step3');
        } else {
            alert('Preencha os Dados!');
        }

    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

                <hr />

                <SelectOption Title={'Sou Iniciante'}
                    Description={'Candidato iniciante em programação, com conhecimentos básicos em lógica, HTML, CSS e JavaScript'}
                    Icon={<EmojiObjectsIcon style={{ color: state.level === 0 ? '#06b6d4' : '#fff' }} />}
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption Title={'Sou Programador'}
                    Description={'Desenvolvedor com cerca de 2 anos de experiência em programação, atuando em projetos reais.'}
                    Icon={<CodeIcon style={{ color: state.level === 1 ? '#06b6d4' : '#fff' }} />}
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link to="/" className='backButton' >Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>

    )
}