'use server'

import { supabaseAdmin } from '@/lib/supabase'

export async function submitLead(formData: FormData) {
    const fullName = formData.get('fullName') as string
    const email = formData.get('email') as string
    const companyRole = formData.get('companyRole') as string
    const bottleneck = formData.get('bottleneck') as string

    try {
        if (!fullName || !email) {
            return { error: 'Nombre y correo son obligatorios' }
        }

        const { data, error } = await supabaseAdmin
            .from('leads')
            .insert([
                {
                    full_name: fullName,
                    email,
                    company_role: companyRole,
                    bottleneck
                }
            ])
            .select()

        if (error) {
            console.error('Supabase Error Details:', error)
            return { error: `Error de base de datos: ${error.message}` }
        }

        return { success: true, data }
    } catch (err: any) {
        console.error('Action Exception:', err)
        return { error: `Excepción en el servidor: ${err.message || 'Error desconocido'}` }
    }
}
