import { Link } from 'react-router-dom';
import * as C from './styles';
import { FaUserGraduate } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";
import React from 'react';

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}

const SafeFaUserGraduate = FaUserGraduate as unknown as React.FC<{ color?: string; size?: number }>;
const SafeMdMenuBook = MdMenuBook as unknown as React.FC<{ color?: string; size?: number }>;
const SafeMdEmail = MdEmail as unknown as React.FC<{ color?: string; size?: number }>;

export const SidebarItem = ({ title, description, icon, path, active }: Props) => {
    return (
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    {icon === 'profile' &&
                        <SafeFaUserGraduate color="white" size={24} />
                    }

                    {icon === 'book' &&
                        <SafeMdMenuBook color="white" size={24} />
                    }

                    {icon === 'email' &&
                        <SafeMdEmail color="white" size={24} />
                    }
                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    )
}