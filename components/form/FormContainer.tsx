'use client';

import { useFormState } from 'react-dom';
import { ReactNode, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { actionFunction } from '@/utils/types';

const initialState = {
    message: ''
}

export default function FormContainer({ action, children }: { action: actionFunction, children: ReactNode }) {

    const [state, formAction] = useFormState(action, initialState);
    const { toast } = useToast();

    useEffect(() => {
        if (state.message) {
            toast({ description: state.message })
        }
    }, [state]);
    return (
        <form action={formAction}>
            {children}
        </form>
    )
}
